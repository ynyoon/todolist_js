//const title = document.getElementById("title");
const title = document.querySelector("#title");
//const BASE_COLOR = "rgb(125, 254, 251)";
//const OTHER_COLOR = "red";

const CLICKED_CLASS = "clicked";

function handleClick(event){
    console.log('!');
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS)    {
        title.className = CLICKED_CLASS;
    }else{
        title.className = "";
    }
}

// function handleClick(){
    
//     const currentColor = title.style.color;
//     if(currentColor === BASE_COLOR){
//         console.log(11);
//         title.style.color = OTHER_COLOR;
//     }else{
//         console.log(22);
//         title.style.color = BASE_COLOR;
//     }
// }

function init(){
    title.addEventListener("click",handleClick);
    title.addEventListener("mouseenter",handleClick);
//    window.addEventListener("resize",handleResize);
}

init();
