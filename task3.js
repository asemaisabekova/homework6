function openModal(image) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");

    modalImage.src = image.src; 
    modal.classList.add("show"); 
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.classList.remove("show"); 
}
