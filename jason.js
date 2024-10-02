const shop=[
    {
        id:1,
        name:"laptop",
        price:40000
    },
    {
        id:2,
        name:"mobile",
        price:20000
    },  
    {
        id:3,
        name:"watch",
        price:10000
    }
]

const products=JSON.stringify(shop)
console.log(products)
const object=JSON.parse(products)
console.log(object);