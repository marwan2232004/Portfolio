let paths = Object.values(document.querySelectorAll(".svg-container path"));
let balls = Object.values(document.getElementsByClassName("tracker"));
let circles = Object.values(document.getElementsByClassName("circle"));
let blink = Object.values(document.getElementsByClassName("blink-animation"));
let container = document.querySelector(".circles");
let brain = document.querySelector(".brain");
let target;
let focusElement = null;
let currentTime;

// ! Because  of mobiles and tablets can't handle this kind of continuous calling of this function to make the dot moving
// ! I will remove this animation from them so that the user gets a smooth experience
const mediaQuery = window.matchMedia("(max-width: 768px)");



paths.forEach((path) => {
  let pathLength = path.getTotalLength();
  path.style.strokeDasharray = pathLength + " " + pathLength;
  path.style.strokeDashoffset = pathLength;
});
balls.forEach((ball) => {
  ball.style.filter = `blur(2px)`;
});
opacity_0(circles); //* for fade animation when scrolling

function moveObj(prCnt) {
  for (let i = 0; i < balls.length; i++) {
    let prCnt2 = (prCnt * paths[i].getTotalLength()) / 100;
    pt = paths[i].getPointAtLength(prCnt2);
    pt.x = pt.x;
    pt.y = pt.y;
    balls[i].style.transform = "translate(" + pt.x + "px," + pt.y + "px)";
  }
}
/*---------------------------Fade Animation-------------------------*/
const fadeAnimation = (exception) => {
  if (elementInView(container, container.style.height / 2)||exception) {
    paths.forEach((path, i) => {
      circles[i].style.animation = "fadeout 1.5s ease-in-out forwards";
      path.style.animation = "dash 2.2s linear forwards";
    });
  } else if (!elementInView(container)) {
    paths.forEach((path, i) => {
      path.style.animation = "none";
      circles[i].style.animation = "none";
    });
  }
};

if (!mediaQuery.matches) {
  window.addEventListener("scroll", ()=>fadeAnimation(false));
  fadeAnimation(false);
}
else {
  fadeAnimation(true);
}
/*---------------------------------------------------------------------------------------*/
/*--------------------------Moving Dot and Blink Animation-------------------------------*/
function addAnimation(flag) {
  blink.forEach((circle, i) => {
    if (flag) {
      circle.style.animation = `blink${i + 1} 1s ease-in-out`;
    } else {
      circle.style.animation = "none";
    }
  });
}

const animationHandler = (prCnt) => {
  if (!elementInView(container)) prCnt = 0; //* reset when scrolling down again
  moveObj(prCnt);
  if (prCnt < 100) {
    setTimeout(function () {
      animationHandler(prCnt + 1);
    }, 20);
  } else {
    addAnimation(true); //* Blink when the dot arrives

    setTimeout(function () {
      //* to avoid stack overflow
      animationHandler(0);
    }, 20);

    setTimeout(function () {
      //* wait fot animation to be done
      addAnimation(false);
    }, 1000);
  }
};
moveObj(0);
if (!mediaQuery.matches) {
  setTimeout(() => animationHandler(0), 90);
}
/*-----------------------------------------------------------------*/
/*-------------------------Select Animation-----------------------------*/
function editStyles(parent) {
  //* Blur Animation
  paths.forEach((path, i) => {
    if (path.id != parent.classList[1]) {
      path.style.transition = `filter 1s ease-in-out`;
      path.style.filter = `blur(5px)`;
      balls[i].style.filter = `blur(5px)`;
    }
  });

  circles.forEach((circle) => {
    if (circle != parent) {
      circle.style.transition = `filter 1s ease-in-out`;
      circle.style.filter = `blur(5px)`;
    }
  });

  brain.style.animation = `none`; //* Remove  Animation to allow transition to happen
  brain.style.cssText += styles[parent.classList[1]]; //* Add the Selected element style
  setTimeout(() => {
    //? To allow the animation to be none
    brain.style.transition = `transform 1s ease-in-out`;
    brain.style.transform = `scale(1.4)`;
    brain.children[0].style.transition = "opacity 1s ease-in-out";
    brain.children[0].style.opacity = 0;
    brain.children[0].style.display = "none"; //* The Child is still there
  }, 10);
}
function writeData(parent) {
  //* Add the information
  const ul = document.createElement("ul");
  servicesData[parent.classList[1]].forEach((service, i) => {
    const li = document.createElement("li");
    li.style.transition = `opacity ${0.8 + 0.5 * i}s ease-in-out`;
    li.style.opacity = 0;
    li.innerHTML = service;
    ul.appendChild(li);
  });
  brain.appendChild(ul);
  setTimeout(() => {
    //* Wait to the ul to be appended to the brain to make animation
    const size = ul.childNodes.length;
    for (let i = 0; i < size; i++) {
      ul.children[i].style.opacity = 1;
    }
  }, 10);
}
function hideInformation(parent) {
  //* Adding the brain img to allow the animation to be able to occur
  //*and set position ot absolute to prevent any interaction with other elements while removing them
  brain.children[0].style.display = "inline-block";
  brain.children[0].style.position = "absolute";

  const ul = brain.children[1];
  const size = ul.childNodes.length;
  for (let i = 0; i < size; i++) {
    //* fade animation
    ul.children[i].style.transition = `opacity ${
      0.8 + 0.5 * (size - i)
    }s ease-in-out`;
    ul.children[i].style.opacity = 0;
  }

  setTimeout(() => {
    //* waiting for li to end their animation
    //* removing them physically
    while (ul.hasChildNodes()) {
      ul.removeChild(ul.children[0]);
    }
    brain.removeChild(ul);
    //* Undo the edited styles
    brain.style.transform = `scale(1)`;
    brain.children[0].style.position = "static";
    brain.children[0].style.opacity = 1;
    paths.forEach((path, i) => {
      if (path.id != parent.classList[1]) {
        path.style.filter = `blur(0px)`;
        balls[i].style.filter = `blur(0px)`;
      }
    });
    circles.forEach((circle) => {
      if (circle != parent) {
        circle.style.filter = `blur(0px)`;
      }
    });
    //*setting the style to the selected element style
    brain.style.animation = `blink${
      styles.brain[parent.classList[1]]
    } 2s ease-in-out infinite`;
  }, 1500);

  setTimeout(() => {
    //* waiting for the animations to complete
    focusElement = null;
  }, 2000);

  //** if i want to leave the original color */
  // setTimeout(() => {
  //   brain.style.cssText="";
  //   brain.style.transition = `background-image 1s ease-in-out`;
  //   brain.style.cssText += styles.brain;
  // }, 3000);
}
function showInformation(parent) {
  editStyles(parent);
  setTimeout(() => writeData(parent), 500); //* waiting  for the animation to complete
  currentTime = setTimeout(() => hideInformation(parent), 3000); //* auto cancel
}
circles.forEach((circle) => {
  circle.addEventListener("click", function () {
    if (!focusElement) {
      showInformation(this);
      focusElement = this;
    }
  });
});

document.addEventListener("click", function (e) {
  //* Cancel with clicking
  target = e.target;
  if (focusElement) {
    const el1 = focusElement.children[0].children[0];
    const el2 = el1.children[0];
    if (
      el1 != target &&
      el2 != target &&
      brain != target &&
      brain != target.parentElement.parentElement
    ) {
      clearTimeout(currentTime); //* remove the auto cancel
      hideInformation(focusElement);
    }
  }
});
