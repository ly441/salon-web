document.addEventListener("DOMContentLoaded", function () {
  const serviceCards = document.querySelectorAll(".service-card");

  function revealCards() {
    serviceCards.forEach((card) => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (cardPosition < screenPosition) {
        card.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealCards);
  revealCards(); 
});
