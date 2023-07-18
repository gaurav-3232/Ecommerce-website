const wrapper = document.querySelector(".sliderWrapper")

const menuItems = document.querySelectorAll(".menuItem")


const products = [{
        id: 1,
        title: "Air Force",
        price: 110,
        colors: [{
                code: "gold",
                img: "./img/pngwing.com (3)-PhotoRoom.png-PhotoRoom.png",
            },
            {
                code: "darkblue",
                img: "./img/airforce2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 120,
        colors: [{
                code: "red",
                img: "./img/pngegg (2)-PhotoRoom.png-PhotoRoom.png",
            },
            {
                code: "white",
                img: "./img/PngItem_4037722 (1).png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 140,
        colors: [{
                code: "gray",
                img: "./img/blazergray.png",
            },
            {
                code: "black",
                img: "./img/blazerblack.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 170,
        colors: [{
                code: "blue",
                img: "./img/pngegg (3)-PhotoRoom.png-PhotoRoom.png",
            },
            {
                code: "darkblue",
                img: "./img/craterlightblue.png",
            },
        ],
    },

    {
        id: 5,
        title: "Hippe",
        price: 150,
        colors: [{
                code: "Darkblue",
                img: "./img/pngwing.com (2)-PhotoRoom.png-PhotoRoom.png",
            },
            {
                code: "darkblue",
                img: "./img/craterlightblue.png",
            },
        ],
    },

]


let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index]

        //change texts of current product
        currentProductTitle.textContent = choosenProduct.title;

        currentProductPrice.textContent = "$" + choosenProduct.price;

        currentProductImg.src = choosenProduct.colors[0].img

        //assign new colors     
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});


currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach(size => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});