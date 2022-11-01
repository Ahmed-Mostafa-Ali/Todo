let add=document.querySelector("#add")
let input=document.querySelector("#name")
let ul=document.querySelector("#main")
add.addEventListener("click",function(){
    ul.innerHTML+=`
    <li><span>${input.value}</span><button class="remove">remove</button></li>`
    input.value=""
    if (add.textContent=="Add") {
        add.textContent="save"
    }
    else{
        add.textContent="Add"    
    }
    console.log(add.textContent);
})
document.onclick=function(b){
    if(b.target.classList=="remove"){
     console.log("yes");
    b.target.parentElement.remove()
    }
   console.log(b.target);
}