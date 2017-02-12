document.addEventListener('DOMContentLoaded', addClickEvents);

function addClickEvents () {
  const name = document.querySelector('.effects');
  name.addEventListener('click', toggleFlip);
  const webDev = document.getElementById('header-wd');
  webDev.addEventListener('click', toggleBounce);
  // console.log(name);
  // console.log(webDev);
}

function toggleFlip(e) {
  // console.log(e.target);
  const name = e.target;

  // name.classList.toggle('animated');
  // name.addEventListener('transitionend', function(ev) {
  //   console.log(ev);
  //   ev.target.classList.remove('jello');
  // });
  // name.classList.add('jello');
  $(name).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', removeTransition);
  $(name).addClass('flipInX');
}

function toggleBounce(e) {
  const name = e.target;
  $(name).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', removeTransition);
  $(name).addClass('bounce');
}

function removeTransition(e) {
  // console.log(e.originalEvent.animationName);
  const aname = e.originalEvent.animationName;
  $(e.target).removeClass(aname);
  // if (e.propertyName !== 'transform') return;
  // this.classsList.remove('jello');
}
