"use client"
import React, { useState } from "react";
import { SiWhatsapp } from 'react-icons/si'
import { useRouter } from 'next/navigation';
import Link from "next/link";

function ProductCategory({ type }: { type: string }) {
    const router = useRouter();
    const initialProducts = [
        {
            title: "Farmhouse Table",
            type: "dining",
            subType: "Rustic Farmhouse Dining Tables",
            description: "Farmhouse Table with White Base",
            price: "Rp 2.500.000",
            imageUrl: "https://rusticreddoor.com/cdn/shop/products/avon-farmhouse-reclaimed-barnwood-dining-table.jpg?v=1741096027&width=1946"
        },
        {
            title: "Square Farmhouse ",
            type: "dining",
            subType: "Rustic Farmhouse Dining Tables",
            description: "Rustic Square Farmhouse Table",
            price: "Rp 2.500.000",
            imageUrl: "https://i.etsystatic.com/10596239/r/il/564f58/5190004855/il_570xN.5190004855_g2m5.jpg"
        },
        {
            title: "Farmhouse Dining",
            type: "dining",
            subType: "Rustic Farmhouse Dining Tables",
            description: "Farmhouse Table for Small Space ",
            price: "Rp 2.500.000",
            imageUrl: "https://ak1.ostkcdn.com/images/products/is/images/direct/08e229564137dd5c24b90f7664fe62d0a20833e2/5-Pcs-Kitchen-Table-Set-Farmhouse-Dining-Sets%2C-Wooden-Dining-Table-%26-4-Upholstered-Chairs-for-Small-Space-Dining-Room%2C-Espresso.jpg"
        },
        {
            title: "Walnut Farmhouse Dining Sets",
            type: "dining",
            subType: "Rustic Farmhouse Dining Tables",
            description: "Walnut Brown Dining Sets ",
            price: "Rp 2.500.000",
            imageUrl: "https://i5.walmartimages.com/seo/LinkRomat-Farmhouse-Dining-Table-Set-for-4-Kitchen-Table-and-Chairs-for-Dining-Room-Small-Spaces-Easy-Assembly-Sturdy-Rustic-Brown_3afbceea-05eb-491d-bced-6d5cecad0f1f.fd028c02d7d38f2147d82f96f34bb925.jpeg?odnHeight=320&odnWidth=320&odnBg=FFFFFF"
        },
        {
            title: "Mordern Farmhouse Dining Table",
            type: "dining",
            subType: "Rustic Farmhouse Dining Tables",
            description: "Not so Square Farmhouse Table ",
            price: "Rp 2.500.000",
            imageUrl: "https://upphomestore.com/cdn/shop/files/walnut_live_edge_dining_table_1.png?v=1755519964&width=1080"
        },
        {
            title: "Farm Kitchen Table",
            type: "dining",
            subType: "Rustic Farmhouse Dining Tables",
            description: "Farmhouse Kitchen Table Set  ",
            price: "Rp 2.500.000",
            imageUrl: "https://www.cabinfield.com/photos/prod/82783/637bf808e9074362598640.jpg"
        },
        {
            title: "Farm house Rustic Brown ",
            type: "dining",
            subType: "Rustic Farmhouse Dining Tables",
            description: "Rounded Table for 4 ",
            price: "Rp 2.500.000",
            imageUrl: "https://images.thdstatic.com/productImages/14ccd8e7-6585-4748-9c2c-b2e580547a3a/svn/rustic-brown-tribesigns-way-to-origin-kitchen-dining-tables-ldy1xk00534dt-64_600.jpg"
        },
        {
            title: "Rustic Round Dining",
            type: "dining",
            subType: "Rustic Farmhouse Dining Tables",
            description: "Dark Chocolate Brown Rounded Table ",
            price: "Rp 2.500.000",
            imageUrl: "https://rusticfurnituredepot.com/cdn/shop/files/IMG_9614_2048x.jpg?v=1717185208"
        },
        {
            title: "Minimalist Dining Table",
            type: "dining",
            subType: "Modern Minimalist Dining Tables",
            description: "Dining Table with Soothing Atmosphere",
            price: "Rp 2.500.000",
            imageUrl: "https://www.caffelattehome.com/img/inspirations/minimalist-dining-room-with-a-soothing-atmosphere/minimalist-dining-room-with-a-soothing-atmosphere.jpg"
        },
        {
            title: "Elegant Wooden Dining Table ",
            type: "dining",
            subType: "Modern Minimalist Dining Tables",
            description: "Simple Attractive Dining TableTable ",
            price: "Rp 2.500.000",
            imageUrl: "https://www.nismaayadecor.in/cdn/shop/collections/lookbook_2.webp?v=1759338011"
        },
        {
            title: "Mordern Minimalist Dining Table ",
            type: "dining",
            subType: "Modern Minimalist Dining Tables",
            description: "Round Dining for 2/4",
            price: "Rp 2.500.000",
            imageUrl: "https://image.made-in-china.com/202f0j00GjmcohTdLkbP/47-24-Modern-Minimalist-Round-Dining-Table-For2-4wishash-Veneer-Wood-Color.webp"
        },
        {
            title: "Minimalist Round Dining Table",
            type: "dining",
            subType: "Modern Minimalist Dining Tables",
            description: "Round Dining for 2/4",
            price: "Rp 2.500.000",
            imageUrl: "https://m.media-amazon.com/images/I/91dbUNp9cmL._UF894,1000_QL80_.jpg"
        },
        {
            title: "Solid Wood Dining Table ",
            type: "dining",
            subType: "Modern Minimalist Dining Tables",
            description: "Round Dining for 2/4",
            price: "Rp 2.500.000",
            imageUrl: "https://www.linsyhomefurniture.com/uploadfile/202101/10/4fadc9be9fd952bed92be19b415fa5d3_medium.jpg"
        },
        {
            title: "White Oval Dining Table",
            type: "dining",
            subType: "Modern Minimalist Dining Tables",
            description: "Table with Glossy Sintered Stone Tabletop",
            price: "Rp 2.500.000",
            imageUrl: "https://ak1.ostkcdn.com/images/products/is/images/direct/3c27d19a4bc7b605a1128b9956ba7b3630125867/Modern-Minimalist-White-Oval-Dining-Table-with-Glossy-Sintered-Stone-Tabletop%2C-Roman-Column-Frame-Table-Legs.jpg"
        },
        {
            title: "Small Dining Table of 4",
            type: "dining",
            subType: "Modern Minimalist Dining Tables",
            description: "Wooden and Marble Dining Table ",
            price: "Rp 2.500.000",
            imageUrl: "https://i.pinimg.com/736x/09/15/1e/09151e971b7d1bd81ae30d7c3d9bdfa9.jpg"
        },
        {
            title: "Luxury Minimalist Dining Table",
            type: "dining",
            subType: "Modern Minimalist Dining Tables",
            description: "Minimalist White Dining Table",
            price: "Rp 2.500.000",
            imageUrl: "https://image.made-in-china.com/2f0j00qbdoEcRwMNkh/Wholesale-Import-Minimalist-Modern-Luxury-White-Rectangular-Sintered-Stone-Pedestal-Dining-Table-63-.webp"
        },
        {
            title: "Wooden Rocking Chair",
            type: "chairs",
            description: "Comfortable Rocking Chair",
            subType: "Carved Traditional Chairs / Folding Chairs",
            price: "Rp 1.800.000",
            imageUrl: "https://m.media-amazon.com/images/I/713GiMbWR6L._UF350,350_QL80_.jpg"
        },
        {
            title: "Sheesham Chair",
            type: "chairs",
            description: "Handcrafted artistic chair",
            subType: "Carved Traditional Chairs / Folding Chairs",
            price: "Rp 500.000",
            imageUrl: "https://5.imimg.com/data5/IX/GS/QM/SELLER-96868556/wooden-folding-chair-500x500-500x500.jpg"
        },
        {
            title: "Folding Chairs",
            type: "chairs",
            description: "Comfortable Folding chair",
            subType: "Carved Traditional Chairs / Folding Chairs",
            price: "Rp 1.900.000",
            imageUrl: "https://images.squarespace-cdn.com/content/v1/5f55599113e50339e0c1d982/1609603909335-2MWSU4CRINOP4TCN8EPT/1308_1.JPG?format=2500w"
        },
        {
            title: "Elegance Side Board",
            type: "side-boards",
            subType: "Glass Door Side Boards ",
            description: "Elegant Walnut Brown Sideboard",
            price: "Rp 3.200.000",
            imageUrl: "https://i.pinimg.com/736x/07/9e/db/079edb055a35ad18c5c7aa3eb81e949e.jpg"
        },
        {
            title: "Vintage Crockery Side Board",
            type: "side-boards",
            subType: "Glass Door Side Boards ",
            description: "Vintage-style Crockery Side Board",
            price: "Rp 2.800.000",
            imageUrl: "https://m.media-amazon.com/images/I/81OrtFobihL._UF894,1000_QL80_.jpg"
        },
        {
            title: "Luxury Sideboard Cabinet",
            description: "Sideboard Buffet Cabinet  ",
            subType: "Glass Door Side Boards ",
            type: "side-boards",
            price: "Rp 2.000.000",
            imageUrl: "https://m.media-amazon.com/images/I/61IXqJ8mj0L.jpg"
        },
        {
            title: "Natural Brown Side Board",
            description: "Wooden Natural Brown Sideboard  ",
            subType: "Glass Door Side Boards ",
            type: "side-boards",
            price: "Rp 2.000.000",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMiCaYrESePk4wTVwOYjOEKoBrEdZmMMljVg&s"
        },
        {
            title: "Sideboard Buffet Cabinet",
            description: "Sideboard Buffet Cabinet with LED Light & Doors",
            subType: "Glass Door Side Boards ",
            type: "side-boards",
            price: "Rp 2.000.000",
            imageUrl: "https://m.media-amazon.com/images/I/81jbJ6gR5eL.jpg"
        },
        {
            title: "Coastal Sideboard Cabinet ",
            description: "Coastal Sideboard Cabinet with Glass Doors",
            subType: "Glass Door Side Boards ",
            type: "side-boards",
            price: "Rp 2.000.000",
            imageUrl: "https://foter.com/photos/420/coastal-sideboard-cabinet-with-glass-doors.jpeg"
        },
        {
            title: "White Gloss Sideboard",
            description: "White Gloss Sideboard with Glass Doors",
            subType: "Glass Door Side Boards ",
            type: "side-boards",
            price: "Rp 2.000.000",
            imageUrl: "https://m.media-amazon.com/images/I/81knOCNSrgL._UF894,1000_QL80_.jpg"
        },
        {
            title: "White Gloss Sideboard",
            description: "White Gloss Sideboard with Glass Doors",
            subType: "Glass Door Side Boards ",
            type: "side-boards",
            price: "Rp 2.000.000",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTzt336G1DqIq2bWIOlyMLBjfloWaESmdXyA&s"
        },
        {
            title: "Natural Brown Sideboard",
            type: "side-boards",
            subType: "Mid Century Modern Sideboards ",
            description: "Calming Natural Brown Sideboard",
            price: "Rp 2.000.000",
            imageUrl: "https://i.pinimg.com/736x/24/c6/1b/24c61bf8fd1c85466257de5dd92f8fe9.jpg"
        },
        {
            title: "Soild Wooden Sideboard",
            type: "side-boards",
            subType: "Mid Century Modern Sideboards ",
            description: "Solid Wood Mid Century Modern Sideboard",
            price: "Rp 2.000.000",
            imageUrl: "https://m.media-amazon.com/images/I/81WkLrjcHtL._UF894,1000_QL80_.jpg"
        },
        {
            title: "Iconic  Wooden Sideboard",
            type: "side-boards",
            subType: "Mid Century Modern Sideboards ",
            description: "Iconic Wooden Sideboard with 4 drawers",
            price: "Rp 2.000.000",
            imageUrl: "https://pastform.de/cdn/shop/articles/mid-century-sideboards-5-iconic-models-you-should-know-153712.jpg?v=1752641584"
        },
        {
            title: "Vintage Wooden Sideboard",
            type: "side-boards",
            subType: "Mid Century Modern Sideboards ",
            description: "Vintage Wooden Retro Sideboard with 4 drawers",
            price: "Rp 2.000.000",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsmf-dBw8MvGTbXR4rnTfy6cCsLqvSKdJXKahHeON70jxW1qKiQagcz9Ck6nTSsDPxozg&usqp=CAU"
        },
        {
            title: "Small Brown Wooden Sideboard",
            type: "side-boards",
            subType: "Mid Century Modern Sideboards ",
            description: "Browm Wooden Sideboard with 2 Doors",
            price: "Rp 2.000.000",
            imageUrl: "https://m.media-amazon.com/images/I/81huUiQZjoL._UF894,1000_QL80_.jpg"
        },
        {
            title: "Mid Century Modern Cabinet",
            type: "side-boards",
            subType: "Mid Century Modern Sideboards ",
            description: "Mid Century Modern Cabinet with 2 Doors",
            price: "Rp 2.000.000",
            imageUrl: "https://i.etsystatic.com/16603535/r/il/8c5ed4/2307979238/il_fullxfull.2307979238_8n46.jpg"
        },
        {
            title: "Elegant Mordern Cabinet",
            type: "side-boards",
            subType: "Mid Century Modern Sideboards ",
            description: "Elegant Mordern Cabinet with 2 Doors and 2 Drawers",
            price: "Rp 2.000.000",
            imageUrl: "https://i.pinimg.com/736x/f1/28/b9/f128b93404aee3f7e0c8395af03efccc.jpg"
        },
        {
            title: "Mordern Teak Sideboard ",
            type: "side-boards",
            subType: "Mid Century Modern Sideboards ",
            description: "Mid Century Modern Cabinet ",
            price: "Rp 2.000.000",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1TWDJrZHlEJdngYG5AevbNUpEG0sjAuCudg&s"
        },
        {
            title: "Relaxing Wooden Chair",
            type: "chairs",
            description: "Blue Carpet Relaxing Wooden Chair",
            subType: "Carved Traditional Chairs / Folding Chairs",
            price: "Rp 1.900.000",
            imageUrl: "https://rukminim2.flixcart.com/image/480/490/xif0q/icons/original-RKCGYK53EJVQXXJA_1.jpg?q=90"
        },
        {
            title: "Wooden Folding Chair",
            type: "chairs",
            description: "Wooden Folding Chair",
            subType: "Carved Traditional Chairs / Folding Chairs",
            price: "Rp 1.900.000",
            imageUrl: "https://images.squarespace-cdn.com/content/v1/5f55599113e50339e0c1d982/1609603909335-2MWSU4CRINOP4TCN8EPT/1308_1.JPG?format=2500w"
        },
        {
            title: "Wooden Polished Chair",
            type: "chairs",
            description: "Simple and Attractive Wooden Polished Chair",
            subType: "Carved Traditional Chairs / Folding Chairs",
            price: "Rp 1.900.000",
            imageUrl: "https://www.choudhrywoodstore.com/cdn/shop/files/rn-image_picker_lib_temp_94bf0896-3b67-4fe8-a69e-b455a99ad2a4.jpg?v=1708861348&width=1946"
        },
        {
            title: "Wooden Light Polished Chair",
            type: "chairs",
            description: "Folded Mini Chairs ",
            subType: "Carved Traditional Chairs / Folding Chairs",
            price: "Rp 1.900.000",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD2uqRDVHLgLJ1KfwJF0qQkD0l2w5OeLKyRA&s"
        },
        {
            title: "Aesthetic Wooden Chair",
            type: "chairs",
            description: "Comfortable aesthetic wooden chair",
            subType: "Carved Traditional Chairs / Folding Chairs",
            price: "Rp 1.900.000",
            imageUrl: "https://m.media-amazon.com/images/I/81FA1tLkM3L._UF894,1000_QL80_.jpg"
        },

        {
            title: "Art Deco Chair",
            type: "chairs",
            description: "Art Deco Wooden Chair",
            subType: "Wooden Antique Chairs ",
            price: "Rp 1.900.000",
            imageUrl: "https://www.thesprucecrafts.com/thmb/cJ44MnHd2gaD5Af3bo0JTxy7lSI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/art-deco-chair-615611994-5aca24c904d1cf0037615ae6.jpg"
        },
        {
            title: "Planter Chair",
            type: "chairs",
            description: "Teakwood Planter Chair",
            subType: "Wooden Antique Chairs ",
            price: "Rp 1.900.000",
            imageUrl: "https://cpimg.tistatic.com/10091458/b/5/Antique-Teakwood-Planter-Chair.jpeg"
        },
        {
            title: "Planter Antique Chair",
            type: "chairs",
            description: "Teakwood Planter Chair",
            subType: "Wooden Antique Chairs ",
            price: "Rp 1.900.000",
            imageUrl: "https://5.imimg.com/data5/AK/NO/DH/ANDROID-14708796/product-jpeg-500x500.jpg"
        },
        {
            title: " Pure Sheesham Antique Chair",
            type: "chairs",
            description: "Sheesham Antique Chair",
            subType: "Wooden Antique Chairs ",
            price: "Rp 1.900.000",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvPADAqfON83GoLDFa9p29tEwsSB7DSRpM_4viZu26hWq0aitSsd6TeiaM7Lxk00GC58&usqp=CAU"
        },
        {
            title: " Vintage Natural Dark Brown Chair",
            type: "chairs",
            description: "Finished Wooden Handmade Chair",
            subType: "Wooden Antique Chairs ",
            price: "Rp 1.900.000",
            imageUrl: "https://www.wakefieldscearce.com/wp-content/uploads/2012/01/2002-MAH-WS78.JPG"
        },
        {
            title: "Vintage Minimalist Chair",
            type: "chairs",
            description: "Minimalist Handmade Chair",
            subType: "Wooden Antique Chairs ",
            price: "Rp 1.900.000",
            imageUrl: "https://img-us.aosomcdn.com/thumbnail/100/n0/product/2022/06/02/dZR90f18123308709.jpg"
        },
        {
            title: "Vintage Arm Chair",
            type: "chairs",
            description: "Minimalist Handmade Arm Chair",
            subType: "Wooden Antique Chairs ",
            price: "Rp 1.900.000",
            imageUrl: "https://www.custhum.com/cdn/shop/products/Arm_Chair_-_Suhas_in-situ__1100x1100_d04850e2-ce59-4869-8160-1c2e4e1be14b.JPG?v=1585229278"
        },

        {
            title: "Vintage Sofa Chair",
            type: "chairs",
            description: "Minimalist Handmade Sofa Chair",
            subType: "Wooden Antique Chairs ",
            price: "Rp 1.900.000",
            imageUrl: "https://furniturewallet.com/cdn/shop/files/2_39_70.jpg?v=1750759375&width=1946"
        },

        {
            title: "Stylish Cane Chairs",
            type: "chairs",
            description: "Stylish Handmade Cane Chairs",
            subType: "Rattan & Cane Wooden Chairs",
            price: "Rp 1.900.000",
            imageUrl: "https://furniturewallet.com/cdn/shop/files/2_39_70.jpg?v=1750759375&width=1946"
        },
        {
            title: "Fine Dine Cane Chair",
            type: "chairs",
            description: "Handmade Fine Dine Cane Chair ",
            subType: "Rattan & Cane Wooden Chairs",
            price: "Rp 1.900.000",
            imageUrl: "https://m.media-amazon.com/images/I/51v2VR1e+eL._UF894,1000_QL80_.jpg"
        },
        {
            title: "Cane Chairs Set ",
            type: "chairs",
            description: "Natural Rattan Cane Chairs Set ",
            subType: "Rattan & Cane Wooden Chairs",
            price: "Rp 1.900.000",
            imageUrl: "https://www.furniselan.com/cdn/shop/files/boston-solid-wood-rattan-cane-chair-set-of-two-130112.webp?v=1714403974"
        },
        {
            title: "Solid Wood Cane Chair  ",
            type: "chairs",
            description: "Natural Cane Chairs with Wooden Base",
            subType: "Rattan & Cane Wooden Chairs",
            price: "Rp 1.900.000",
            imageUrl: "https://www.jangirdecor.in/cdn/shop/files/pixelcut-1_65.png?v=1715665379"
        },
        {
            title: "Cane Chairs Set ",
            type: "chairs",
            description: "Set of 2 Natural Cane Chairs Set",
            subType: "Rattan & Cane Wooden Chairs",
            price: "Rp 1.900.000",
            imageUrl: "https://antiquehomedecors.com/wp-content/uploads/2024/07/Photoroom-20240702_212746.png"
        },
        {
            title: "Mordern Wooden Chair ",
            type: "chairs",
            description: "Mordern Natural Wooden Chair",
            subType: "Rattan & Cane Wooden Chairs",
            price: "Rp 1.900.000",
            imageUrl: "https://www.habereindia.com/cdn/shop/files/8769139310831.jpg?v=1754044608"
        },
        {
            title: "Flower Vintage Rattan Chair",
            type: "chairs",
            description: "Handmade Beautiful Rattan Chair",
            subType: "Rattan & Cane Wooden Chairs",
            price: "Rp 1.900.000",
            imageUrl: "https://www.irafurniture.com/cdn/shop/files/20250706_1758_ElegantRattanChair_remix_01jzfv99bcek1b513yjeka69n6.jpg?v=1755250912&width=533"
        },
        {
            title: "Rounded Back Rattan Chair",
            type: "chairs",
            description: "Rattan Handmade Chair",
            subType: "Rattan & Cane Wooden Chairs",
            price: "Rp 1.900.000",
            imageUrl: "https://www.orienthouse.com.au/cdn/shop/files/91E4CDC3-C926-4A08-83F2-7873EB0D0799.jpg?v=1744860396"
        },
        {
            title: "Elegant Wooden Bar Chair ",
            type: "chairs",
            description: "Comfortable Wooden Bar Chair",
            subType: "Wooden Lounge/ Bar Chairs ",
            price: "Rp 1.900.000",
            imageUrl: "https://media.landmarkshops.in/cdn-cgi/image/h=550,w=550,q=85,fit=cover/homecentre/1000013856129-1000013856128_01-2100.jpg"
        },
        {
            title: "Rounded Wooden Stool",
            type: "chairs",
            description: "Comfortable Wooden Chair with Rounded Seat",
            subType: "Wooden Lounge/ Bar Chairs ",
            price: "Rp 1.900.000",
            imageUrl: "https://www.buyitdirect.ie/Images/BUNRYN00187280_1_Supersize.jpg?v=26"
        },
        {
            title: "Natural Light Brown Bar Stool",
            type: "chairs",
            description: "Comfortable Wooden Bar Stool",
            subType: "Wooden Lounge/ Bar Chairs ",
            price: "Rp 1.900.000",
            imageUrl: "https://homebarnshop.co.uk/cdn/shop/files/rustic-reclaimed-wood-bar-stool-2.jpg?v=1715942728&width=1080"
        },
        {
            title: "Natural Brown Bar Stool",
            type: "chairs",
            description: "Comfortable Wooden Bar Stool  ",
            subType: "Wooden Lounge/ Bar Chairs ",
            price: "Rp 1.900.000",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVw4i-Gb16tFj8nGrL9afHsdJfC9npQgmS1KSiwrO5zHH26AlyJG1YxtdSdnUR4-f1NHk&usqp=CAU"
        },
        {
            title: "Light Brown Rounded Stool",
            type: "chairs",
            description: "Comfortable Stool with Cussion Seat ",
            subType: "Wooden Lounge/ Bar Chairs ",
            price: "Rp 1.900.000",
            imageUrl: "https://nathanjames.com/cdn/shop/files/23404-4-HERO_2000x.jpg?v=1751258499"
        },
        {
            title: "Walnut Dark Brown Rounded Stool",
            type: "chairs",
            description: "Comfortable Stool with Cussion Seat ",
            subType: "Wooden Lounge/ Bar Chairs ",
            price: "Rp 1.900.000",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhc5ab_-zYWqGKPUeK8aLzaxhz_BXVpZlAYadLa6ZoXZoXf5bWoecWKD7yMLlibZVoiZk&usqp=CAU"
        },
        {
            title: "Bar Chair with Seat and Back",
            type: "chairs",
            description: "Comfortable Stool with Seat and Back ",
            subType: "Wooden Lounge/ Bar Chairs ",
            price: "Rp 1.900.000",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSttKK3OMwHxuNkyHvcHzwwD4UKFhq5zWM8HGbhnxJG3XSzi_o4mhPjXXDI5G12FMcbjGQ&usqp=CAU"
        },
        {
            title: "Bar Chair with Cussion Seat ",
            type: "chairs",
            description: "Comfortable Stool with Cussion Seat ",
            subType: "Wooden Lounge/ Bar Chairs ",
            price: "Rp 1.900.000",
            imageUrl: "https://c1.neweggimages.com/productimage/nb640/B2YHS2409230KM0PYE1.jpg"
        },

    ];


    // Use state to store the product data
    const [products, setProducts] = useState(initialProducts);

    // Filter products based on the type prop
    const filteredProducts = products.filter(product => product.type === type);
    const groupedBySubType = filteredProducts.reduce((groups:any, product:any) => {
        const key = product.subType || "Other";
        if (!groups[key]) groups[key] = [];
        groups[key].push(product);
        return groups;
    }, {});
    // Split the filtered products into groups of 4 for each row
    const productsRows = [];
    for (let i = 0; i < filteredProducts.length; i += 4) {
        productsRows.push(filteredProducts.slice(i, i + 4));
    }

    const phoneNumber = '+91 9079879306';

    const handleFunc = () => {
        const whatsappURL = `https://wa.me/${phoneNumber}`;
        window.open(whatsappURL, '_blank');
    };

    // const handleProductClick = (product: any) => {
    //     router.push(`/product?title=${product.title}&url=${product.imageUrl}`);
    // };

    return (
        <div className="w-full md:p-4 md:h-[65rem] lg:h-[65rem] overflow-auto bg-white text-black">
            <h1 className="text-3xl font-semibold text-center">Our Products</h1>
            {Object.entries(groupedBySubType).map(([subType, subProducts]:any, subIndex) => (

                <div key={subIndex} className="md:flex md:flex-col  md:justify-between gap-12 md:mx-[8rem] mt-[2rem] text-start mx-auto">
                    <h2 className="text-2xl font-semibold text-center mb-4">{subType}</h2>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">
                    {subProducts.map((product: any, index: any) => (
                        <Link href="#" key={index}>
                            <div key={index} className="h-[23rem] xl:w-96 p-4 bg-gray-100 shadow-sm rounded-sm">
                                <div className="h-56 xl:w-[18.3rem]">
                                    <img className="xl:object-cover object-cover w-full h-full rounded-sm" src={product.imageUrl} alt="Image not found" />
                                </div>
                                <h1 className="xl:mx-4 md:mx-2 mt-5 xl:text-2xl md:text-lg text-base font-semibold">{product.title}</h1>
                                <h3 className="xl:mx-4 md:mx-2 mt-2 text-gray-500 text-sm md:text-base">{product.description}</h3>
                            </div>
                        </Link>
                    ))}
                    </div>
                </div>
            ))}
            <div className="flex justify-center items-center">
                <button className='h-[3rem] border-green-600 border-y-2 flex justify-between items-center gap-2 border-x-2 rounded-md p-3 bg-green-600 text-white mt-[3rem] font-sans' onClick={handleFunc}>Liked This ? Take a Screenshot and Whatsapp us <span> <SiWhatsapp /> </span></button>
            </div>
        </div>
    );
}

export default ProductCategory;