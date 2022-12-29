const modal = document.getElementById("myModal");
const scroll = document.getElementById("scroll-down");

displayModal();

function displayModal() {
    modal.style.display = "block";
    document.body.style.overflow = 'hidden';
    scroll.style.display = "none";
}

function hideModal() {
    modal.style.display = "none";
    document.body.style.overflow = 'visible';
    scroll.style.display = "block";

}
