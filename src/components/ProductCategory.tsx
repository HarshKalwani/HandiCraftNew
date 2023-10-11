"use client"
import React, { useState } from "react";
import { SiWhatsapp } from 'react-icons/si'
import { useRouter } from 'next/navigation';
import Link from "next/link";

function ProductCategory() {
    const router = useRouter();
    const initialProducts = [
        {
            title: "Syltherine",
            type: "dining",
            description: "Stylish cafe chair",
            price: "Rp 2.500.000",
            imageUrl: "https://i.pinimg.com/564x/09/a1/6f/09a16f5796c201ef3894c3860cab0048.jpg"
        },
        {
            title: "Elegance Table",
            type: "living",
            description: "Elegant dining table",
            price: "Rp 3.200.000",
            imageUrl: "https://i.pinimg.com/736x/94/9a/59/949a59d551f45511a940bbe5cca80d3a.jpg"

        },
        {
            title: "Cozy Armchair",
            type: "bedroom",
            description: "Comfortable armchair",
            price: "Rp 1.800.000",
            imageUrl: "https://i.pinimg.com/564x/b4/0c/9d/b40c9d98376a6be0dbd0259aafcc7e60.jpg"
        },
        {
            title: "Modern Mid Century",
            type: "dining",
            description: "Rustic wooden dining table",
            price: "Rp 1.500.000",
            imageUrl: "https://i.pinimg.com/564x/01/5a/67/015a6786e1734e4babf4868c835d755c.jpg"
        },
        {
            title: "Vintage Bookshelf",
            type: "living",
            description: "Vintage-style bookshelf",
            price: "Rp 2.800.000",
            imageUrl: "https://i.pinimg.com/564x/8f/b7/d2/8fb7d25f2af096f06f169568e5c60e55.jpg"
        },
        {
            title: "Modern Desk",
            description: "Sleek modern desk",
            type: "living",
            price: "Rp 2.000.000",
            imageUrl: "https://i.pinimg.com/736x/b3/70/ef/b370efab4860264b20e12ba717b4a040.jpg"
        },
        {
            title: "Artistic Vase",
            type: "bedroom",
            description: "Handcrafted artistic vase",
            price: "Rp 500.000",
            imageUrl: "https://i.pinimg.com/564x/9f/23/41/9f2341b06f8a0791d6c7a3dff895407f.jpg"
        },
        {
            title: "Lounge Chair",
            type: "bedroom",
            description: "Comfortable lounge chair",
            price: "Rp 1.900.000",
            imageUrl: "https://i.pinimg.com/736x/ef/59/16/ef59164e007e72043c786c8c0c05649f.jpg"
        },
        {
            title: "Contemporary Modern",
            type: "dining",
            description: "Mid Century Wooden table",
            price: "Rp 2.500.000",
            imageUrl: "https://i.pinimg.com/564x/c8/57/2a/c8572a90431d662fd885b52da118a6f8.jpg"
        },
        {
            title: "Adore Home Dining",
            type: "dining",
            description: "Adorable dinings..",
            price: "Rp 3.200.000",
            imageUrl: "https://i.pinimg.com/564x/7d/a9/c1/7da9c13bdfd252b370114ec8fef3e2e9.jpg"

        },
        {
            title: "Scandinavian ",
            type: "dining",
            description: " Scandi-inspired solid timber dining tables",
            price: "Rp 1.800.000",
            imageUrl: "https://i.pinimg.com/564x/00/7b/d2/007bd2bb2e1c0cc43d51b0633e550744.jpg"
        },
        {
            title: "Henry Dining",
            type: "dining",
            description: "Beige Dining Chair",
            price: "Rp 1.500.000",
            imageUrl: "https://i.pinimg.com/564x/f6/af/d4/f6afd4ce041f4284544a33f0bbbc4cc2.jpg"
        },
        {
            title: "Walnut Dining",
            type : "dining",
            description: "Walnut edge Kitchen Dining",
            price: "Rp 2.800.000",
            imageUrl: "https://i.pinimg.com/564x/d3/c9/a1/d3c9a1b6d2549bad1da84dcc19f8f40b.jpg"
        },
        {
            title: "Calming",
            type:"living",
            description: "Relaxing Vibe",
            price: "Rp 2.000.000",
            imageUrl: "https://i.pinimg.com/564x/68/64/ba/6864ba0ca8ea915b66866859959ae570.jpg"
        },
        {
            title: "Take A Seat",
            type:"dining",
            description: "House Doctor Confi Chair",
            price: "Rp 500.000",
            imageUrl: "https://i.pinimg.com/564x/c6/df/0f/c6df0f96ce2768492115de81cac7c0c1.jpg"
        },
        {
            title: "Cute Sofas",
            type:"living",
            description: "Calming and Relaxing",
            price: "Rp 1.900.000",
            imageUrl: "https://i.pinimg.com/564x/5d/63/34/5d6334aa9622a1a73e967acae019a4b2.jpg"
        },
        {
            title: "Wooden Swing",
            type:"living",
            description: "A modern wooden swing",
            price: "Rp 1.900.000",
            imageUrl: "https://i.pinimg.com/564x/0e/2e/c0/0e2ec0ea81dfe91e53058f74c57c6ccd.jpg"
        },
        {
            title: "Casala Capsule",
            type:"living",
            description: "Cocoon Inspired Sitting",
            price: "Rp 1.900.000",
            imageUrl: "https://i.pinimg.com/564x/ad/b7/25/adb7258d319ccd529b0774f72d3d1975.jpg"
        },
        {
            title: "Indian Jhoola",
            type:"living",
            description: "Mordern Swing ",
            price: "Rp 1.900.000",
            imageUrl: "https://i.pinimg.com/564x/4a/4a/cc/4a4acce8c3f4db53d9f3b3d5f69bbc38.jpg"
        },
        {
            title: "Blue Bed",
            type:"bedroom",
            description: "3D Wooden Sleeping Bed",
            price: "Rp 1.900.000",
            imageUrl: "https://i.pinimg.com/564x/07/b0/b7/07b0b7e01ea80c9e2294ec28c38d6bf2.jpg"
        },
        {
            title: "Almirah's Mirror",
            type:"bedroom",
            description: "Clean Aesthetic Mirror",
            price: "Rp 1.900.000",
            imageUrl: "https://i.pinimg.com/564x/6a/6e/3b/6a6e3b2ad68342ca9fface0081aecaf2.jpg"
        },
        {
            title: "Single Seat Sofa",
            type:"bedroom",
            description: "Simple and Attractive Lounge",
            price: "Rp 1.900.000",
            imageUrl: "https://i.pinimg.com/564x/54/6e/fe/546efec424e1f219fc9f942eca9f3b20.jpg"
        },
        {
            title: "American Walnut",
            type:"bedroom",
            description: "Cupid Black in dark Walnut",
            price: "Rp 1.900.000",
            imageUrl: "https://i.pinimg.com/564x/62/5a/e8/625ae8a15f2bf1d3b2d1a5dd2a611e2f.jpg"
        },
        {
            title: "Modern Cupboard",
            type:"bedroom",
            description: "Aesthetic Wardrobe Closet",
            price: "Rp 1.900.000",
            imageUrl: "https://i.pinimg.com/564x/51/07/6b/51076bbc4966c00d1ca377a36362bc02.jpg"
        },
    ];

    // Use state to store the product data
    const [products, setProducts] = useState(initialProducts);

    // Split the products into groups of 4 for each row
    const productsRows = [];
    for (let i = 0; i < products.length; i += 4) {
        productsRows.push(products.slice(i, i + 4));
    }

    const phoneNumber = '+91 9079879306';
    const handleFunc = () => {
        const whatsappURL = `https://wa.me/${phoneNumber}`;
        window.open(whatsappURL, '_blank');
    };

    const handleProductClick = (product: any) => {
        router.push(`/product?title=${product.title}&url=${product.imageUrl}`);
    };
      


    return (
        <div className="w-full md:p-4 md:h-[110rem] lg:h-[110rem] overflow-auto bg-white text-black">
            <h1 className="text-3xl font-semibold text-center">Our Products</h1>
            {productsRows.map((row, rowIndex) => (

                <div key={rowIndex} className="md:flex md:justify-between gap-12  md:mx-[8rem]  mt-[2rem] text-start mx-auto">
                    {row.map((product, index) => (
                        <Link href={{
                            pathname:"/product",
                            query:{
                               title:product.title,
                               imageUrl:product.imageUrl,
                               description:product.description
                            }
                        }} key ={index}>
                        <div key={index} className="h-[23rem] w-82 p-4 bg-gray-100 shadow-sm rounded-sm">
                            <div className="h-56 md:w-[18.3rem]  bg-blue-500 relative">
                                <img className="object-cover w-full h-full" src={product.imageUrl} alt="Image not found" />
                            </div>
                            <h1 className="mx-4 mt-5 text-2xl font-semibold">{product.title}</h1>
                            <h3 className="mx-4 mt-2 text-gray-500">{product.description}</h3>
                        </div>
                        </Link>
                    ))}
                </div>

            ))}
            <div className="flex justify-center items-center">
                <button className='h-[3rem] border-green-600 border-y-2 flex justify-between items-center gap-2 border-x-2 rounded-md p-3 bg-green-600 text-white mt-[3rem] font-sans' onClick={handleFunc}>Liked This ? Take a Screenshot and Whatsapp us <span> <SiWhatsapp /> </span></button>
            </div>
        </div>
    );
}


export default ProductCategory;
