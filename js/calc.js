function calculateSoap() {

    const oil = parseFloat(document.getElementById("oilAmount").value);
    const sapValue = parseFloat(document.getElementById("oilType").value);

    if (isNaN(oil) || oil <= 0) {
        alert("Please enter a valid oil amount");
        return;
    }

    const naoh = oil * sapValue;
    const water = oil * 0.38;

    const rate = 0.02 * oil;

    const soap = oil * 0.85;
    const glycerol = oil * 0.15;

    document.getElementById("naoh").innerText = naoh.toFixed(2);
    document.getElementById("water").innerText = water.toFixed(2);
    document.getElementById("rate").innerText = rate.toFixed(2);
    document.getElementById("soap").innerText = soap.toFixed(2);
    document.getElementById("glycerol").innerText = glycerol.toFixed(2);

    drawGraph(oil, sapValue);
}


function drawGraph(oil, sapValue) {

    const canvas = document.getElementById("soapChart");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(50, 250);

    for (let x = 0; x <= oil; x += oil / 10) {
        let naoh = x * sapValue;
        let px = 50 + (x / oil) * 400;
        let py = 250 - (naoh / (oil * sapValue)) * 200;
        ctx.lineTo(px, py);
    }

    ctx.strokeStyle = "#2bb3a3";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillText("Oil Amount →", 220, 290);
    ctx.save();
    ctx.rotate(-Math.PI / 2);
    ctx.fillText("NaOH →", -180, 20);
    ctx.restore();
}
