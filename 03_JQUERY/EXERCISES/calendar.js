function calendar(dateArr) {
    // initialize constants
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // initialize dates
    let [day, month, year] = dateArr;
    let today = new Date(year, month - 1, day);
    let firstDate = new Date(year, month - 1, 1);
    let lastDate = new Date(year, month, 0);
    let currentDate = getInitialDate(firstDate);

    // start building the calendar
    let contentDiv = $("#content");
    let table = $("<table>")
        .append($("<caption>").text(`${months[today.getMonth()]} ${today.getFullYear()}`));
    let tBody = $("<tbody>");

    // create headings
    let headingsRow = $("<tr>");
    for (let day of daysOfWeek) {
        headingsRow.append($(`<th>${day}</th>`))
    }
    tBody.append(headingsRow);

    // create date rows
    while (currentDate <= lastDate) {
        let currentRow = $("<tr>");
        for (let i = 0; i < 7; i++) {
            let td = $("<td>");
            let date = currentDate.getDate();

            if (currentDate >= firstDate && currentDate <= lastDate) {
                td.text(`${date}`);

                if (currentDate.getTime() === today.getTime()) {
                    td.addClass("today");
                }
            }

            currentRow.append(td);
            currentDate.setDate(date + 1);
        }

        tBody.append(currentRow);
    }

    table.append(tBody);
    contentDiv.append(table);

    function getInitialDate(firstDateInCalendar) {
        let initialDate = new Date(firstDateInCalendar.getTime());
        let dayOfWeek = firstDateInCalendar.getDay();

        if (dayOfWeek === 0) {
            dayOfWeek = 7;
        }

        initialDate.setDate(initialDate.getDate() - dayOfWeek + 1);
        return initialDate;
    }
}