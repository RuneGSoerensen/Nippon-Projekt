const itemCountSpan = document.getElementById("itemCount");
const koebBtn = document.querySelector(".koebBtn");

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