// document.addEventListener('DOMContentLoaded', clicking)

// function clicking() {

// }

const buttonCss = document.querySelector('.button-css')
const buttonJs = document.querySelector('.button-js')
const buttonCssJs = document.querySelector('.button-css-js')

buttonCss.addEventListener('click', buttonCssClick)
buttonJs.addEventListener('click', buttonJsClick)
buttonCssJs.addEventListener('click', buttonCssJsClick)

function buttonCssClick() {
  selector = document.getElementById('get-selector').value
  console.log(selector + 'selector')
  if (selector.length == 0) {
    selector = '.black-square'
  }
  const square = document.querySelector(selector)
  const squares = document.querySelectorAll(selector)

  // square.style.display = square.style.display == 'none' ? 'block' : 'none'

  squares.forEach((el) => {
    el.style.display = el.style.display == 'none' ? 'block' : 'none'
  })
}

function buttonJsClick() {
  const square = document.querySelector('.black-square')
  const squares = document.querySelectorAll('.black-square')

  //   if (square) {
  //     document.querySelector('.black-square').remove()
  //   } else {
  //     const squareCreate = document.createElement('div')
  //     const container = document.querySelector('.container')
  //     container.insertBefore(squareCreate, container.children[0])
  //     squareCreate.className = 'black-square'
  //   }

  let squaresCounter = 0
  const squareCreate = document.createElement('div')
  const containerSquares = document.querySelector('.squares')

  if (squares.length >= 5) {
    console.log('squares' + squares.length)
    squares.forEach((el) => {
      el.remove()
    })
  } else {
    console.log('< 5 squares')
    for (let index = 0; index < 5; index++) {
      console.log(index)
      containerSquares.insertBefore(squareCreate, containerSquares.children[0])
      squareCreate.className = 'black-square'
    }
  }
}

function buttonCssJsClick() {
  const hidden = document.querySelector('.vis-hidden')
  const hiddens = document.querySelectorAll('.vis-hidden')

  hidden
    ? document.querySelector('.black-square').classList.remove('vis-hidden')
    : document.querySelector('.black-square').classList.add('vis-hidden')
}

//////////Yellow Square/////////////

const yellowSquare = document.querySelector('.yellow-square')
yellowSquare.addEventListener('click', yellowFuncAlert)

function yellowFuncAlert() {
  alert('Hi!')
  yellowSquare.removeEventListener('click', yellowFuncAlert)
  yellowSquare.addEventListener('click', yellowSquareDispNone)
}

function yellowSquareDispNone() {
  yellowSquare.style.display = 'none'
  yellowSquare.removeEventListener('click', yellowSquareDispNone)
  yellowSquare.addEventListener('click', yellowFuncAlert)
}

//////////Red Square/////////

document
  .querySelector('.button-red-square')
  .addEventListener('mouseover', mouseOver)
document
  .querySelector('.button-red-square')
  .addEventListener('mouseout', mouseOut)

function mouseOver() {
  console.log('mouseOver')
  document.querySelector('.red-square').style.display = 'block'
}

function mouseOut() {
  document.querySelector('.red-square').style.display = 'none'
}

////////Input focus////////////

const inp = document.querySelector('#get-selector')

inp.addEventListener('focus', displayGreenRect)
inp.addEventListener('input', hideGreenRect)
// inp.addEventListener('keypress', function (event) {
//   const inputed = document.getElementById('get-selector').value
//   if (event.key === 'Enter') {
//     console.log('event.key' + event.key)
//     console.log('inputed' + inputed)
//     if (inputed.startsWith('.')) {
//       hideElements()
//     }
//     if (inputed.startsWith('http')) {
//       showImage()
//     }
//   }
// })

inp.addEventListener('keypress', enterPressed)

function enterPressed() {
  const inputed = document.getElementById('get-selector').value
  if (event.key === 'Enter') {
    console.log('event.key' + event.key)
    console.log('inputed' + inputed)
    hideElements()
  }
}

function displayGreenRect() {
  document.querySelector('.green-rect').style.display = 'block'
}

function hideGreenRect() {
  document.querySelector('.green-rect').style.display = 'none'
}

function hideElements() {
  const selector = document.getElementById('get-selector').value
  const elements = document.querySelectorAll(selector)
  elements.forEach((el) => {
    el.style.display = el.style.display == 'none' ? 'block' : 'none'
  })
}

function showImage() {
  const link = document.getElementById('get-selector').value
  document.querySelector('.img').src = link
}

////////textarea////////////////////////
const textarea = document.querySelector('.my-textarea')

textarea.addEventListener('keypress', function (event) {
  const inputedTextarea = textarea.value
  if (event.key === 'Enter') {
    console.log('inputed textarea' + inputedTextarea)
    console.log('inputedTextarea.length' + inputedTextarea.length)
  }
})

const getImgButton = document.querySelector('.button-get-images')
getImgButton.addEventListener('click', getImages)

function getImages() {
  const textarea = document.querySelector('.my-textarea')
  // const inputedTextarea = textarea.value
  // console.log('textarea.value' + textarea.value)
  // console.log(inputedTextarea)
  let links = textarea.value.match(
    /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/gim
  )
  // console.log(links)

  const imagesDiv = document.querySelector('.images')
  let imgCreate

  for (let index = 0; index < links.length; index++) {
    imgCreate = document.createElement('img')
    // console.log('imagesDiv.children[0]'+imagesDiv.children[0].src)
    imagesDiv.insertBefore(imgCreate, imagesDiv.children[0])
    imgCreate.src = links[index]
    // console.log(index + ' ' + links[index])
  }
}
