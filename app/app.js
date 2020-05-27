//Menu
document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }

    var navs = document.getElementsByClassName('sectionbtn')
    for(var i = 0; i <navs.length; i++) {
        navs[i].addEventListener('click', function () {
            document.getElementById('navMenu').classList.remove('is-active')
        })
    }



 

  AOS.init({
    mirror: true,
  });



  setInterval(function (){
    var listitems = document.getElementsByClassName('galitem'); /* Get all list items */
    var lastitem = listitems[listitems.length - 1]; /* Find the last list item */
    lastitem.classList.remove('animate__animated', 'animate__bounceOutRight')
    lastitem.classList.add('animate__animated', 'animate__bounceInLeft')
    var parentul = lastitem.parentNode; /* Find the parent element of the items */
    parentul.insertBefore(lastitem, listitems[0]); /* Replacement for insertAfter() */
    var lastitem = listitems[listitems.length - 1]; /* Find the last list item */
    setTimeout(function (){
        lastitem.classList.remove('animate__animated', 'animate__bounceInLeft')
        lastitem.classList.add('animate__animated', 'animate__bounceOutRight')
    }, 6500)
  }, 7000)



});