export const getNextElem = (array, elem) => {
    const currentIndex = array.indexOf(elem);
    if (currentIndex === array.length - 1) {
        return array[0];
    } else {
        return array[currentIndex + 1]
    }
}

