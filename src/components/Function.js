export default function FirstMenu() {
    const menuclose = document.querySelector('.MobileMenu')
    menuclose.classList.toggle('MobileMenuClose')
    const SecMenu = document.querySelector('.SecondMenu')
    SecMenu.classList.remove('SecondMenuClose')
    const Categ = document.querySelector('.Categ')
    Categ.classList.remove('CategClose')
    const Proizv = document.querySelector('.Proizv')
    Proizv.classList.remove('ProizvClose')
    const MarkStal = document.querySelector('.MarkStal')
    MarkStal.classList.remove('MarkStalClose')
    const Zatoch = document.querySelector('.Zatoch')
    Zatoch.classList.remove('ZatochClose')
    const Masterskaya = document.querySelector('.Masterskaya')
    Masterskaya.classList.remove('MasterskayaClose')
    const Fixed = document.querySelector('body')
    Fixed.classList.toggle('FixedB')
}
export function SecMenu() {
    const SecMenu = document.querySelector('.SecondMenu')
    SecMenu.classList.toggle('SecondMenuClose')
}
export function BackSecMenu() {
    const BackSecMenu = document.querySelector('.SecondMenu')
    BackSecMenu.classList.toggle('SecondMenuClose')
}
export function Categ() {
    const Categ = document.querySelector('.Categ')
    Categ.classList.toggle('CategClose')
}
export function BackCateg() {
    const BackCateg = document.querySelector('.Categ')
    BackCateg.classList.toggle('CategClose')
}
export function Proizv() {
    const Proizv = document.querySelector('.Proizv')
    Proizv.classList.toggle('ProizvClose')
}
export function BackProizv() {
    const BackProizv = document.querySelector('.Proizv')
    BackProizv.classList.toggle('ProizvClose')
}
export function MarkStal() {
    const MarkStal = document.querySelector('.MarkStal')
    MarkStal.classList.toggle('MarkStalClose')
}
export function BackMarkStal() {
    const BackMarkStal = document.querySelector('.MarkStal')
    BackMarkStal.classList.toggle('MarkStalClose')
}
export function Zatoch() {
    const Zatoch = document.querySelector('.Zatoch')
    Zatoch.classList.toggle('ZatochClose')
}
export function BackZatoch() {
    const BackZatoch = document.querySelector('.Zatoch')
    BackZatoch.classList.toggle('ZatochClose')
}
export function Masterskaya() {
    const Masterskaya = document.querySelector('.Masterskaya')
    Masterskaya.classList.toggle('MasterskayaClose')
}
export function BackMasterskaya() {
    const BackMasterskaya = document.querySelector('.Masterskaya')
    BackMasterskaya.classList.toggle('MasterskayaClose')
}


/* 
export function Language(){
    const lanUa = document.querySelector('ua');
    const lanEn = document.querySelector('en');
    const lanRu = document.querySelector('ru'); */     
    /* const iconL = document.querySelector('.fa-earth-europe'); */
    
    /* iconL.addEventListener("click", function(){ alert("Hello World!"); }); */
    /* document.querySelector('#faEu').onclick = function(){
        const langM = document.querySelector('.languageMenu');
        langM.classList.toogle('open')
    }
}

document.querySelector('#faEu').onclick = function faEu(){
    const langM = document.querySelector('.languageMenu');
    langM.classList.toogle('open')
} */


export function lang(){
    document.querySelector('.faEuI').onclick = function() {
        console.log('test')
    }
}

/*  */