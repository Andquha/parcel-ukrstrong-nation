// Открыть и закрыть окно

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// контент модалки

const cards = [
  {
    imgSource: '/src/images/main_page/card1.jpg',
    imgAlt: 'help_img',
    cardText:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapientelaborum, excepturi vero unde necessitatibus quas nisi. Asperiores sederror a quis, accusantium itaque ut earum. Vel alias repudiandae omnisnostrum!',
    link: 'https://facebook.com/sylnanacia',
    date: '13.09.2022',
  },
  {
    imgSource: '/src/images/main_page/card1.jpg',
    imgAlt: 'help_img',
    cardText:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapientelaborum, excepturi vero unde necessitatibus quas nisi. Asperiores sederror a quis, accusantium itaque ut earum. Vel alias repudiandae omnisnostrum!',
    link: 'https://facebook.com/sylnanacia',
    date: '13.09.2022',
  },
  {
    imgSource: '/src/images/main_page/card1.jpg',
    imgAlt: 'help_img',
    cardText:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapientelaborum, excepturi vero unde necessitatibus quas nisi. Asperiores sederror a quis, accusantium itaque ut earum. Vel alias repudiandae omnisnostrum!',
    link: 'https://facebook.com/sylnanacia',
    date: '13.09.2022',
  },
];

const modalOblast = document.querySelector('.oblast__cards');
console.log(modalOblast);

function renderContent(cards) {
  const markup = cards
    .map(
      card => `<li class="oblast__card">
        <div class="thumb">
          <img
            class="thumb__img"
            src="${card.imgSource}"
            alt="${card.imgAlt}"
          />
        </div>
        <p class="oblast__description">
         ${card.cardText}
        </p>
        <div class="oblast__wrapper-link">
          <a href="${card.link}" class="oblast__link"
            >facebook.com/sylnanacia</a
          >
          <p class="oblast__date">${card.date}</p>
        </div>
      </li>`
    )
    .join('');

  modalOblast.insertAdjacentHTML('afterbegin', markup);
}
renderContent(cards);
