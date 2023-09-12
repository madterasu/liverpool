function openModal(imageSrc) {
  var modal = document.getElementById("myModal");
  var modalImage = document.getElementById("modal-image");

  modalImage.src = imageSrc;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
