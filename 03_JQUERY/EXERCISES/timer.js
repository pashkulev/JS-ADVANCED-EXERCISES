function timer() {
    let startBtn = $("#start-timer")
        .click(startTimer);
    let stopBtn = $("#stop-timer")
        .click(stopTimer)
        .prop("disabled", true);

    let totalSeconds = 0;
    let timer;

    function startTimer() {
        timer = setInterval(showTimer, 1000);
        startBtn.prop("disabled", true);
        stopBtn.prop('disabled', false);
    }

    function stopTimer() {
        clearInterval(timer);
        startBtn.prop("disabled", false);
        stopBtn.prop("disabled", true);
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