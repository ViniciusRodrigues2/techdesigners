(()=>{

    let menu = document.querySelector('.c-button');
    menu.addEventListener('click',()=>{
        let menulist = document.querySelector('.menu-case');
        let img = document.querySelector('.c-button img');
            img.src = '/assest/img/menu.png';
        if(menulist.classList.contains('close')){
            menulist.classList.remove('close');
        }else{
            menulist.classList.add('close');
            let img = document.querySelector('.c-button img');
            img.src = '/assest/img/menu-white.png';
        }
    })


})();