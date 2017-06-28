function initializeTable() {
    let $createLink = $('#createLink');
    $createLink.click(createRow);

    let commandsObj = {
        "Up":moveUp,
        "Down":moveDown,
        "Delete":deleteRow
    };

    let $table = $("#countriesTable");
    addRow("Bulgaria", "Sofia");
    addRow("Germany", "Berlin");
    addRow("Russia", "Moscow");
    processCommandsVisibility();

    function buildActionLinks() {
        let $action = $("<td>");
        for (let command in commandsObj) {
            let $a = $("<a>", {
                html:`[${command}]`,
                href: "#",
            });
            $a.click(commandsObj[command]);
            $action.append($a).append(" ");
        }

        return $action;
    }

    function moveUp() {
        let $row = $(this).closest('tr');
        if ($row.index() > 2) {
            $row.fadeOut(function () {
                $row.insertBefore($row.prev());
                processCommandsVisibility();
                $row.fadeIn();
            });
        }
    }

    function moveDown() {
        let $rows = $table.find('tr');
        let $row = $(this).closest('tr');
        if ($row.index() < $rows.length - 1) {
            $row.fadeOut(function () {
                $row.insertAfter($row.next());
                processCommandsVisibility();
                $row.fadeIn();
            });
        }
    }

    function deleteRow() {
        let $row = $(this).closest('tr');
        $row.fadeOut(function () {
            $row.remove();
            processCommandsVisibility();
        });
    }

    function createRow() {
        let $country = $("#newCountryText");
        let country = $country.val();
        let $capital = $("#newCapitalText");
        let capital = $capital.val();

        if (country === '' || capital === '') {
            alert("Country and capital should not be empty!");
        } else {
            addRow(country, capital);
            processCommandsVisibility();

            $country.val("");
            $capital.val("");
        }
    }

    function addRow(country, capital) {
        let $row = $("<tr>")
            .append(`<td>${country}</td><td>${capital}</td>`)
            .append(buildActionLinks())
            .css("display","none");
        $table.append($row);
        $row.fadeIn();
    }

    function processCommandsVisibility() {
        let $rows = $table.find('tr');
        $rows.find('a').show();

        $rows.eq(2)
            .find('a')
            .eq(0)
            .hide();

        $rows.last()
            .find('a')
            .eq(1)
            .css("display", 'none');
    }
}