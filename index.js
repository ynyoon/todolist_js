//const title = document.getElementById("title");
const title = document.querySelector("#title");
//const BASE_COLOR = "rgb(125, 254, 251)";
//const OTHER_COLOR = "red";

const CLICKED_CLASS = "clicked";

function handleClick(event){
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(hasClass)    {
    //     title.classList.remove(CLICKED_CLASS);
    // }else{
    //     title.classList.add(CLICKED_CLASS);
    // }

    //토글펑션은 위와 같은 기능을 함.
    title.classList.toggle(CLICKED_CLASS);

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
//    title.addEventListener("mouseenter",handleClick);
//    window.addEventListener("resize",handleResize);
}

init();
