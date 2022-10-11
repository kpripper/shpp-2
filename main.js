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
  if (ev.key === 'Enter') {
    console.log('event.key' + ev.key)
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

///////////////////Geo location/////////////

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
}

function success(pos) {
  const crd = pos.coords
  const coordinatesDiv = document.querySelector('.coordinates')
  const coordinatesText = `Latitude : ${crd.latitude}<br>Longitude: ${crd.longitude}`

  coordinatesDiv.innerHTML = coordinatesText

  console.log(`Latitude : ${crd.latitude}`)
  console.log(`Longitude: ${crd.longitude}`)
  console.log(`More or less ${crd.accuracy} meters.`)
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`)
}

navigator.geolocation.getCurrentPosition(success, error, options)

///////////////////Cursor////////////////
document.addEventListener('mousemove', getCursorPosition)

function getCursorPosition(ev) {
  console.log('getCursorPosition')
  var xCursorPosition = ev.clientX
  var yCursorPosition = ev.clientY
  const cursorPositionDiv = document.querySelector('.cursor-position')
  const cursorPositionText = `X : ${xCursorPosition}<br>Y: ${yCursorPosition}`

  cursorPositionDiv.innerHTML = cursorPositionText
}

//////////////window.navigator.language//////////////

// const language = headers['Accept-Language'];

const language = navigator.userLanguage

const ls = `${language} <br> ${window.navigator.language} <br> ${navigator.languages} <br> ${navigator.languages[0]}`

document.querySelector('.browser-lang').innerHTML = ls

///////////editable text///////////

//localStorage

window.addEventListener('load', getInitialText)
window.onbeforeunload = saveText

document
  .querySelector('.clear-session-storage')
  .addEventListener('click', clearSessionStorage)

// window.addEventListener('load', (event) => {
//   console.log('page is fully loaded')
// })

function clearSessionStorage() {
  sessionStorage.clear()
  console.log('sessionStorage' + sessionStorage.length)
  localStorage.clear()
  console.log('localStorage' + localStorage.length)
}

function getInitialText() {
  console.log('getInitialText')
  let savedText = localStorage.getItem('editedTextKey')
  let savedTextSession = sessionStorage.getItem('editedTextKey')
  console.log('savedText:' + savedText)
  if (savedText) {
    // document.querySelector('.editable').innerHTML = `${savedText} <br>
    // savedTextSession: ${savedTextSession}`

    const fromCookiesP = document.createElement('p')
    const fromCookies = document.querySelector('.from-cookies')
    const textFromCookies = document.createTextNode(document.cookie)
    fromCookies.insertBefore(
      fromCookiesP,
      fromCookies.appendChild(textFromCookies)
    )
  } else {
    document.querySelector('.editable').innerHTML = 'Initial editable text'
  }
}

function saveText() {
  let editableText = document.querySelector('.editable').innerHTML
  console.log('editableText:' + editableText)
  localStorage.setItem('editedTextKey', editableText)
  sessionStorage.setItem('editedTextKey', editableText)

  document.cookie = `editedTextKey=${editableText}`
  console.log('document.cookie:' + document.cookie)
}

/////////to top button////////////

const backToTopButton = document.querySelector('.to-top-button')

window.onscroll = function () {
  scrollFunction()
  console.log('window.innerHeight:' + window.innerHeight)
}

function scrollFunction() {
  console.log('window.scrollY:' + window.scrollY)
  console.log('document.body.scrollHeight:' + document.body.scrollHeight)

  if (
    window.scrollY > 20 &&
    window.scrollY + window.innerHeight > document.body.scrollHeight - 100
  ) {
    backToTopButton.style.display = 'block'
  } else {
    backToTopButton.style.display = 'none'
  }
}

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: 'smooth',
  })
}

backToTopButton.addEventListener('click', goToTop)

////////alerts outer and inner////////////////
const outerAlert = document.querySelector('.outer-alert')
const innerAlert = document.querySelector('.inner-alert')

outerAlert.addEventListener('click', alertOuter)
innerAlert.addEventListener('click', alertInner)

function alertInner(ev) {
  ev.stopPropagation()
  console.log('alertInner')
}

function alertOuter() {
  console.log('alertOuter')
}

///////////Transparent popup///////////

document.querySelector('.transparent-popup').addEventListener('click', popup)
document.querySelector('.popup').addEventListener('click', popupHide)

function popup() {
  document.querySelector('.popup').style.display = 'block'
  document.body.classList.add('stop-scrolling')
}

function popupHide() {
  console.log('popupHide')
  document.querySelector('.popup').style.display = 'none'
  document.body.classList.remove('stop-scrolling')
}

///////////////form///////////////

const form = document.querySelector('.form')

form.addEventListener('submit', handleForm)

function handleForm(ev) {
  ev.preventDefault()
}


//////////////file upload////////////

const inputFile = document.querySelector('#myfile')
inputFile.addEventListener('change', updateInput);

function updateInput() {
  inputFile.classList.add('file-chosen')
}

