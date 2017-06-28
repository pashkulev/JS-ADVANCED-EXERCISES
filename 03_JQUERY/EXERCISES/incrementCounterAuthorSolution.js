function increment(selector) {
    // STEP 1 - creating the needed elements and parsing the selector
    let container = $(selector);

    /**
     * Adding multiple elements to the DOM can be expensive,
     * instead of repeatedly adding to the DOM we can create a DocumentFragment
     * and add the elements to it instead. When we have built our hierarchy
     * we can append the DocumentFragment to the DOM, which will add
     * all of the fragment’s elements to the specified selector.
     * @type {DocumentFragment}
     */
    let fragment = document.createDocumentFragment();
    let textArea = $("<textarea>");
    let incrementBtn = $("<button>Increment</button>");
    let addBtn = $("<button>Add</button>");
    let list = $("<ul>");

    // STEP 2 - add values, and attributes to the elements and events to the buttons

    // Textarea formation
    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr("disabled", true);

    // Buttons formation
    incrementBtn.addClass("btn");
    incrementBtn.attr('id', "incrementBtn");
    addBtn.addClass('btn');
    addBtn.attr("id", 'addBtn');

    // List formation
    list.addClass('results');

    // Events
    incrementBtn.on("click", function () {
        textArea.val(+textArea.val() + 1);
    });

    addBtn.on("click", function () {
        let li = $(`<li>${textArea.val()}</li>`);
        li.appendTo(list);
    });

    // STEP 3 - add elements to the DOM
    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);
    console.log(fragment);

    container.append(fragment);
}