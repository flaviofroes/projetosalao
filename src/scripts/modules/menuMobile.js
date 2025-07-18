export default function initMenuMobile(){
    const buttonMobile = document.querySelector('.menuHamburguer');
    const ulist = document.querySelector('[data-menu="menu-list"]');

    if(buttonMobile){
        buttonMobile.addEventListener('click', () => {
            buttonMobile.classList.toggle('ativo');
            // ulist.classList.toggle('ativo');
        });
    }

}
