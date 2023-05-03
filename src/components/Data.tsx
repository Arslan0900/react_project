export interface ProductItem {
    id: number;
    Name: string;
    image: string;
    price: number;
    description: string;
  }
  interface Data {
    ProductItems: ProductItem[];
  }
  
  const ProductData : Data = {
    ProductItems: [
      { id: 1, Name: "iphon", image: "./Pics/iphone.png", price: 1000, description: "this is the best product of the store" },
      { id: 2, Name: "shoes", image: "./Pics/shoes.webp", price: 100, description: "this is the best product of the store" },
      { id: 3, Name: "headphone", image: "./Pics/headphone.jpg", price: 150, description: "this is the best product of the store" }
    ]
  };
export default ProductData ;  