const fileInput = document.getElementById('myfile')
let citiesRate = []

/////////////function 1///////////////////

const mainReturn = (fileInput.onchange = () => {
  const reader = new FileReader()
  console.log('selectedFile')
  const selectedFile = fileInput.files[0]
  console.log(reader.readAsText(selectedFile)) //- undefined

  reader.addEventListener('load', (event) => {
    console.log('load')
    const fileList = event.target.files
    console.log('fileList ' + fileList) //- undefined
    const result = event.target.result
    console.log(result)

    citiesRate = result //comment for formatting
      .split(/\r\n/)
      .filter((a) => /[1-9]/.test(a))
      .map((c, i) => ({
        city: c.split(',').slice(2, 3)[0],
        place: i + 1,
        population: c.split(',').slice(-1)[0],
      }))
      .sort((a, b) => (b.population || 0) - (a.population || 0))
      .slice(0, 10)

    console.log(citiesRate)
  })

  const textarea = document.querySelector('.cities-textarea')

  textarea.addEventListener('keypress', function (event) {
    console.log('keypress')
    const text = textarea.value
    if (event.key === 'Enter') {
      console.log(text)
    }
  })

  // const buttonGetCities = document.querySelector('.button-get-cities')
  // buttonGetCities.addEventListener('click', getCities)
  // function getCities () {
  //   console.log('getCities')
  //   const text = textarea.value
  //   console.log(text)
  // }

  //////////function 2//////////////////

  let text = ''

  document.querySelector('.button-get-cities').addEventListener('click', () => {
    console.log('getCities')
    text = textarea.value
    console.log(text)

    citiesRate.forEach((city) => {
      if (text.includes(city.city)) {
        text = text.replaceAll(
          city.city,
          `${city.city} (${city.place} місце в ТОП-10 самих великих міст України, населення ${city.population} чоловік)`
        )
      }
    })

    console.log(text)
    document.querySelector('.text').innerHTML = text

    return text
  })
})

console.log('mainReturn' + mainReturn)
