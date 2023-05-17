export interface ProductItems {
id:number,
name:string,
image:string,
description:string,
price:number,
} 
const Data = {
    ProductItems: [
        {
            id: 1,
            name: "iphone 14",
            description: "this is the best product of the world",
            image: "./Pics/iphone.png",
            price: 2000
        },
        {
            id: 2,
            name: "iphone 13",
            description: "this is the best product of the world",
            image: "./Pics/iphone.png",
            price: 1700
        },
        {
            id: 3,
            name: "Bata shoes",
            description: "this is the best product of the world",
            image: "./Pics/shoes.webp",
            price: 100
        },
        {
            id: 4,
            name: "service shoes",
            description: "this is the best product of the world",
            image: "./Pics/shoes.webp",
            price: 120
        },
        {
            id: 5,
            name: "Adionic headphone",
            description: "this is the best product of the world",
            image: "./Pics/headphone.jpg",
            price: 300
        },
        {
            id: 6,
            name: "china headphone",
            description: "this is the best product of the world",
            image: "./Pics/headphone.jpg",
            price: 80
        },
    ]
};


export default Data;