
//NAVIGATION//////////////////////////////////////////////////////////////////////////////////////
const sideNav = document.getElementById('mySidenav');
const pages = document.getElementsByClassName('page');

offNavListener();

function offNavListener(){
	sideNav.addEventListener('mouseleave', function(){
		setTimeout(function(){closeNav()}, 700);
	});
}

function openNav(){
    sideNav.style.width = "250px";
    for(var i = 0; i < pages.length; i++){
        pages[i].style.opacity = .85;
    }
}
function closeNav(){
	sideNav.style.width = 0;
    for(var i = 0; i < pages.length; i++){
        pages[i].style.opacity = 1;
    }
}

const scrollFunc = {
	home: function(){document.querySelector('.home').scrollIntoView({behavior: 'smooth'})},
	about: function(){
			document.getElementById('downV').style.animationIterationCount = 0;
				if(screen.width>600){
					document.querySelector('.about').scrollIntoView({behavior: 'smooth'});
				} else{
					document.querySelector('.aboutMe').scrollIntoView({behavior: 'smooth'});
				}
			},
	skills: function(){document.querySelector('.skills').scrollIntoView({behavior: 'smooth'})},
	projects: function(){document.querySelector('.projects').scrollIntoView({behavior: 'smooth'})},
	contact: function(){document.querySelector('.contact').scrollIntoView({behavior: 'smooth'})}
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
