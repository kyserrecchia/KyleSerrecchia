
//NAVIGATION//////////////////////////////////////////////////////////////////////////////////////
const sideNav = document.getElementById('mySidenav');
offNavListener();
function offNavListener(){
	sideNav.addEventListener('mouseleave', function(){
		setTimeout(function(){closeNav()}, 1100);
	});
}

function openNav(){
    sideNav.style.width = "250px";
}
function closeNav(){
	sideNav.style.width = 0;
}

const scrollFunc = {
	home: function(){document.querySelector('.home').scrollIntoView({behavior: 'smooth'})},
	about: function(){document.querySelector('.about').scrollIntoView({behavior: 'smooth'});
					  document.getElementById('downV').style.animationIterationCount = 0},
	skills: function(){document.querySelector('.skills').scrollIntoView({behavior: 'smooth'})},
	projects: function(){document.querySelector('.projects').scrollIntoView({behavior: 'smooth'})},
	contact: function(){document.querySelector('.contact').scrollIntoView({behavior: 'smooth'})}
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
