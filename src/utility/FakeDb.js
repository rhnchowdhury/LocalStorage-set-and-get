// Use local storage to manage cart data

////////////////////////////// Single data stored///////////////////////////////////////////

// const addToDb = id => {
//     const quantity = localStorage.getItem(id);
//     if (quantity) {
//         const newQuantity = parseInt(quantity) + 1;
//         localStorage.setItem(id, newQuantity);
//     }
//     else {

//         localStorage.setItem(id, 1)
//     }
// };


////////////////////////////// Multiple data stored///////////////////////////////////////////

const addToDb = id => {
    let shoppingCart = {};

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

export default addToDb;