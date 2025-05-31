// import all images from assets/images directory
import img01 from "../all-images/service-img/stove.jpg";
import img02 from "../all-images/service-img/oven.avif";
import img03 from "../all-images/service-img/fridge.png";
import img04 from "../all-images/service-img/stove.avif";
import img05 from "../all-images/service-img/Tv.jpg";
import img06 from "../all-images/service-img/Washing.jpg";
import img07 from "../all-images/service-img/light.avif";
import img08 from "../all-images/service-img/fan.avif";

const applianceData = [
  {
    id: 1,
    brand: "Samsung",
    rating: 112,
    itemName: "Samsung Gas Stove",
    imgUrl: img01,
    model: "RF-3003",
    price: 50,
    power: "1200W",
    color: "Black",
    description:
      "The Samsung Gas Stove is a high-quality kitchen appliance that offers precise temperature control and efficient cooking. With its sleek design and durable construction, this gas stove is perfect for any modern kitchen. It features multiple burners, easy-to-use controls, and safety features to ensure a convenient and safe cooking experience.",
  },

  {
    id: 2,
    brand: "LG",
    rating: 102,
    itemName: "LG Electric Oven",
    imgUrl: img02,
    model: "WM-4004",
    price: 150,
    power: "1800W",
    color: "Silver",
    description:
      "The LG Electric Oven is a versatile and reliable kitchen appliance that makes cooking a breeze. It offers a wide range of cooking functions and features, including convection baking, broiling, and grilling. With its spacious interior and easy-to-use controls, this electric oven is perfect for baking delicious cakes, roasting succulent meats, and preparing flavorful meals for your family.",
  },

  {
    id: 3,
    brand: "Whirlpool",
    rating: 132,
    itemName: "Whirlpool Refrigerator",
    imgUrl: img03,
    model: "TV-5005",
    price: 250,
    capacity: "300L",
    color: "White",
    description:
      "The Whirlpool Refrigerator is a reliable and energy-efficient appliance that keeps your food fresh and organized. With its spacious interior, adjustable shelves, and advanced cooling technology, this refrigerator provides optimal storage conditions for all your groceries. It features convenient features like a built-in water dispenser and an ice maker, making it a perfect addition to any modern kitchen.",
  },

  {
    id: 4,
    brand: "Bosch",
    rating: 92,
    itemName: "Bosch Washing Machine",
    imgUrl: img04,
    model: "DEF321",
    price: 400,
    capacity: "7kg",
    color: "Gray",
    description:
      "The Bosch Washing Machine is a high-performance appliance that ensures clean and fresh laundry every time. It offers a variety of washing programs and features, including quick wash, delicate cycle, and automatic load sensing. With its large capacity and efficient cleaning performance, this washing machine is perfect for handling your daily laundry needs with ease.",
  },

  {
    id: 5,
    brand: "Sony",
    rating: 94,
    itemName: "Sony Smart TV",
    imgUrl: img05,
    model: "GHI654",
    price: 600,
    screenType: "LED",
    size: "50 inches",
    description:
      "The Sony Smart TV is a feature-packed entertainment hub that brings your favorite movies, shows, and streaming content to life. With its high-definition display, vibrant colors, and smart functionality, this TV offers an immersive viewing experience. It comes with built-in apps, voice control, and connectivity options, allowing you to enjoy endless entertainment options in the comfort of your home.",
  },

  {
    id: 6,
    brand: "Panasonic",
    rating: 119,
    itemName: "Panasonic Microwave",
    imgUrl: img06,
    model: "JKL987",
    price: 200,
    power: "1000W",
    color: "White",
    description:
      "The Panasonic Microwave is a versatile and efficient kitchen appliance that simplifies your cooking tasks. With its powerful performance and user-friendly features, this microwave allows you to defrost, cook, and reheat your favorite meals with ease. It offers multiple cooking modes, precise temperature control, and a spacious interior, making it a must-have appliance for any modern kitchen.",
  },

  {
    id: 7,
    brand: "Philips",
    rating: 82,
    itemName: "Philips LED Lightbulb",
    imgUrl: img07,
    model: "MNO543",
    price: 15,
    power: "10W",
    color: "Warm White",
    description:
      "The Philips LED Lightbulb is an energy-efficient lighting solution that brightens up your home while saving on energy costs. With its long lifespan and low power consumption, this lightbulb provides a warm and inviting glow to any room. It features a standard base for easy installation and is suitable for a variety of lighting fixtures.",
  },

  {
    id: 8,
    brand: "Havells",
    rating: 67,
    itemName: "Havells Ceiling Fan",
    imgUrl: img08,
    model: "STU765",
    price: 70,
    color: "Brown",
    description:
      "The Havells Ceiling Fan is a stylish and efficient cooling solution for your home. With its powerful motor and aerodynamic blades, this ceiling fan provides excellent airflow and ensures a comfortable environment. It features multiple speed settings, quiet operation, and a durable construction, making it a perfect addition to any room.",
  },
];

export default applianceData;