// Use local storage to manage cart data

const addToDb = id => {
    localStorage.setItem(id, 1)
}
export default addToDb;