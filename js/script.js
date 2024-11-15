new Swiper(".image-slider", {
  navigation: {
    nextEl: ".swiper-arrow-next",
    prevEl: ".swiper-arrow-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 20,
});

new Swiper(".slide-content", {
  slidesPerView: 4,
  pagination: {
    el: ".swiper-button-pagination",
  },
  navigation: {
    nextEl: ".swiper-arrow-new-next",
    prevEl: ".swiper-arrow-new-prev",
  },
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    641: {
      slidesPerView: 2,
    },
    930: {
      slidesPerView: 3,
    },
    1201: {
      slidesPerView: 4,
    },
  },
});

function showCallbackPopup() {
  const isMobile = window.innerWidth <= 650;
  Swal.fire({
    showConfirmButton: false,
    background: "#ffffff",
    width: isMobile ? "100%" : "90%", // 100% ширина для мобильных экранов, 90% для больших
    heightAuto: !isMobile, // Отключаем автоматическую высоту на мобильных экранах
    customClass: {
      popup: isMobile ? "custom-swal-popup-fullscreen" : "custom-swal-popup",
    },
    html: `
  <div class="popup">
    <div class="popup__close">
      <button class="popup__close-btn" id="close-button">
        
      </button>
    </div>
    <h2 class="popup__title">Обратный звонок</h2>
    <div class="popup__inputs">
      <input type="text" id="name" class="swal2-input" placeholder="Имя" />
      <input
        type="tel"
        id="phone"
        class="swal2-input"
        placeholder="Номер телефона"
      />
    </div>
    <div class="popup__bottom">
      <button class="popup__submit-btn" id="submit-button">Отправить</button>
      <p class="popup__personal">
        Нажимая кнопку, вы соглашаетесь с обработкой ваших персональных данных
      </p>
    </div>  
  </div>
    `,
    didOpen: () => {
      const closeButton = document.getElementById("close-button");
      const submitButton = document.getElementById("submit-button");

      closeButton.addEventListener("click", () => Swal.close());
      submitButton.addEventListener("click", () => {
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;

        if (!name || !phone) {
          Swal.showValidationMessage("Пожалуйста, заполните все поля");
          return;
        }

        console.log("Имя:", name);
        console.log("Телефон:", phone);

        Swal.fire(
          "Спасибо!",
          "Мы свяжемся с вами в ближайшее время.",
          "success"
        );
      });
    },
  });
}
// Обработка клика по номеру телефона
document.addEventListener("DOMContentLoaded", () => {
  const phoneLink = document.getElementById("phone-link");

  if (phoneLink) {
    phoneLink.addEventListener("click", (event) => {
      event.preventDefault();
      showCallbackPopup();
    });
  }
});
