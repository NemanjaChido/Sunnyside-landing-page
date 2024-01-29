
//for active-links

//select the specific link and add event listener as folows;
let selectedNav = document.getElementById('nav-link-4');

selectedNav.addEventListener('mouseleave', () =>{
    //The "Active" class is added once the mouse leaves the selected link
    selectedNav.classList.add('active');
});

selectedNav.addEventListener('mouseenter', () =>{
    //Remove the added class on mouse enter
    selectedNav.classList.remove('active');
});




//MOBILE SECTION
//select the menu icon and add an event listener to it
let selectedIcon = document.querySelector('.Menu-icon');
let selectedMenu = document.querySelector('.MenuBar');

selectedIcon.addEventListener('click', () => {
    selectedMenu.classList.toggle('display');
});