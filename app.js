const card = document.querySelector('.card');
const imageZoom = document.querySelector('.image-zoom');
const blocFocusTop = document.querySelector('.bloc-focus-top');
const blocFocusBottom = document.querySelector('.bloc-focus-bottom');
const blocContent = document.querySelector('.bloc-content-show')

const TLANIM = gsap.timeline({paused: true});

TLANIM
.fromTo(imageZoom, {scale: 1}, {scale: 2, y: -50, x:200, duration: 0.4,
ease:ExpoScaleEase.config(1,2, 'power2.inOut')})
//pour que le carré d'en haut, monte
.to(blocFocusTop, {top: -30, left: -30, duration: 0.1}, 0.5)
//pour que le 2eme carré en bas descende
.to(blocFocusBottom, {bottom: -30, right: -30, duration: 0.1}, "-=0.1")
//pour que le texte s'affiche en montant
.to(blocContent, {bottom: 200, duration: 0.2}, '-=0.1')

card.addEventListener('mouseenter', () => {
    TLANIM.play();
});

card.addEventListener('mouseleave' , () => {
    TLANIM.reverse();
});