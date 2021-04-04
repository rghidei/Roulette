// for every value/ slot it is assigned a color
//Math.random will choose a random property
//compare that answer to the bet you choose
//if user chooses red, and math.random choses an even number,
//even numbers are red, that means the user wins double what they bet

// let money = 10000
// const min = document.querySelector('#min')
// const max = document.querySelector('#max')
// document.getElementById('btn').addEventListener('click', reset)
var style = document.createElement("style");
document.head.appendChild(style)
sheet = style.sheet

document.getElementById('submitPost').addEventListener('click', playGame)

let board = {
    0 : "green",
    00 : "green",
    1 : "red",
    2 : "black",
    3 : "red",
    4 : "black",
    5 : "red",
    6 : "black",
    7 : "red",
    8 : "black",
    9 : "red",
    10 : "black",
    11 : "black",
    12 : "red",
    13 : "black",
    14 : "red",
    15 : "black",
    16 : "red",
    17 : "black",
    18 : "red",
    19 : "red",
    20 : "black",
    21 : "red",
    22 : "black",
    23 : "red",
    24 : "black",
    25 : "red",
    26 : "black",
    27 : "red",
    28 : "black",
    29 : "black",
    30 : "red",
    31 : "black",
    32 : "red",
    33 : "black",
    34 : "red",
    35 : "black",
    36 : "red"
}

let rotation = {
  0 : "rotate(2156deg)",
  00 : "rotate(1976deg)",
  1 : "rotate(1985deg)",
  2 : "rotate(1805deg)",
  3 : "rotate(2024deg)",
  4 : "rotate(1843deg)",
  5 : "rotate(2062deg)",
  6 : "rotate(1880deg)",
  7 : "rotate(2098deg)",
  8 : "rotate(1920deg)",
  9 : "rotate(2137deg)",
  10 : "rotate(1957deg)",
  11 : "rotate(2108deg)",
  12 : "rotate(1928deg)",
  13 : "rotate(1995deg)",
  14 : "rotate(1814deg)",
  15 : "rotate(2033deg)",
  16 : "rotate(1852deg)",
  17 : "rotate(2071deg)",
  18 : "rotate(1890deg)",
  19 : "rotate(1910deg)",
  20 : "rotate(2090deg)",
  21 : "rotate(1871deg)",
  22 : "rotate(2053deg)",
  23 : "rotate(1833deg)",
  24 : "rotate(2014deg)",
  25 : "rotate(1947deg)",
  26 : "rotate(2128deg)",
  27 : "rotate(1966deg)",
  28 : "rotate(2146deg)",
  29 : "rotate(1938deg)",
  30 : "rotate(1918deg)",
  31 : "rotate(1900deg)",
  32 : "rotate(2080deg)",
  33 : "rotate(1862deg)",
  34 : "rotate(2043deg)",
  35 : "rotate(1824deg)",
  36 : "rotate(2005deg)"
}




function playGame(){
  console.log('hi')
  let result = Math.floor(Math.random() * 38)
  let bet = parseInt(document.getElementById('moneyBet').value)
  let color = document.getElementById('colorInput').value.toLowerCase()
  let total = 0;
  let moneyWon = 0;
  let moneyLost = 0;

  console.log(`This is the input color: ${color}`)
  console.log(`This is the bet: ${bet}`)
  console.log(`This is the result: ${result}`)
  console.log('one')
  console.log('two')


  sheet.addRule('#wheel::before',`transition: all 4s ease !important`)
  sheet.addRule('#wheel::before',`transform: ${Object.values(rotation)[result]}`)
  //if betting on color
  if(color === Object.keys(board)[result]){
    //user wins the color
  // casino = bet
   total = bet * 3
   status = 'You Won ' + bet + " ! :)"
    moneyLost = bet * -1
    console.log(moneyLost)
    console.log(Object.keys(board)[result])
  }else if(color === Object.values(board)[result] || Object.values(board)[result] == "green") {
    total = bet * 2
      status = 'You Won ' + total + " ! :)"
     moneyLost = bet * -1
     console.log(moneyLost)
     console.log(Object.keys(board)[result])
  } else {
    status = 'You Lost ' + bet + " ! :("
    moneyWon = bet
    console.log(moneyWon)
    console.log(Object.keys(board)[result])
  }


  console.log(moneyWon)
  console.log(moneyLost)

  fetch('messages', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'bet': bet,
      'color': color,
      'moneyWon': moneyWon,
      'moneyLost': moneyLost,
      'timestamp': new Date
    })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
    // window.location.reload(true)
  })
  setTimeout(_=> {
    document.querySelector('.results').style.setProperty('display', 'inline-block')
    document.querySelector('.results').innerText = status
    setTimeout(_=>{
      sheet.addRule('#wheel::before',`transition: 0.01s !important`)
      sheet.addRule('#wheel::before',`transform: rotate(43deg)`)
    }, 10000)
  }, 3000)
  console.log('three')


}

// var trash = document.getElementsByClassName("fa-trash");

// const trashCan = document.querySelectorAll('.delete')
// for(element of trashCan){
//   element.addEventListener('click', deletePost)
//   console.log(element)
// }
//   console.log(element)
//   function deletePost(){
//     console.log('hi')
//   }
// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         console.log('hello')
//         const timestamp = this.parentNode.parentNode.querySelector('.time').innerText
//
//         fetch('messages', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'timestamp': timestamp
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });
