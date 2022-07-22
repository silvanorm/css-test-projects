const carousel = document.querySelector('.carousel')

let sliders = []
let slideIndex = 0

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0
  }

  let slide = document.createElement('div')
  let imgElement = document.createElement('img')
  let content = document.createElement('div')
  let h1 = document.createElement('h1')
  let p = document.createElement('p')

  imgElement.appendChild(document.createTextNode(''))
  h1.appendChild(document.createTextNode(movies[slideIndex].name))
  p.appendChild(document.createTextNode(movies[slideIndex].description))
  content.appendChild(h1)
  content.appendChild(p)
  slide.appendChild(content)
  slide.appendChild(imgElement)
  carousel.appendChild(slide)

  imgElement.src = movies[slideIndex].image
  slideIndex++

  slide.className = 'slider'
  content.className = 'slide-content'
  h1.className = 'movie-title'
  p.className = 'movie-description'

  sliders.push(slide)

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`
  }
}

setInterval(() => {
  createSlide()
}, 3000)
