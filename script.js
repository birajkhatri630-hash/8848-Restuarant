function orderNow() {
  alert("Thank you! Your order has been received 🇳🇵");
}

/* SPECIALS ANIMATION */
const specials = document.querySelectorAll('.special-card');

function revealSpecials() {
  specials.forEach((card) => {
    const windowHeight = window.innerHeight;
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < windowHeight - 100) {
      card.classList.add('show');
    }
  });
}

/* GALLERY ANIMATION */
const galleryItems = document.querySelectorAll('.gallery-item');

function revealGallery() {
  galleryItems.forEach((item) => {
    const windowHeight = window.innerHeight;
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < windowHeight - 100) {
      item.classList.add('show');
    }
  });
}

window.addEventListener('scroll', () => {
  revealSpecials();
  revealGallery();
});