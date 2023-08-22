const servicesData = {
  figma: ["Figma", "UI/UX design"],
  arduino: ["Arduino", "Smart garage", "Line follower robot"],
  github: ["Github", "Git"],
  react: ["React", "React Native"],
  code: ["C++", "JavaScript", "Python"],
  coding: ["HTML", "CSS/SASS", "JavaScript"],
};

const styles = {
  figma: ` 
  box-shadow: 0px 0px 28px -2px rgba(254, 15, 115, 1);
    background-image: radial-gradient(
        circle,
        #ecdae4,
        #d0a8be,
        #b47898,
        #984772,
        #7a064d
      );
    `,
  arduino: `  background-image: radial-gradient(
    circle,
    #b0ffff,
    #89d9d8,
    #63b5b2,
    #3d918d,
    #0a6f6a
  );
  box-shadow: 0px 0px 16px 2px #00fff0;
  `,
  github: `  background-image: radial-gradient(
    circle,
    #e0c4f8,
    #bb96d9,
    #9769bb,
    #733c9c,
    #4f067e
  );
  box-shadow: 0px 0px 24px 0px rgba(202, 52, 255, 1);
  `,
  react: ` background-image: radial-gradient(
    circle,
    #daebec,
    #b3c2c3,
    #8e9a9b,
    #6b7575,
    #495151
  );
box-shadow: 0px 0px 30px 4px #d8d8d8;
`,
  code: `  background-image: radial-gradient(
    circle,
    #dae6ec,
    #a6bece,
    #7497b1,
    #457195,
    #064d7a
  );
  box-shadow: 0px 0px 33px 6px rgba(69, 196, 251, 1);
  `,
  coding: `background-image: radial-gradient(
    circle,
    #bec0c9,
    #9398b7,
    #6a72a3,
    #414d8f,
    #062a7a
  );  
  box-shadow: 0px 0px 45px -1px #3787ff;
  `,
  brain: {
    figma: "1",
    code: "2",
    arduino: "3",
    coding: "4",
    github: "5",
    react: "6",
  },
};
const backGroundIcons = [
  `<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="bgIcon icon1">
<path d="M0.210227 6.93182V6.25L5.69886 3.45455V4.54545L1.48864 6.57386L1.52273 6.50568V6.67614L1.48864 6.60795L5.69886 8.63636V9.72727L0.210227 6.93182ZM10.9158 0.863636L8.10334 11.3125H7.18288L9.99538 0.863636H10.9158ZM17.8864 6.93182L12.3977 9.72727V8.63636L16.608 6.60795L16.5739 6.67614V6.50568L16.608 6.57386L12.3977 4.54545V3.45455L17.8864 6.25V6.93182Z" fill="black"/>
</svg>`,
  `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"  class="bgIcon icon2">
<path d="M2.25 0.272727L2.16477 6.54545H1.17614L1.09091 0.272727H2.25ZM1.67045 9.06818C1.46023 9.06818 1.27983 8.9929 1.12926 8.84233C0.978693 8.69176 0.903409 8.51136 0.903409 8.30114C0.903409 8.09091 0.978693 7.91051 1.12926 7.75994C1.27983 7.60937 1.46023 7.53409 1.67045 7.53409C1.88068 7.53409 2.06108 7.60937 2.21165 7.75994C2.36222 7.91051 2.4375 8.09091 2.4375 8.30114C2.4375 8.44034 2.40199 8.56818 2.33097 8.68466C2.26278 8.80114 2.17045 8.89489 2.05398 8.96591C1.94034 9.03409 1.8125 9.06818 1.67045 9.06818ZM4.66939 3.83523V2.91477H9.91939V3.83523H4.66939ZM4.66939 6.35795V5.4375H9.91939V6.35795H4.66939Z" fill="black"/>
</svg>
`,
  `<svg width="3" height="12" viewBox="0 0 3 12" fill="none" xmlns="http://www.w3.org/2000/svg"  class="bgIcon icon3">
<path d="M0.278409 6.31818C0.278409 5.24432 0.417614 4.2571 0.696023 3.35653C0.977273 2.45312 1.37784 1.62216 1.89773 0.863636H2.78409C2.57955 1.14489 2.38778 1.49148 2.20881 1.90341C2.03267 2.3125 1.87784 2.76278 1.74432 3.25426C1.6108 3.7429 1.50568 4.24858 1.42898 4.77131C1.35511 5.29403 1.31818 5.80966 1.31818 6.31818C1.31818 6.99432 1.38352 7.6804 1.5142 8.37642C1.64489 9.07244 1.82102 9.71875 2.04261 10.3153C2.2642 10.9119 2.51136 11.3977 2.78409 11.7727H1.89773C1.37784 11.0142 0.977273 10.1847 0.696023 9.28409C0.417614 8.38068 0.278409 7.39205 0.278409 6.31818Z" fill="black"/>
</svg>
`,
  `<svg width="4" height="12" viewBox="0 0 4 12" fill="none" xmlns="http://www.w3.org/2000/svg"  class="bgIcon icon4">
<path d="M3.06818 6.31818C3.06818 7.39205 2.92756 8.38068 2.64631 9.28409C2.3679 10.1847 1.96875 11.0142 1.44886 11.7727H0.5625C0.767045 11.4915 0.957386 11.1449 1.13352 10.733C1.3125 10.3239 1.46875 9.875 1.60227 9.38636C1.7358 8.89489 1.83949 8.38778 1.91335 7.86506C1.99006 7.33949 2.02841 6.82386 2.02841 6.31818C2.02841 5.64205 1.96307 4.95597 1.83239 4.25994C1.7017 3.56392 1.52557 2.91761 1.30398 2.32102C1.08239 1.72443 0.835227 1.23864 0.5625 0.863636H1.44886C1.96875 1.62216 2.3679 2.45312 2.64631 3.35653C2.92756 4.2571 3.06818 5.24432 3.06818 6.31818Z" fill="black"/>
</svg>
`,
  `<svg width="3" height="12" viewBox="0 0 3 12" fill="none" xmlns="http://www.w3.org/2000/svg"  class="bgIcon icon5">
<path d="M0.414773 11.7727V0.863636H2.9375V1.69886H1.36932V10.9375H2.9375V11.7727H0.414773Z" fill="black"/>
</svg>
`,
  `<svg width="3" height="12" viewBox="0 0 3 12" fill="none" xmlns="http://www.w3.org/2000/svg"  class="bgIcon icon6">
<path d="M2.93182 0.863636V11.7727H0.409091V10.9375H1.97727V1.69886H0.409091V0.863636H2.93182Z" fill="black"/>
</svg>
`,
  `<svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg"  class="bgIcon icon7">
<path d="M0.443182 6.33523V5.80682C0.917614 5.80682 1.24858 5.70739 1.43608 5.50852C1.62642 5.30966 1.72159 4.97727 1.72159 4.51136V3.14773C1.72159 2.75568 1.75852 2.41619 1.83239 2.12926C1.90909 1.84233 2.03267 1.60511 2.20312 1.41761C2.37358 1.23011 2.60085 1.09091 2.88494 1C3.16903 0.909091 3.51989 0.863636 3.9375 0.863636V1.69886C3.60795 1.69886 3.34801 1.75 3.15767 1.85227C2.97017 1.95455 2.83665 2.11364 2.7571 2.32955C2.6804 2.54261 2.64205 2.81534 2.64205 3.14773V4.85227C2.64205 5.07386 2.61222 5.27557 2.55256 5.45739C2.49574 5.6392 2.3892 5.79545 2.23295 5.92614C2.0767 6.05682 1.85369 6.15767 1.56392 6.22869C1.27699 6.29972 0.903409 6.33523 0.443182 6.33523ZM3.9375 11.7727C3.51989 11.7727 3.16903 11.7273 2.88494 11.6364C2.60085 11.5455 2.37358 11.4062 2.20312 11.2188C2.03267 11.0312 1.90909 10.794 1.83239 10.5071C1.75852 10.2202 1.72159 9.88068 1.72159 9.48864V8.125C1.72159 7.65909 1.62642 7.3267 1.43608 7.12784C1.24858 6.92898 0.917614 6.82955 0.443182 6.82955V6.30114C0.903409 6.30114 1.27699 6.33665 1.56392 6.40767C1.85369 6.47869 2.0767 6.57955 2.23295 6.71023C2.3892 6.84091 2.49574 6.99716 2.55256 7.17898C2.61222 7.3608 2.64205 7.5625 2.64205 7.78409V9.48864C2.64205 9.82102 2.6804 10.0938 2.7571 10.3068C2.83665 10.5199 2.97017 10.6776 3.15767 10.7798C3.34801 10.8849 3.60795 10.9375 3.9375 10.9375V11.7727ZM0.443182 6.82955V5.80682H1.44886V6.82955H0.443182ZM8.25107 6.30114V6.82955C7.77663 6.82955 7.44425 6.92898 7.25391 7.12784C7.06641 7.3267 6.97266 7.65909 6.97266 8.125V9.48864C6.97266 9.88068 6.9343 10.2202 6.8576 10.5071C6.78374 10.794 6.66158 11.0312 6.49112 11.2188C6.32067 11.4062 6.09339 11.5455 5.8093 11.6364C5.52521 11.7273 5.17436 11.7727 4.75675 11.7727V10.9375C5.08629 10.9375 5.34482 10.8849 5.53232 10.7798C5.72266 10.6776 5.85618 10.5199 5.93288 10.3068C6.01243 10.0938 6.0522 9.82102 6.0522 9.48864V7.78409C6.0522 7.5625 6.08061 7.3608 6.13743 7.17898C6.19709 6.99716 6.30504 6.84091 6.46129 6.71023C6.61754 6.57955 6.83913 6.47869 7.12607 6.40767C7.41584 6.33665 7.79084 6.30114 8.25107 6.30114ZM4.75675 0.863636C5.17436 0.863636 5.52521 0.909091 5.8093 1C6.09339 1.09091 6.32067 1.23011 6.49112 1.41761C6.66158 1.60511 6.78374 1.84233 6.8576 2.12926C6.9343 2.41619 6.97266 2.75568 6.97266 3.14773V4.51136C6.97266 4.97727 7.06641 5.30966 7.25391 5.50852C7.44425 5.70739 7.77663 5.80682 8.25107 5.80682V6.33523C7.79084 6.33523 7.41584 6.29972 7.12607 6.22869C6.83913 6.15767 6.61754 6.05682 6.46129 5.92614C6.30504 5.79545 6.19709 5.6392 6.13743 5.45739C6.08061 5.27557 6.0522 5.07386 6.0522 4.85227V3.14773C6.0522 2.81534 6.01243 2.54261 5.93288 2.32955C5.85618 2.11364 5.72266 1.95455 5.53232 1.85227C5.34482 1.75 5.08629 1.69886 4.75675 1.69886V0.863636ZM8.25107 5.80682V6.82955H7.24538V5.80682H8.25107Z" fill="black"/>
</svg>
`,
  `<svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg"  class="bgIcon icon8">
<path d="M5.94886 11.3011C5.07955 11.3011 4.31108 11.1818 3.64347 10.9432C2.97585 10.7074 2.41477 10.3594 1.96023 9.89915C1.50568 9.43892 1.16193 8.875 0.928977 8.20739C0.696023 7.53977 0.579545 6.77557 0.579545 5.91477C0.579545 5.08239 0.697443 4.33807 0.933239 3.68182C1.17188 3.02557 1.51705 2.46875 1.96875 2.01136C2.4233 1.55114 2.97443 1.20028 3.62216 0.958807C4.27273 0.717329 5.00852 0.596591 5.82955 0.596591C6.62784 0.596591 7.3267 0.727272 7.92614 0.988636C8.52841 1.24716 9.03125 1.59801 9.43466 2.04119C9.84091 2.48153 10.1449 2.97727 10.3466 3.52841C10.5511 4.07955 10.6534 4.64773 10.6534 5.23295C10.6534 5.64489 10.6335 6.0625 10.5938 6.4858C10.554 6.90909 10.4702 7.2983 10.3423 7.65341C10.2145 8.00568 10.017 8.28977 9.75 8.50568C9.4858 8.72159 9.12784 8.82955 8.67614 8.82955C8.47727 8.82955 8.25852 8.7983 8.01989 8.7358C7.78125 8.6733 7.5696 8.5696 7.38494 8.42472C7.20028 8.27983 7.09091 8.08523 7.05682 7.84091H7.00568C6.9375 8.00568 6.83239 8.16193 6.69034 8.30966C6.55114 8.45739 6.3679 8.57528 6.14062 8.66335C5.91619 8.75142 5.64205 8.78977 5.31818 8.77841C4.94886 8.7642 4.62358 8.68182 4.34233 8.53125C4.06108 8.37784 3.82528 8.17045 3.63494 7.90909C3.44744 7.64489 3.3054 7.33949 3.20881 6.9929C3.11506 6.64347 3.06818 6.26705 3.06818 5.86364C3.06818 5.48011 3.125 5.12926 3.23864 4.81108C3.35227 4.4929 3.50994 4.21449 3.71165 3.97585C3.91619 3.73722 4.15483 3.54687 4.42756 3.40483C4.70313 3.25994 5 3.17045 5.31818 3.13636C5.60227 3.10795 5.8608 3.12074 6.09375 3.17472C6.3267 3.22585 6.51847 3.30398 6.66903 3.40909C6.8196 3.51136 6.91477 3.625 6.95455 3.75H7.00568V3.27273H7.90909V7.125C7.90909 7.36364 7.97585 7.57386 8.10938 7.75568C8.2429 7.9375 8.4375 8.02841 8.69318 8.02841C8.98295 8.02841 9.20455 7.92898 9.35795 7.73011C9.5142 7.53125 9.62074 7.22443 9.67756 6.80966C9.73722 6.39489 9.76705 5.86364 9.76705 5.21591C9.76705 4.83523 9.71449 4.46023 9.60938 4.09091C9.5071 3.71875 9.35085 3.37074 9.14062 3.04688C8.93324 2.72301 8.67045 2.4375 8.35227 2.19034C8.03409 1.94318 7.66051 1.75 7.23153 1.6108C6.8054 1.46875 6.32102 1.39773 5.77841 1.39773C5.1108 1.39773 4.51278 1.50142 3.98438 1.70881C3.45881 1.91335 3.01136 2.21307 2.64205 2.60795C2.27557 3 1.99574 3.47727 1.80256 4.03977C1.61222 4.59943 1.51705 5.2358 1.51705 5.94886C1.51705 6.6733 1.61222 7.31676 1.80256 7.87926C1.99574 8.44176 2.27983 8.91619 2.65483 9.30256C3.03267 9.68892 3.5 9.98153 4.05682 10.1804C4.61364 10.3821 5.25568 10.483 5.98295 10.483C6.29545 10.483 6.60369 10.4531 6.90767 10.3935C7.21165 10.3338 7.48011 10.2685 7.71307 10.1974C7.94602 10.1264 8.11364 10.0739 8.21591 10.0398L8.45455 10.8239C8.27841 10.8977 8.0483 10.9716 7.7642 11.0455C7.48295 11.1193 7.18182 11.1804 6.8608 11.2287C6.54261 11.277 6.23864 11.3011 5.94886 11.3011ZM5.45455 7.90909C5.83523 7.90909 6.14347 7.83239 6.37926 7.67898C6.61506 7.52557 6.78693 7.29403 6.89489 6.98438C7.00284 6.67472 7.05682 6.28409 7.05682 5.8125C7.05682 5.33523 6.99716 4.96307 6.87784 4.69602C6.75852 4.42898 6.58239 4.24148 6.34943 4.13352C6.11648 4.02557 5.82955 3.97159 5.48864 3.97159C5.16477 3.97159 4.88778 4.05682 4.65767 4.22727C4.4304 4.39489 4.25568 4.61932 4.13352 4.90057C4.0142 5.17898 3.95455 5.48295 3.95455 5.8125C3.95455 6.17614 4.00284 6.51847 4.09943 6.83949C4.19602 7.15767 4.35369 7.41619 4.57244 7.61506C4.79119 7.81108 5.08523 7.90909 5.45455 7.90909Z" fill="black"/>
</svg>
`,
  `<svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg"  class="bgIcon icon9">
<path d="M4.17614 9L5.60795 0.272727H6.46023L5.02841 9H4.17614ZM0.204545 6.57955L0.340909 5.72727H6.85227L6.71591 6.57955H0.204545ZM1.10795 9L2.53977 0.272727H3.39205L1.96023 9H1.10795ZM0.715909 3.54545L0.852273 2.69318H7.36364L7.22727 3.54545H0.715909Z" fill="black"/>
</svg>
`,
  `<svg width="14" height="5" viewBox="0 0 14 5" fill="none" xmlns="http://www.w3.org/2000/svg"  class="bgIcon icon10">
<path d="M0.329546 1.78977V0.869318H5.57955V1.78977H0.329546ZM0.329546 4.3125V3.39205H5.57955V4.3125H0.329546ZM8.2397 1.78977V0.869318H13.4897V1.78977H8.2397ZM8.2397 4.3125V3.39205H13.4897V4.3125H8.2397Z" fill="black"/>
</svg>
`,
  `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"  class="bgIcon icon11">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.0158 6.00288H15.0236V5.24165H20V0.937132H18.9921V0H10.8976V0.937066H9.92113V6.93995H8.91339V7.84768H7.43309V8.78474H5.95272V9.72174H4.94484V10.6295H3.11805V9.69247H2.14169V8.78474H1.13381V6.93995H0V12.6208H0.976361V13.5578H1.98417V14.4656H2.9606V15.4026H3.96848V16.3103H4.94484V19.9999H7.0866V18.9456H6.11017V18.1552H7.0866V17.2474H8.09448V16.3104H8.91332V17.2474H9.9212V20H12.063V18.9456H11.0551V15.4025H12.063V14.4656H13.0393V13.0893H14.0472V9.86824H14.8661V10.776H16.0314V8.78481H14.0473V7.08644H18.0158V6.00288Z" fill="#0D0707"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.874 1.34702H13.0708V2.45972H11.874V1.34702Z" fill="white"/>
</svg>
`,
];

const projectsData = [
  {
    name: "Paint for Kids",
    field: "UI/UX Design,C++",
    imgUrl: "images/Projects/Paint for Kids.png",
    description: `  This program makes it possible for children to unleash the
    power of their imagination. Here, they can draw shapes from
    the toolbar, resize them, or switch their position.`,
  },
  {
    name: "Process Scheduler",
    field: "Simulator,C++",
    imgUrl: "images/Projects/process-scheduler.png",
    description: `  This is a process scheduler project that allows us to simulate
    how multiprocessor CPU work. It contains some algorithm like
    "First Come First Serve","Shortest Job First","Round Robin".`,
  },
  {
    name: "Lorem Ipsum",
    field: "Website",
    imgUrl: "images/Projects/Img1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Architecto ea dolore impedit placeat veritatis velit consequuntur corrupti 
     officiis qui fugiat. Hic tenetur unde repudiandae. `,
  },
  {
    name: "Lorem Ipsum",
    field: "Mobile App",
    imgUrl: "images/Projects/Img2.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Architecto ea dolore impedit placeat veritatis velit consequuntur corrupti 
    officiis qui fugiat.`,
  },
  {
    name: "Lorem Ipsum",
    field: "Mobile App",
    imgUrl: "images/Projects/Img3.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Architecto ea dolore impedit placeat veritatis velit consequuntur corrupti 
    officiis qui fugiat.`,
  },
  {
    name: "Lorem Ipsum",
    field: "AI",
    imgUrl: "images/Projects/Img4.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Architecto ea dolore impedit placeat veritatis velit consequuntur corrupti 
    officiis qui fugiat.`,
  },
  {
    name: "Lorem Ipsum",
    field: "AI",
    imgUrl: "images/Projects/Img5.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Architecto ea dolore impedit placeat veritatis velit consequuntur corrupti 
    officiis qui fugiat.`,
  },
  {
    name: "Lorem Ipsum",
    field: "AI",
    imgUrl: "images/Projects/Img6.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Architecto ea dolore impedit placeat veritatis velit consequuntur corrupti 
    officiis qui fugiat.`,
  },
  {
    name: "Lorem Ipsum",
    field: "UI/UX Design",
    imgUrl: "images/Projects/Img7.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Architecto ea dolore impedit placeat veritatis velit consequuntur corrupti 
    officiis qui fugiat.`,
  },
];
const testimonialsData = [
  {
    rating: [5,0],
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Architecto ea dolore impedit placeat veritatis velit consequuntur corrupti 
    officiis qui fugiat.`,
    url: "https://cdn.britannica.com/98/236598-050-9F0C5A8D/Mark-Zuckerberg-2019.jpg",
    name: "Mark-Zuckerberg",
    position: "CEO",
  },
  {
    rating: [4,1],
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Architecto ea dolore impedit placeat veritatis velit consequuntur corrupti 
    officiis qui fugiat.`,
    url: "data:image/jpeg;base64,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",
    name: "Elon Musk",
    position: "CEO",
  },
  {
    rating: [5,0],
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Architecto ea dolore impedit placeat veritatis velit consequuntur corrupti 
    officiis qui fugiat.`,
    url: "data:image/jpeg;base64,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",
    name: "Jeff Bezos",
    position: "CEO",
  },
];
