function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMouseMove);
    gradient.addEventListener('mouseout', () => resultDiv.textContent = '');
    let resultDiv = document.getElementById('result');
    
    function onMouseMove(event) {
        let width = event.target.clientWidth - 1;
        let mousePositionX = event.offsetX;
        let percentage = Math.floor(mousePositionX / width * 100);
        resultDiv.textContent = percentage + "%";
    }
}