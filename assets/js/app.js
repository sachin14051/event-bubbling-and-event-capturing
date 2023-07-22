let cl = console.log;
const parent = document.getElementById("parent");
const child = document.getElementById("child")




const parentCall = () =>{
    alert(`parent call`)
}

const childCall = () =>{
    alert(`child call`)
  //  event.stopPropagation()
}





//event bubbling
parent.addEventListener("click",parentCall,true);
child.addEventListener("click",childCall,true);

//event capturing
parent.addEventListener("click",parentCall,false);
child.addEventListener("click",childCall,false)