let createBook = (function bookGenerator() {
    let id = 1;
    return function (selector, title, author, isbn) {
        let bookTitle = $("<p>").addClass("title").text(title);
        let bookAuthor = $("<p>").addClass("author").text(author);
        let bookISBN = $("<p>").addClass('isbn').text(isbn);
        let selectBtn = $("<button>Select</button>")
            .click(() => bookDiv.css("border", "2px solid blue"));
        let deselectBtn = $("<button>Deselect</button>")
            .click(() => bookDiv.css("border", "none"));

        let bookDiv = $("<div>")
            .attr('id', "book" + id++)
            .append(bookTitle)
            .append(bookAuthor)
            .append(bookISBN)
            .append(selectBtn)
            .append(deselectBtn);

        $(selector).append(bookDiv);
    }
}());