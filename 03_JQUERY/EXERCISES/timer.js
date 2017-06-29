function timer() {
    $("#start-timer").click(startTimer);
    $("#stop-timer").click(pauseTimer);

    let totalSeconds = 0;
    let timer = false;

    function startTimer() {
        if (timer === false) {
            timer = setInterval(showTimer, 1000);
        }
    }

    function pauseTimer() {
        clearInterval(timer);
        timer = false;
    }

    function showTimer() {
        totalSeconds++;
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
        let seconds = totalSeconds - (hours * 3600) - (minutes * 60);

        $("#hours").text(("0" + hours).slice(-2));
        $("#minutes").text(("0" + minutes).slice(-2));
        $("#seconds").text(("0" + seconds).slice(-2));
    }
}