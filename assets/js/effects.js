document.addEventListener('DOMContentLoaded', addClickEvents);

function addClickEvents () {
  const name = document.querySelector('.effects');
  name.addEventListener('click', toggleFade);
}

function toggleFade(e) {
  console.log(e.target);
  const name = e.target;

  // name.classList.toggle('animated');
  // name.addEventListener('transitionend', function(ev) {
  //   console.log(ev);
  //   ev.target.classList.remove('jello');
  // });
  // name.classList.add('jello');
  $(name).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', removeTransition);
  $(name).addClass('jello');
}

function removeTransition(e) {
  console.log(e.target);
  $(e.target).removeClass('jello');
  // if (e.propertyName !== 'transform') return;
  // this.classsList.remove('jello');
}
