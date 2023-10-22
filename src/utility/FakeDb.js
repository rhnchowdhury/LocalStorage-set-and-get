// Use local storage to manage cart data

////////////////////////////// Single data stored///////////////////////////////////////////

// const addToDb = id => {
//     const quantity = localStorage.getItem(id);
//     if (quantity) {
//         const newQuantity = parseInt(quantity) + 1;
//         localStorage.setItem(id, newQuantity);
//     }
//     else {

//         localStorage.setItem(id, 1)j
//     }
// };


////////////////////////////// Multiple data stored///////////////////////////////////////////

const addToDb = id => {
    let shoppingCart = {};

    // get shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};

///////////////////////////////////Remove data from local storage//////////////////////////////////////

const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
};


// ////////////////////////////////////////////////Total price calculate//////////////////////////

const totalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
};

export { addToDb, removeFromDb, totalPrice };