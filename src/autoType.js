const autoType = document.querySelector(".autoType");
const Bar = document.querySelector(".blinkingBar");
function addCharacter(element, index, dont) {
  Bar.style.animation = "none";
  autoType.innerHTML = element.slice(0, index);
  if (index < element.length)
    setTimeout(() => addCharacter(element, index + 1,dont), 100);
  else {
    Bar.style.animation = "blinkBar 1.5s infinite ease-in-out";
    if (!dont) {
      setTimeout(() => removeCharacter(element, element.length - 1), 3000);
    }
  }
}
function removeCharacter(element, index) {
  Bar.style.animation = "none";
  autoType.innerHTML = element.slice(0, index);
  if (index > 0) {
    setTimeout(() => removeCharacter(element, index - 1), 100);
  } else {
    Bar.style.animation = "blinkBar 1.5s infinite ease-in-out";
  }
}

function autoTypeHandler(index) {
  if (index < personalData.length) {
    addCharacter(personalData[index], 0,false);
    setTimeout(
      () => autoTypeHandler(index + 1),
      personalData[index].length * 200 + 3600
    );
  } else {
    addCharacter(personalData[0], 0, true);
  }
}
autoTypeHandler(0);
