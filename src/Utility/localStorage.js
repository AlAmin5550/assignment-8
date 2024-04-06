const getLocalStorageDataOfReadList = () => {
    const storedBooksInReadList = localStorage.getItem('read-list');
    if(storedBooksInReadList){
        return JSON.parse(storedBooksInReadList);
    }
    return [];

}
const getLocalStorageDataOfWishList = () => {
    const storedBooksInWishList = localStorage.getItem('wish-list');
    if(storedBooksInWishList){
        return JSON.parse(storedBooksInWishList);
    }
    return [];

};
const saveBooksInWishList = id => {
    // const storedBooksInReadList = getLocalStorageDataOfReadList();
    const storedBooksInWishList = getLocalStorageDataOfWishList();
    // const wishList = storedBooksInWishList.filter(bookId => storedBooksInReadList.bookId !== bookId);

    const exist = storedBooksInWishList.find(bookId => bookId == id);
    if(!exist){
        storedBooksInWishList.push(id);
        localStorage.setItem('wish-list',JSON.stringify(storedBooksInWishList));
    }

}




const saveBooksInReadList = id => {
    const storedBooksInReadList = getLocalStorageDataOfReadList();
    const exist = storedBooksInReadList.find(bookId => bookId == id);

    if(!exist){
        storedBooksInReadList.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedBooksInReadList))
    }
}


export {saveBooksInReadList,saveBooksInWishList,getLocalStorageDataOfReadList,getLocalStorageDataOfWishList}