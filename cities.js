const fileInput = document.getElementById('cities-file')
let citiesRate = []

/////////////function 1///////////////////

const mainReturn = (fileInput.onchange = () => {
  const reader = new FileReader()

  reader.readAsText(fileInput.files[0])

  reader.addEventListener('load', (event) => {
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
