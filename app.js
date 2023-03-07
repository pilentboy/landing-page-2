let navLinks=document.querySelector("#nav .links")
let linksItem=document.querySelectorAll(".links .item")


document.querySelector("#displayNavBTN").addEventListener("click",()=>{
    navLinks.classList.add("transYZ")
    Array.from(linksItem).forEach(e =>{
        e.classList.add("transXZ")
    })
})

document.querySelector("#hideNavBTN").addEventListener("click",()=>{
    navLinks.classList.remove("transYZ")
    Array.from(linksItem).forEach(e =>{
        e.classList.remove("transXZ")
    })
    
})

window.addEventListener("scroll",()=>{
    navLinks.classList.remove("transYZ")
    Array.from(linksItem).forEach(e =>{
        e.classList.remove("transXZ")
    })
})