// Открыть и закрыть окно

(() => {
  const refs = {
    allStates: document.querySelectorAll('svg.Ukraine > path'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
  };

  refs.closeModalBtn.addEventListener('click', ()=>{refs.modal.classList.add('is-hidden');refs.body.style.overflow = 'auto'});
  refs.modal.addEventListener('click', e=>closeModal(e));
  refs.allStates.forEach(e => e.addEventListener('click', openModal));

  function openModal(){
    refs.modal.classList.remove("is-hidden");
    // Disable scroll
    refs.body.style.overflow = 'hidden';
  }

  function closeModal(e) {
    if(e.target.closest('.modal-oblast')) return
    refs.modal.classList.add('is-hidden');
    // Enable scroll
    refs.body.style.overflow = 'auto';
  }
})();

// контент модалки

let cards = [
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
