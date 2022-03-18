let itemMenu = document.getElementById('menuItems');
itemMenu.style.maxHeight = "0px";

function menuToggle() {
    if (itemMenu.style.maxHeight == "0px") {
        itemMenu.style.maxHeight = "200px";
    }
    else {
        itemMenu.style.maxHeight = "0px"
    }
}


ScrollReveal().reveal('.aniMe1', { delay: 250 });
ScrollReveal().reveal('.aniMe2', { delay: 500 });
ScrollReveal().reveal('.aniMe3', { delay: 750 });
ScrollReveal().reveal('.aniMe4', { delay: 1000 });
ScrollReveal().reveal('.aniMe5', { delay: 1250 });
ScrollReveal().reveal('.aniMe6', { delay: 1500 });
ScrollReveal().reveal('.aniMe7', { delay: 1750 });
ScrollReveal().reveal('.aniMe8', { delay: 2000 });

window.sr = ScrollReveal();

sr.reveal('.anime-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.anime-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.anime-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.anime-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 300
});