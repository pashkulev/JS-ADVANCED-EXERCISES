function increment(selector) {
    let sel = $(`${selector}`)
        .append($('<textarea>', {"class":"counter"})
            .prop("disabled", true).val(0))
        .append($("<button>", {"class":"btn", id:"incrementBtn", text:"Increment"})
            .click(performIncrement))
        .append($("<button>", {"class":"btn", id:"addBtn", text:"Add"})
            .click(add))
        .append($("<ul class='results'>"));
    console.log(sel.children());

    function performIncrement() {
        let textArea = $(".counter");
        textArea.val(Number(textArea.val()) + 1);
    }

    function add() {
        $(".results").append($("<li>").text($(".counter").val()));
    }
}