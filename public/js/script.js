//Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}

//Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');


hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden'); 
});

const forumDropdown = document.getElementById('forum-dropdown');
const caretDown = forumDropdown.querySelector('.ph-caret-down');
const caretUp = forumDropdown.querySelector('.ph-caret-up');
const dropdownContent = document.querySelector('.dropdown-content');

        forumDropdown.addEventListener('click', () => {
            const expanded = forumDropdown.getAttribute('aria-expanded') === 'true' || false;

            if (!expanded) {
                forumDropdown.setAttribute('aria-expanded', 'true');
                dropdownContent.classList.remove('hidden');
                dropdownContent.style.display = 'flex';
                dropdownContent.style.flexDirection = 'column';
                caretDown.classList.add('hidden');
                caretUp.classList.remove('hidden');
            } else {
                forumDropdown.setAttribute('aria-expanded', 'false');
                dropdownContent.classList.add('hidden');
                dropdownContent.style.display = 'none';
                caretDown.classList.remove('hidden');
                caretUp.classList.add('hidden');
            }
        });