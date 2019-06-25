var buttonSearching = document.querySelector('.searchingButton');
var modalSearching = document.querySelector('.searching-modal');

var onButtonSearchingClickOpen = function(){
   modalSearching.classList.remove('hidden');
}
var onButtonSearchingClickCLose = function(){
   modalSearching.classList.add('hidden');
}

buttonSearching.addEventListener('click', function(evt){
  evt.preventDefault();
  if(modalSearching.classList.contains('hidden')) {
    onButtonSearchingClickOpen();
  }else {
    onButtonSearchingClickCLose();
  }
});
