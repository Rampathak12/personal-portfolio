function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    modal.classList.remove("fade-out");
    modal.classList.add("fade-in");
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("fade-in");
    modal.classList.add("fade-out");
    setTimeout(() => {
        modal.style.display = "none";
    }, 500);
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        closeModal();
    }
}


window.onkeydown = function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
}
