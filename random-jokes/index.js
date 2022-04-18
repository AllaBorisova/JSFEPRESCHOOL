// index.js
// import quotes from './quotes.js';


  
const body = document.querySelector('body');
let lang = 'en';

let hexString = "0123456789abcdef";
let randomColor = () => {
    let hexCode = "#";
    for(let i=0; i<6; i++){
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
}
let generateGrad = () => {
    let colorOne = randomColor();
    let colorTwo = randomColor();
    let angle = Math.floor(Math.random() * 360);
    body.style.background = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
   
}

const url = 'https://type.fit/api/quotes';
let data;
let count;

async function getData(langNow) {
	console.log(langNow);
	
	let quotes = 'quotes-' + lang + '.json';
	const res = await fetch(quotes);
	data = await res.json(); 
	count = data.length;
	// console.log(count);
	changeQuote();

  }

  const button = document.querySelector('.btn-quote');
  const quoteBlock = document.querySelector('.quote');
  const quoteText = document.querySelector('.quote-text');
  const quoteAuthor = document.querySelector('.quote-author');
  button.addEventListener('click', changeQuote);

  const langEn = document.querySelector('.en-button');
  const langRu = document.querySelector('.ru-button');

  langEn.addEventListener('click', changeLangEn);
  langRu.addEventListener('click', changeLangRu);

  function changeLangRu(){
	lang = 'ru';
	getData();
	langEn.classList.remove('active');
	langRu.classList.add('active');
  }
  function changeLangEn(){
	lang = 'en';
	getData();
	langRu.classList.remove('active');
	langEn.classList.add('active');
  }


  function getRandomInt(max) {
	return Math.floor(Math.random() * max);
  }

function changeQuote(){
	let quoteRandom = getRandomInt(count);
	quoteText.innerHTML = data[quoteRandom]["text"];
	quoteAuthor.innerHTML = data[quoteRandom]["author"];
	generateGrad();
}


window.onload = function () {
	getData();
	
}

// const langButtons = document.querySelector('.header-lang');
// const langButton = document.querySelectorAll('.header-lang-button');
// const elements = document.querySelectorAll('[data-i18]');


// function getTranslate(event) {
// 	if (event.target.classList.contains('header-lang-button')) {
// 		let lang = event.target.dataset.lang;
// 		localStorage.setItem('lang', lang);
// 		langButton.forEach((button) => button.classList.remove('active'));
// 		changeClassActive(event.target);
// 		elements.forEach((element) => {
// 			if (element.placeholder) {
// 				element.placeholder = i18Obj[lang][element.dataset.i18];
// 				element.textContent = '';
// 			}
// 			element.textContent = i18Obj[lang][element.dataset.i18];

// 		})
// 	}
// }





