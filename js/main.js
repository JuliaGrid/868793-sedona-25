var buttonSearching = document.querySelector('.searchingButton');
var modalSearching = document.querySelector('.searching-modal');
var buttonSubmit = document.querySelector('.button-search');
var race = modalSearching.querySelector('[name=race]');
var departure = modalSearching.querySelector('[name=departure]');
var adults = modalSearching.querySelector('[name=adults]');
var children = modalSearching.querySelector('[name=children]');
var form = modalSearching.querySelector('.data-of-hotel');

var onButtonSearchingClickOpen = function() {
  modalSearching.classList.remove('hidden');
}
var onButtonSearchingClickCLose = function() {
  modalSearching.classList.add('hidden');
  modalSearching.classList.remove("modal-eror");
}

form.addEventListener('submit', function(evt) {
  modalSearching.classList.remove("modal-eror");
  if (!race.value || !departure.value || !adults.value || !children.value) {
    evt.preventDefault();
    modalSearching.classList.remove("modal-eror");
    modalSearching.offsetWidth = modalSearching.offsetWidth;
    modalSearching.classList.add("modal-eror");
    if (!race.value) {
      race.focus();
    } else if (!departure.value) {
      departure.focus();
    } else if (!adults.value) {
      adults.focus();
    } else if (!children.value) {
      children.focus();
    }
  }
});

buttonSearching.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (modalSearching.classList.contains('hidden')) {
    onButtonSearchingClickOpen();
  } else {
    onButtonSearchingClickCLose();
  }
});
