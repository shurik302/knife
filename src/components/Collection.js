import fonar from '../images/fonar.png';
import knifeLisa from '../images/knifeLisa.png'

export const targets = [
  {
    id: 1,
    img: fonar,
    name: "Фонарик",
    size: 95 * 18,
    material: "Сталь",
    quantity: 12,
    price: "715грн.",
  },
  {
    id: 2,
    img: knifeLisa,
    name: "Нож Лиса",
    size: 95 * 24,
    material: "Орех, алюминий",
    quantity: 18,
    price: "2719грн.",
  },
  {
    id: 3,
    img: fonar,
    name: "Фонарик",
    size: 95 * 18,
    material: "Сталь",
    quantity: 12,
    price: "715грн.",
  },
  {
    id: 4,
    img: knifeLisa,
    name: "Нож Лиса",
    size: 95 * 24,
    material: "Орех, алюминий",
    quantity: 18,
    price: "2719грн.",
  },
  {
    id: 5,
    img: fonar,
    name: "Фонарик",
    size: 95 * 18,
    material: "Сталь",
    quantity: 12,
    price: "715грн.",
  },
  {
    id: 6,
    img: knifeLisa,
    name: "Нож Лиса",
    size: 95 * 24,
    material: "Орех, алюминий",
    quantity: 18,
    price: "2719грн.",
  }

];
export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1660,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1260,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 816,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


export const settingsBlock = {
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplaySpeed: 5000,
  cssEase: 'ease-in-out',
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1530,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1260,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

};