const modal = document.querySelector('.modal')
const btnCloseModal = document.querySelector('.close-modal')
const btnOpenModal = document.querySelector('.show-modal')
const overlay = document.querySelector('.overlay')

const toggleModal = function () {
  modal.classList.toggle('hidden')
  overlay.classList.toggle('hidden')
}

btnOpenModal.addEventListener('click', toggleModal)
btnCloseModal.addEventListener('click', toggleModal)
overlay.addEventListener('click', toggleModal)
