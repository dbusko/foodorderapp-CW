import I1 from "../img/i1.png";
import F1 from "../img/f1.png";
import C3 from "../img/c3.png";
import Fi1 from "../img/fi1.png";
import FastDelivery from "../img/fast-delivery.jpg";
import OnlineOrder from "../img/online-order.jfif";
import SaveMoney from "../img/save-money.jpeg";
import Promotions from "../img/promotion.jpg";
import Support from "../img/support.jpg";

export const heroData = [
    { id: 1, name: 'Морозиво', decp: 'Шоколад & ваніль', price: '25.99', imageSrc: I1 },
    { id: 2, name: 'Полуниця', decp: 'Свіжа Полуниця', price: '90.00', imageSrc: F1 },
    { id: 3, name: 'Куряча Тарілка', decp: 'Усі Види Курки', price: '149.99', imageSrc: C3 },
    { id: 4, name: 'Рибна Тарілка', decp: 'Морепродукти', price: '139.98', imageSrc: Fi1 },
];

export const serviceData = [
  { id: 1, name: 'Швидка Доставка', imageSrc: FastDelivery },
  { id: 2, name: 'Онлайн Замовлення', imageSrc: OnlineOrder },
  { id: 3, name: 'Економія', imageSrc: SaveMoney },
  { id: 4, name: 'Акції', imageSrc: Promotions },
  { id: 5, name: 'Підтримка 24/7', imageSrc: Support },
];

export const categories = [
    {
      id: 1,
      name: "Курятина",
      urlParamName: "chicken",
    },
    {
      id: 2,
      name: "Перше",
      urlParamName: "curry",
    },
    {
      id: 3,
      name: "Рис",
      urlParamName: "rice",
    },
    {
      id: 4,
      name: "Риба",
      urlParamName: "fish",
    },
    {
      id: 5,
      name: "Фрукти",
      urlParamName: "fruits",
    },
    {
      id: 6,
      name: "Морозиво",
      urlParamName: "icecreams",
    },
  
    {
      id: 7,
      name: "Легкі напої",
      urlParamName: "drinks",
    },
  ];