import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';


let image_one = './image1.jpg';
let image_two = './image2.png';
let image_three = './image3.jpg';
let image_four = './image4.jpg';
let image_five = './image5.jpg';
let image_six = './image6.jpg';




let swiper_style = document.createElement("style");
swiper_style.innerHTML = `



    .swiper {
        width:100%;
        height: 60wh;
        display:flex;
        justify-content:center;
        align-item:center;
    }

    .swiper-slide{
        height:60vh;
        width:40vw !important;
        display: flex;
        justify-content: center;
        align-items: center;
        margin:0px 20px !important;
        
    }

    .swiper_picture{
      display: block;
      width: 100%;
      height: 100%;
    }
`;
document.head.append(swiper_style);


let swiper_content = document.createElement("div");
swiper_content.innerHTML = `

    <div class="swiper">
        <div class="swiper-wrapper">

        </div>
    </div>

    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
`;
document.body.append(swiper_content);


document.addEventListener('DOMContentLoaded', () => {
    const swiper_template = document.querySelector('.swiper-wrapper');
    const img_arr = [image_one, image_two, image_three, image_four, image_five, image_six];

    img_arr.forEach((src) => {
        const slide_div = document.createElement('div');
        slide_div.classList.add('swiper-slide');

        const img = document.createElement('img');
        img.classList.add('swiper_picture');
        img.src = src;

        slide_div.appendChild(img);
        swiper_template.appendChild(slide_div);
    })});

const swiper = new Swiper('.swiper', {
  
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 6,
  grabCursor: true,

  
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    //types: https://swiperjs.com/types/interfaces/types_modules_pagination.PaginationOptions#type
  },

  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    
  },

  
});