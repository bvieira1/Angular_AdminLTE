$.widget.bridge('uibutton', $.ui.button);

//receive calls from typescript code to update the layouts
var AdminLTE = (function() {
  return {
    init: function() {
      $(function(){
        $.AdminLTE.layout.activate();
        $.AdminLTE.layout.fix();
        $.AdminLTE.layout.fixSidebar();
      });
    }
  }
})(AdminLTE||{});


const inputs = document.querySelectorAll('input');

function focusFunc(){
    let parent = this.parentNode.parentNode;2
    parent.classList.add('focus');
}

function blurFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove('focus');
    }

}

inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});

