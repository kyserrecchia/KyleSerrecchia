
//NAVIGATION//////////////////////////////////////////////////////////////////////////////////////
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
const scrollFunc = {
	home: function(){document.querySelector('.home').scrollIntoView({behavior: 'smooth'})},
	about: function(){document.querySelector('.about').scrollIntoView({behavior: 'smooth'})},
	skills: function(){document.querySelector('.skills').scrollIntoView({behavior: 'smooth'})},
	projects: function(){document.querySelector('.projects').scrollIntoView({behavior: 'smooth'})},
	contact: function(){document.querySelector('.contact').scrollIntoView({behavior: 'smooth'})}
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
