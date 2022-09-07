import fonar from "../images/fonar.png";
import knifeLisa from "../images/knifeLisa.png";
import bulat from "../images/bulat.jpg";
import backtestknife from "../images/backtestknife.png";
import secondknife from "../images/second_knife.png";
import oreh from "../images/third_knife.png";

export const targets = [
    {
        id: 1,
        img: fonar,
        name: "Фонарик",
        size: "95 Х 18",
        material: "Сталь, стекло",
        quantity: 7,
        price: "299 грн.",
    },
    {
        id: 2,
        img: knifeLisa,
        name: "Нож Лиса",
        size: "165 Х 24",
        material: "Орех, сталь",
        quantity: 23,
        price: "1499 грн.",
    },
    {
        id: 3,
        img: bulat,
        name: "Нож булат",
        size: "203 Х 25",
        material: "Сталь, дуб",
        quantity: 14,
        price: "1799 грн.",
    },
    {
        id: 4,
        img: secondknife,
        name: "Нож Лиса",
        size: "146 Х 19",
        material: "Клен, сталь",
        quantity: 33,
        price: "1399 грн.",
    },
    {
        id: 5,
        img: backtestknife,
        name: "Фонарик",
        size: "95 х 18",
        material: "Сталь",
        quantity: 12,
        price: "2199 грн.",
    },
    {
        id: 6,
        img: oreh,
        name: "Нож Лиса",
        size: "108 х 18",
        material: "Орех, алюминий",
        quantity: 18,
        price: "2259 грн.",
    },
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
                dots: true,
            },
        },
        {
            breakpoint: 1260,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 816,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

export const settingsBlock = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 1530,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 1260,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
