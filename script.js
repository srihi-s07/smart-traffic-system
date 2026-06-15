let roads = {

    A: 0,

    B: 0,

    C: 0,

    D: 0

};



function setStatus(msg){

    document.getElementById("statusBar").innerText =

    "SYSTEM STATUS: " + msg;

}



function delay(ms){

    return new Promise(resolve => setTimeout(resolve, ms));

}



// STEP 1: SENSOR DATA GENERATION

function generate(){



    setStatus("READING SENSORS");



    document.getElementById("loader").innerText =

    "📡 Collecting IR sensor data...";



    setTimeout(() => {



        roads.A = Math.floor(Math.random()*80);

        roads.B = Math.floor(Math.random()*80);

        roads.C = Math.floor(Math.random()*80);

        roads.D = Math.floor(Math.random()*80);



        document.getElementById("A").innerText = roads.A;

        document.getElementById("B").innerText = roads.B;

        document.getElementById("C").innerText = roads.C;

        document.getElementById("D").innerText = roads.D;



        document.getElementById("loader").innerText =

        "✔ Sensor Data Acquired";



        setStatus("SENSORS ACTIVE");



    }, 1500);

}





// STEP 2: PROCESSING (IMPORTANT PART)

async function processTraffic(){



    setStatus("PROCESSING DATA");



    document.getElementById("loader").innerText =

    "⚙ ESP32 Processing...";



    await delay(2000);



    let total =

    roads.A + roads.B + roads.C + roads.D;



    if(total === 0){

        alert("Generate sensor data first");

        return;

    }



    // WEIGHTED INTELLIGENT SYSTEM (NOT SIMPLE RATIO)

    let scoreA = roads.A * 1.2;

    let scoreB = roads.B * 1.0;

    let scoreC = roads.C * 0.8;

    let scoreD = roads.D * 1.1;



    let scores = {A:scoreA, B:scoreB, C:scoreC, D:scoreD};



    await delay(1500);



    let maxRoad = Object.keys(scores).reduce((a,b)=>

        scores[a] > scores[b] ? a : b

    );



    setStatus("DECISION MADE");



    document.getElementById("loader").innerText =

    "🚦 Allocating Signal Timings...";



    await delay(1000);



    let result = `

    <h2>📊 Traffic Analysis Report</h2>



    <p>Road A: ${roads.A}</p>

    <p>Road B: ${roads.B}</p>

    <p>Road C: ${roads.C}</p>

    <p>Road D: ${roads.D}</p>



    <hr>



    <h3>🧠 ESP32 Decision</h3>

    <p>Highest Priority Road: <b>${maxRoad}</b></p>



    <p>Reason: Weighted congestion algorithm</p>



    <hr>



    <h3>⚡ System Flow</h3>

    Sensor → ESP32 → Cloud → Traffic Lights

    `;



    document.getElementById("output").innerHTML = result;



    document.getElementById("loader").innerText =

    "✔ Processing Complete";



    setStatus("IDLE");

}





// STEP 3: EMERGENCY MODE

function emergency(){



    setStatus("EMERGENCY OVERRIDE");



    document.getElementById("loader").innerText =

    "🚑 PRIORITY MODE ACTIVATED";



    document.getElementById("output").innerHTML = `

        <h2 style="color:red">🚑 EMERGENCY VEHICLE DETECTED</h2>

        <p>All signals overridden</p>

        <p>Green signal assigned immediately</p>

        <p>ESP32 forced priority routing active</p>

    `;

}
