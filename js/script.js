
/* Javascript for at øger tallet ved indkøbs kurven for at simulere køb */


const itemCountSpan = document.getElementById("itemCount");
const koebBtn = document.querySelector(".koebBtn");
const popUpWindow = document.querySelector(".background-blur-sektion");


let itemCount = 0;

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



