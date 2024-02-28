
/* Javascript for at øger tallet ved indkøbs kurven for at simulere køb */
const itemCountSpan = document.getElementById("itemCount");
const koebBtn = document.querySelector(".koebBtn");

/* Her bliver der refferet til vores class .background-blur-sektion */
const popUpWindow = document.querySelector(".background-blur-sektion");
const confirmMessage = document.getElementById("kontakt-confirm-message");

/* itemCount er vores variable til at holde vores int til indkøbs kurven */
let itemCount = 0;

/* Javascript function med et eventlistner som styre vores tilføj til kurv script */
koebBtn.addEventListener('click', function(){
    if (koebBtn.textContent === "Køb måltidskasse") {
        itemCount++;
        koebBtn.textContent = "Fjern";
        itemCountSpan.classList.remove("itemCountHidden");
    }
    else {
        itemCount--;
        koebBtn.textContent = "Køb måltidskasse";
        itemCountSpan.classList.add("itemCountHidden");
    }
    itemCountSpan.textContent = itemCount;
});

/* Javascript for at åbne og lukke pop up vinduer */
function showPopUp() {
    popUpWindow.style.display = 'block';
}

function hidePopUp() {
    popUpWindow.style.display = 'none';
}

function confirmMessageSent() {
    confirmMessage.textContent = "Vi har modtaget din besked, og du vil høre fra os snart.";
}

// Javascript for at + og - antal personer i måltidskasse


function addNumber() {
    const nummerInput = document.getElementById("numberInput");
    nummerInput.value = parseInt(nummerInput.value) + 1;
}

function minusNumber() {
    const nummerInput = document.getElementById("numberInput");
    nummerInput.value = parseInt(nummerInput.value) - 1;
}


// Javascript for at + og - antal dage i måltidskasse



// function addDay() {
//     const daysInput = document.getElementById("daysInput");
//     daysInput.value = parseInt(daysInput.value) + 1;
// }

// function minusDay() {
//     const daysInput = document.getElementById("daysInput");
//     daysInput.value = parseInt(daysInput.value) - 1;

toggleDaysVisibility(1);
// }
function addDay() {
    const daysInput = document.getElementById("daysInput");
    const currentDays = parseInt(daysInput.value) + 1;
    daysInput.value = currentDays;
    toggleDaysVisibility(currentDays);
}

function minusDay() {
    const daysInput = document.getElementById("daysInput");
    const currentDays = parseInt(daysInput.value) - 1;
    daysInput.value = currentDays;
    toggleDaysVisibility(currentDays);
}

function toggleDaysVisibility(currentDays) {
    const daysList = document.getElementById("menuliste").getElementsByTagName("li");

    for (let i = 0; i < daysList.length; i++) {
        if (i < currentDays) {
            daysList[i].style.display = "list-item";
        } else {
            daysList[i].style.display = "none";
        }
    }
}


// Link til pdf med opskrift

function handleDownload() {
    const downloadBtn = document.getElementById("downloadThis");
    const pdfUrl = '/media/pdf/donburi-opskrift.pdf';
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.download = 'donburi-opskrift.pdf';
    anchor.target = "_blank";
    anchor.click();
}









