document.addEventListener('DOMContentLoaded', function(){
    var navbar = document.getElementById('navbar-top');
    var navbarLinks = document.querySelectorAll('#navbar-top .nav-link');
    
    function isSectionVisible(section) {
        var rect = section.getBoundingClientRect();
        return (rect.top >= 0 && rect.bottom <= window.innerHeight);
    }

    function activateNavbarLink() {
        var fromTop = window.scrollY + navbar.offsetHeight;
        navbarLinks.forEach(function(link) {
            var section = document.querySelector(link.hash);
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    navbarLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var section = document.querySelector(link.hash);
            window.scrollTo({
                top: section.offsetTop - navbar.offsetHeight,
                behavior: 'smooth'
            });
            navbarLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            link.classList.add('active');
        });
    });

    function handleScroll() {
        activateNavbarLink();
        if (window.scrollY > 200) {
            navbar.classList.add('fixed-top');
            document.body.style.paddingTop = navbar.offsetHeight + 'px';
        } else {
            navbar.classList.remove('fixed-top');
            document.body.style.paddingTop = '0';
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
