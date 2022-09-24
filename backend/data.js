import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'Nathan Watkins',
            email: 'nathancwatkins23@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
    ],
    products: [
        {
            // _id: '1',
            name: 'Nike Slim shirt',
            slug: 'nike-slim-shirt',
            category: 'Shirts',
            image: '/images/p1.jpg', // 679px × 829px
            price: 130,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.8,
            numReviews: 10,
            description: 'high quality shirt',
        },
        {
            // _id: '2',
            name: 'Adidas Fit Shirt',
            slug: 'adidas-fit-shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 250,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.2,
            numReviews: 5,
            description: 'high quality product',
        },
        {
            // _id: '3',
            name: 'Nike Slim Pant',
            slug: 'nike-slim-pant',
            category: 'Pants',
            image: '/images/p3.jpg',
            price: 25,
            countInStock: 0,
            brand: 'Nike',
            rating: 4.7,
            numReviews: 14,
            description: 'high quality product',
        },
        {
            // _id: '4',
            name: 'Adidas Fit Pant',
            slug: 'adidas-fit-pant',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 65,
            countInStock: 5,
            brand: 'Puma',
            rating: 2.7,
            numReviews: 25,
            description: 'high quality product',
        },
    ],
}
export default data
