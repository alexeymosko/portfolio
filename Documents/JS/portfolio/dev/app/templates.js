angular.module('portfolio').run(['$templateCache', function($templateCache) {$templateCache.put('shared/navbar/navbarTemplate.html','<nav class = "nav">\n\t<div class = "nav-home">\n\t\t<img class = "nav-home__img" src="images/home.png" alt = "Alexey Mosko">\n\t\t<div class = "nav-home-text">\n\t\t\t<div class = "nav-home-text__name">Alexey Mosko</div>\n\t\t\t<div class = "nav-home-text__description">Front-end developer</div>\n\t\t</div>\n\t\t\n\t</div>\n\t<ul class = "top-menu">\n\t\t<li class = "top-menu__item"><a class = "top-menu__link" href="#" alt="">Home</a></li>\n\t\t<li class = "top-menu__item"><a class = "top-menu__link" href="#" alt="">About</a></li>\n\t\t<li class = "top-menu__item"><a class = "top-menu__link" href="#" alt="">Skills</a></li>\n\t\t<li class = "top-menu__item"><a class = "top-menu__link" href="#" alt="">Projects</a></li>\n\t\t<li class = "top-menu__item"><a class = "top-menu__link" href="#" alt="">Contact</a></li>\n\t</div>\n</nav>');}]);