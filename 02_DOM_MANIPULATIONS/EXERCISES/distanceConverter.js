function attachEventsListeners() {
    let convertButton = document.getElementById('convert');
    convertButton.addEventListener('click', convertDistance);

    const unitsInMeters = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    function convertDistance() {
        let inputDistanceBox = document.getElementById('inputDistance');
        let inputDistance = inputDistanceBox.value;

        let inputUnits = document.getElementById('inputUnits');
        let selectedInputUnit = inputUnits.options[inputUnits.selectedIndex].value;
        // let selectedInputUnit = inputUnits.value; // this works as well

        let outputUnits = document.getElementById('outputUnits');
        let selectedOutputUnit = outputUnits.options[outputUnits.selectedIndex].value;

        let distanceInMeters = inputDistance * unitsInMeters[selectedInputUnit];
        let distanceInDesiredUnits = distanceInMeters / unitsInMeters[selectedOutputUnit];

        let outputDistanceBox = document.getElementById('outputDistance');
        outputDistanceBox.value = distanceInDesiredUnits;
    }
}