function domSearch(selector, isCasesens) {
    addFunc();
    searchFunc();
    ulFunc();


    function addFunc() {
        let div = $('<div>')
            .addClass('add-controls');
        let label = $('<label>')
            .text('Enter text: ');
        let input = $('<input>')
            .css('display', 'inline-block');
        let link = $('<a>')
            .addClass('button')
            .text('Add');
        div.append(label
            .append(input))
            .append(link);

        $(`${selector}`).append(div);

        $(link).click(addItem);
    }

    function searchFunc() {
        let div = $('<div>')
            .addClass('search-controls');
        let label = $('<label>')
            .text('Search: ');
        let input = $('<input>')
            .css('display', 'inline-block');
        div.append(label
            .append(input));
        $(`${selector}`).append(div);

        input.on('input', searchItems);
    }

    function ulFunc() {
        let div = $('<div>')
            .addClass('result-controls');
        let ul = $('<ul>')
            .addClass('items-list');
        div.append(ul);
        $(`${selector}`).append(div);
    }

    function addItem() {
        let link = $('<a>')
            .addClass('button')
            .text('X');
        let li = $('<li>')
            .addClass('list-item')
            .append(link);
        let text = $('<strong>');
        $(text).text(`${$('.add-controls input').val()}`);
        $(li).append(text);
        $('ul').append(li);

        $('.add-controls input').val('');
        link.click(deleteItem);
    }

    function deleteItem() {
        let li = $(this).parent();
        $(li).remove();
    }

    function searchItems() {
        let searchedWord = $(this).val();

        if(isCasesens){
            $('.list-item:not(:contains(' + searchedWord + '))').hide();
            $('.list-item:contains(' + searchedWord + ')').show();
        }
        else{
            let regex = new RegExp(searchedWord, 'i');

            let lis = $('.list-item strong').toArray();

            for(let li of lis){
                if(regex.test(li.textContent)){
                    $(li).parent().show();
                }
                else{
                    $(li).parent().hide();
                }
            }
        }

    }
}