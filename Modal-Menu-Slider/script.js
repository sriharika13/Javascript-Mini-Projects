// we need: toggle button for nav bar
// then we need sign up button to open Modal
// modal itself to show how it fades in
// close button on modal to closee it
//or click somewhere in background to close modal

const toggle= document.getElementById("toggle")
const open= document.getElementById("open")
const modal= document.getElementById("modal")
const close= document.getElementById("close")

toggle.addEventListener('click', ()=>{
    document.body.classList.toggle('show-nav')
})

open.addEventListener('click', ()=>{
    modal.classList.add('show-modal')   // adding class to modal-container class
})

close.addEventListener('click', ()=>{
    modal.classList.remove('show-modal')
})

window.addEventListener('click', e=>
e.target==modal? modal.classList.remove('show-modal') : false)    //?????
