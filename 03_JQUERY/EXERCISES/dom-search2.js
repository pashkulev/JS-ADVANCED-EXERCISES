function domSearch(selector, caseSensitive = false) {
    $(selector)
        .append($("<div>").addClass("add-controls")
            .append($("<label>Enter text:</label>"))
            .append($("<input>").css("display", "inline-block"))
            .append($("<a>Add</a>").addClass("button").click(addToList)))
        .append($("<div>").addClass("search-controls")
            .append($("<label>Search:</label>"))
            .append($("<input>").css("display", "inline-block").on("input", showMatchedItems)))
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
        $(".items-list li").css("display", "");

        if (caseSensitive) {
            $(".list-item strong").each((index, item) => {
                if (item.textContent.indexOf(searchText) === -1) {
                    $(item).parent().css("display", "none");
                }
            });
        } else {
            $(".list-item strong").each((index, item) => {
                if (item.textContent.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
                    $(item).parent().css("display", "none");
                }
            });
        }
    }

    function deleteItem() {
        $(this).parent().remove();
    }
}