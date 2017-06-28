function attachEvents() {
    let buttons = $('.button').on('click', buttonClicked);

    function buttonClicked() {
        buttons.removeClass('selected');
        $(this).addClass("selected");
    }
}