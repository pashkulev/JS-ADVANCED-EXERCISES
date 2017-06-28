function attachEvents() {
    $("#items").on('click', 'li', toggleSelection);
    $('#showTownsButton').click(showTowns);

    function toggleSelection() {
        if ($(this).attr('data-selected')) {
            $(this).removeAttr("data-selected");
            $(this).css('background-color', "");
        } else {
            $(this).attr("data-selected", true);
            $(this).css('background-color', "#DDD");
        }
    }

    function showTowns() {
        let selectedTownsDiv = $('#selectedTowns');
        let selectedTowns = $('#items')
            .find('li[data-selected=true]')
            .get()
            .map(t => t.textContent)
            .join(", ");
        selectedTownsDiv.text("Selected towns: " + selectedTowns);
    }
}