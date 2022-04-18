

const area = document.getElementById('area');


const gridItems = document.querySelectorAll('.main-item');
const resultDiv = document.querySelector('.result');
const popup = document.querySelector('.popup');
const bg = document.querySelector('.bg');

const tableResults = document.querySelector('.table-results');

const button = document.querySelector('.start-button');


const saveResult = () => {
  if (localStorage.getItem("results") !== null) {
  let localStr = localStorage.getItem("results");
  
  let localArr = localStr.split(',');
  if (localArr.length >= 10) {
    localArr.shift();
  }
  localArr.push(result);
  let str = localArr.join(',');
  localStorage.setItem("results", str);
} else {
  localStorage.setItem("results", result);
}
}

const loadResults = () => {
  tableResults.innerHTML = '';
  if (localStorage.getItem("results") !== null) {
    let localStr = localStorage.getItem("results");
    let localArr = localStr.split(',');
    let str = '';
    for (let i = 0; i < localArr.length; i++) {
      str += '<div class="row"><span>' + String(i + 1).padStart(2, "0") + '</span> ' + localArr[i] + '</div>';
    }
    tableResults.innerHTML = str;
  }
}

loadResults();

let move = 0;
let result = 0;

button.addEventListener('click', (e) => {
  if (e.target.classList.contains('start-button')) {
    move = 0;
    result = 0;
    popup.classList.remove('active');
    bg.classList.remove('active');
    gridItems.forEach((v) => { v.innerHTML = ''; });
    loadResults();

  }
});

area.addEventListener('click', (e) => {
  if (e.target.classList.contains('main-item')) {
    e.target.classList.add('pre-animation');
    if (move % 2 === 0) {
      e.target.innerHTML = 'X';
    } else {
      e.target.innerHTML = 'O';
    }
    setTimeout(function () {
      e.target.classList.remove('pre-animation')
    }, 500)
    move++;
    check();
  }
})

const check = () => {
  const boxes = document.getElementsByClassName('main-item');
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < arr.length; i++) {
    if (boxes[arr[i][0]].innerHTML === 'X' && boxes[arr[i][1]].innerHTML === 'X' && boxes[arr[i][2]].innerHTML === 'X') {
      result = 'Крестики выиграли за ' + move + ' ходов';
    } else if (boxes[arr[i][0]].innerHTML === 'O' && boxes[arr[i][1]].innerHTML === 'O' && boxes[arr[i][2]].innerHTML === 'O') {
      result = 'Нолики выиграли за ' + move + ' ходов';
    }
  }
  if (result !== 0) {
    resultDiv.innerHTML = result;
    popup.classList.add('active');
    bg.classList.add('active');
    saveResult();
  }
}