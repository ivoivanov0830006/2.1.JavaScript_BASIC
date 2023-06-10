function books(input) {
    let searchedBook = input[0];
    let currentBook = input[1];
    let index = 2;
    let isFound = false;
    let checkedBooks = 0;

    while(index <=input.length) {
        if (currentBook === searchedBook) {
            isFound = true;
            break;
        } else if (currentBook === "No More Books") {
            break;
        } else {
            checkedBooks += 1
            currentBook = input[index];
            index++;
        }
    }
    if (isFound) {
        console.log(`You checked ${checkedBooks} books and found it.`)
    } else {
        console.log(`The book you search is not here!\nYou checked ${checkedBooks} books.`)
    }
}

books(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
