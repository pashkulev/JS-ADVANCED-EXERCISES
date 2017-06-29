function domSearch(selector, caseSensitive = false) {
    $(selector)
        .append($("<div>").addClass("add-controls")
            .append($("<label>Enter text:</label>"))
            .append($("<input>"))
            .append($("<a>Add</a>").addClass("button").click(addToList)))
        .append($("<div>").addClass("search-controls")
            .append($("<label>Search:</label>"))
            .append($("<input>").keyup(showMatchedItems)))
        .append($("<div>").addClass("result-controls")
            .append($("<ul>").addClass("items-list")));

    function addToList() {
        let textInput = $(".add-controls input");
        let text = textInput.val();

        if (text.trim() !== "") {
            $(".items-list")
                .append($("<li>").addClass("list-item")
                    .append($(`<a class='button'>X</a>`).click(deleteItem))
                    .append($(`<strong>${text}</strong>`)));

            textInput.val("");
        }
    }

    function showMatchedItems() {
        let searchText = $(".search-controls input").val();
        let itemsList = $(".items-list li").css("display", "");

        if (caseSensitive) {
            itemsList.not($(`li:contains(${searchText})`))
                .css("display", "none");
        } else {
            itemsList.filter((index, item) => !item.textContent.toLowerCase().includes(searchText.toLowerCase()))
                .css("display", "none");
        }
    }

    function deleteItem() {
        $(this).parent().remove();
    }
}