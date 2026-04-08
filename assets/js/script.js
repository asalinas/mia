window.addEventListener("load", ()=> {
    let btn_frm = document.getElementById("btn_enviar");

    btn_frm.addEventListener('click', (e)=> {
        e.preventDefault();
        alert('click')
    });



});