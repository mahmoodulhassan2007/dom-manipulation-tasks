// console.log("hassan");
 function alertbutton(event){
        alert("clicked on search: " + event.target.textContent);
    }
let mybutton = document.getElementById('button_click');
document.addEventListener('click',alertbutton);
