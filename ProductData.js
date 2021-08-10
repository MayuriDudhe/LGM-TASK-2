const ProductData = {
    title: 'Fashion Club - We Promise The Comfort of Our Clothes',
    description: 'Every one of us tends to look attractive. Appearance is the first impression you convey to others. The major factor that contributes to the attractive appearance is Clothing. ',
    colorOptions: [
        {
            styleName: 'dish-1',
            imageUrl: '/dish-1.jpg'
        },
        {
            styleName: 'Red Strap',
            imageUrl: '/laptop-1.jpg'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: '/dish-3.jpg'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: '/dish-4.jpg'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
}

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData;