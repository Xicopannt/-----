const modal = document.getElementById('custommodal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
function openModal(e) {
  e.preventDefault();
  modal.classList.add('show');
}

function closeModal() {
  modal.classList.remove('show');
}
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('click', function(e) {
  if (e.target === modal) {
    closeModal();
  }
});

openModalBtn.addEventListener('click', () => {
  const carousel = document.querySelector('#photoCarousel');
  if (carousel) {
    const bootstrapCarousel = new bootstrap.Carousel(carousel, {
      interval: 10000,
      wrap: true     
    });
  }
});

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.container > div').forEach(el => {
  observer.observe(el);
});
