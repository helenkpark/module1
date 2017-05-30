function showValue(newValue){
  document.getElementById("range").innerHTML=newValue;
}

var activeDropdown = {};
document.getElementById('drop2').addEventListener('click',showDropdown);
document.getElementById('music-dropdown').addEventListener('click', showDropdown);                                                              
function showDropdown(event){
  if (activeDropdown.id && activeDropdown.id !== event.target.id) {
    activeDropdown.element.classList.remove('active');
  }
  if (event.target.tagName === 'LI') {
    activeDropdown.button.innerHTML = event.target.innerHTML;
    for (var i=0;i<event.target.parentNode.children.length;i++){
      if (event.target.parentNode.children[i].classList.contains('check')) {
        event.target.parentNode.children[i].classList.remove('check');
      }
    }
    window.setTimeout(function(){
          event.target.classList.add('check');
    },500)
  }
  for (var i = 0;i<this.children.length;i++){
    if (this.children[i].classList.contains('dropdown2-selection')){
        activeDropdown.id = this.id;
        activeDropdown.element = this.children[i];
        this.children[i].classList.add('active');
     }
    else if (this.children[i].classList.contains('dropdown-button')){
      activeDropdown.button = this.children[i];
    }
  }
}

window.onclick = function(event) {
  if (!event.target.classList.contains('dropdown-button')) {
    activeDropdown.element.classList.remove('active');
  }
}

document.getElementById("cal").innerHTML=Date();