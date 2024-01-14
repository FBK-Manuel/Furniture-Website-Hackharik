import {highlight1, chair6, lights, chair1, bed1, sofa3, sofa4, kitchen1, furnitureStyles3, bed3, desk,  chair7,
highlight2, sofa1, sofa5, flower1, flower2, sofa2, chair3, bed, chair4,
} from '../assets'

const ProductList = [
    {
        id: 1,
        image: highlight1,
        price: "$100.00",
        name: "Comfortable Chair",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "chair",
        feature: "highlights",
        productName: "Chair",
        formerPrice: '$185.00',
        starRating: 5,
        peopleRating: 345,
        tag: "Chair Seat",
        productDetails: "A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access."
    },
    {
        id: 2,
        image: lights,
        price: "$100.00",
        name: "Modern Home Lights",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "lights",
        feature: "highlights",
        productName: "Lights",
        formerPrice: '$185.00',
        starRating: 5,
        peopleRating: 345,
        tag: "Home Lights",
        productDetails: "A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access."
    },
    {
        id: 3,
        image: chair3,
        price: "$100.00",
        name: "Modern Chair For Homes",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "chair",
        feature: "newProducts",
        productName: "Chair",
        formerPrice: '$185.00',
        starRating: 5,
        peopleRating: 345,
        tag: "Chair Seat",
        productDetails: "A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access."
    },
    {
        id: 4,
        image: bed1,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "bedFrame",
        feature: "newProducts",
        productName: "Bed Frame",
        formerPrice: '$185.00',
        starRating: 5,
        peopleRating: 345,
        tag: "Modern Bed Frame",
        productDetails: "A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access."
    },
    {
        id: 5,
        image: sofa3,
        price: "$100.00",
        name: "Comfortable Home Sofa for Families",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "sofa",
        feature: "newProducts",
        productName: "Sofa",
        formerPrice: '$185.00',
        starRating: 5,
        peopleRating: 345,
        tag: "Home Sofa",
        productDetails: "A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access."
    },
    {
        id: 6,
        image: chair1,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "chair",
        feature: "newProducts",
        productName: "Chair",
        formerPrice: '$185.00',
        starRating: 5,
        peopleRating: 345,
        tag: "Chair Seat",
        productDetails: "A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access."
    },
    {
        id: 7,
        image: sofa4,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "sofa",
        feature: "newProducts",
        productName: "Sofa",
        formerPrice: '$185.00',
        starRating: 5,
        peopleRating: 345,
        tag: "Home Sofa",
        productDetails: "A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access."
    },
    {
        id: 8,
        image: kitchen1,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "kitchen",
        feature: "newProducts",
        productName: "Kitchen Furniture",
        formerPrice: '$185.00',
        starRating: 5,
        peopleRating: 345,
        tag: "Modern Kitchen Cabinet",
        productDetails: "A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access."
    },
    {
        id: 9,
        image: furnitureStyles3,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "furnitureStyles",
        feature: "newProducts",
        productName: "Furniture Style",
        formerPrice: '$185.00',
        starRating: 5,
        peopleRating: 345,
        tag: "Modern Furniture Style",
        productDetails: "A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access."
    },
    {
        id: 10,
        image: desk,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "chair",
        feature: "newProducts",
        productName: "Chair",
        formerPrice: '$185.00',
        starRating: 5,
        peopleRating: 345,
        tag: "Chair Seat",
        productDetails: "A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access."
    },
    {
        id: 11,
        image: chair7,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "chair",
        feature: "newProducts",
        productName: "Chair",
        formerPrice: '$185.00',
        starRating: 5,
        peopleRating: 345,
        tag: "Chair Seat",
        productDetails: "A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access."
    },
    {
        id: 12,
        image: bed3,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "bedFrame",
        feature: "newProducts",
        productName: "Bed Frame",
        formerPrice: '$185.00',
        starRating: 5,
        peopleRating: 345,
        tag: "Modern Bed Frame",
        productDetails: "A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access."
    },
    {
        id: 13,
        image: bed,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "chair",
        feature: "newProducts",
        productName: "Chair",
        formerPrice: '$185.00',
        starRating: 5,
        peopleRating: 345,
        tag: "Chair Seat",
        productDetails: "A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access."
    },
    {
        id: 14,
        image: chair4,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "bedFrame",
        feature: "newProducts",
        productName: "Bed Frame",
        formerPrice: '$185.00',
        starRating: 5,
        peopleRating: 345,
        tag: "Modern Bed Frame",
        productDetails: "A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access."
    },
    {
        id: 15,
        image: chair6,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "furnitureStyles",
        feature: "furnitureStyles",
        productName: "Furniture Style",
        formerPrice: '$185.00',
        starRating: 5,
        peopleRating: 345,
        tag: "Chair Seat",
        productDetails: "A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access."
    },
    {
        id: 16,
        image: sofa1,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "sofa",
        feature: "productOfWeek",
        productName: "Sofa",
        formerPrice: '$185.00',
        starRating: 5,
        peopleRating: 345,
        tag: "Modern Sofa",
        productDetails: "A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access."
    },
    {
        id: 17,
        image: sofa5,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "sofa",
        feature: "productOfWeek",
        productName: "Sofa",
        formerPrice: '$185.00',
        starRating: 5,
        peopleRating: 345,
        tag: "Modern Sofa",
        productDetails: "A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access."
    },
    {
        id: 18,
        image: flower1,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "flowervase",
        feature: "productOfWeek",
        productName: "Flower Vase",
        formerPrice: '$185.00',
        starRating: 5,
        peopleRating: 345,
        tag: "Modern Flower Vase",
        productDetails: "A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access."
    },
    {
        id: 19,
        image: flower2,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "flowerVase",
        feature: "productOfWeek",
        productName: "Flower Vase",
        formerPrice: '$185.00',
        starRating: 5,
        peopleRating: 345,
        tag: "Modern Flower Vase",
        productDetails: "A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access."
    },
    {
        id: 20,
        image: highlight2,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "chair",
        feature: "highlights2",
        productName: "Chair",
        formerPrice: '$185.00',
        starRating: 5,
        peopleRating: 345,
        tag: "Chair Seat",
        productDetails: "A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access."
    },
    {
        id: 21,
        image: sofa2,
        price: "$100.00",
        name: "Bed frame Mattress Bed size Platform",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
        category: "sofa",
        feature: "limitedOffer",
        productName: "Sofa",
        formerPrice: '$185.00',
        starRating: 5,
        peopleRating: 345,
        tag: "Modern Sofa",
        productDetails: "A commode chair is a free-standing toilet chair that is designed to help people who find walking to the bathroom difficult. They generally come as two options: a bedside commode chair, or a shower commode chair. Bedside commode chairs can be placed next to a bed for close access."
    },
    
    
]

export default ProductList;
