const getStoredBookStorage = () => {
    const storedBookStorage = localStorage.getItem('book-storage');
    if (storedBookStorage) {
        return JSON.parse(storedBookStorage);
    }
    return [];
}

const saveStoredBookStorage = (id) => {
    const storedBook = getStoredBookStorage();
    if (!storedBook.includes(id)) {
        storedBook.push(id);
        localStorage.setItem('book-storage', JSON.stringify(storedBook));
    }
}

export { getStoredBookStorage, saveStoredBookStorage }
