let chopsticks = document.getElementById("chopsticks");
let dumplings = document.getElementById("dumplings");
let tekst1 = document.getElementById("tekst-1");
let tekst2 = document.getElementById("tekst-2");
let tekst3 = document.getElementById("tekst-3");

// DOMContentLoaded gør at funtionen begynder når alle elementerne er blevet loaded på hjemmesiden
document.addEventListener("DOMContentLoaded", function () {
//   når content er loaded kalder vi på en funtion som er startLoop
    startLoop();
    
});
// funtion startLoop "slide 1"
function startLoop() {
    // setTimeout er puttet på en funtion for at give den et delay for at funktion starter
    setTimeout(function () {
        // flytter chopsticks til venstre og rotere dem
        chopsticks.style.transition = "transform 2s ease-in-out";
        chopsticks.style.transform = "translate(100px, -100px) rotate(90deg)";

        // flytter dumplings til højre hjørne
        dumplings.style.transition = "transform 2s ease-in-out";
        dumplings.style.transform = "translate(600px,-400px)";

        // Fade out tekst-1
        tekst1.style.transition = "opacity 1s ease-in-out";
        tekst1.style.opacity = 0;

        // Fade ind tekst-2
        tekst2.style.transition = "opacity 2s ease-in-out";
        tekst2.style.opacity = 1;
    }, 6000); // 6 sekunders delay

    setTimeout(function () {
        // kalder den næste funktion i mit loop / næste "slide"
        nextFunction();
    }, 12000); // 12 seconds før funtionen bliver kaldt
}
// næste funktion "slide 2"
function nextFunction() {
    // flytter chopsticks op og beholder rotate for at den bliver i samme position
    chopsticks.style.transition = "transform 2s ease-in-out";
    chopsticks.style.transform = "translate(100px, -250px) rotate(90deg)";

    // flytter dumplings ned 
    dumplings.style.transition = "transform 2s ease-in-out";
    dumplings.style.transform = "translate(400px,0px)";

    // Fade out tekst-2
    tekst2.style.transition = "opacity 1s ease-in-out";
    tekst2.style.opacity = 0;

    // Fade in tekst-3
    tekst3.style.transition = "opacity 4s ease-in-out";
    tekst3.style.opacity = 1;

    setTimeout(function () {
        // kalder på sidste funktion
        lastFunction();
    }, 6000); // 6 sekunder delay
}

function lastFunction() {
    // flytter chopsticks tilbage til første "slide position"
    chopsticks.style.transition = "transform 2s ease-in-out";
    chopsticks.style.transform = "translate(900px, -180px)";

    // flytter dumplings til første "slide position"
    dumplings.style.transition = "transform 2s ease-in-out";
    dumplings.style.transform = "translate(-200px,-200px)";

    // Fade out tekst-3
    tekst3.style.transition = "opacity 1s ease-in-out";
    tekst3.style.opacity = 0;

    // Fade in tekst-1
    tekst1.style.transition = "opacity 4s ease-in-out";
    tekst1.style.opacity = 1;

    // kalder start loop, som gør at vi kalder den første funktion, og gør at det kører i loop
    setTimeout(startLoop,);
}