const milktea = document.querySelector(".milkTea");
milktea.addEventListener("click", () => {
    document.querySelector(".main").style.display = "none";
})

const teaType = document.querySelector(".tea-type").querySelector("div").querySelectorAll("button");

for(let i = 0;i<teaType.length;i++){
    let pic;
    switch(i){
        case 0:
            pic = "../test-food-business-2/pics/thai-milk.png"
            break;
    }
    teaType[i].addEventListener("click",()=>{
        
        document.querySelector("#cup").classList.add(".fill");
        document.querySelector("#cup").src = pic;
    })
}