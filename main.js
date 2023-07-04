let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick=()=>{
	navbar.classList.toggle('active')
}

window.onscroll=()=>{
	navbar.classList.remove('active');
}



let darkmode = document.querySelector('#darkmode');

darkmode.onclick =()=>{
	if(darkmode.classList.contains('bx-moon')){
		darkmode.classList.replace('bx-moon','bx-sun');
		document.body.classList.add('active');
	}
	else{
		darkmode.classList.replace('bx-sun','bx-moon');
		document.body.classList.remove('active');
	}
	
}

//scroll REveal
const sr =ScrollReveal({
	origin:'top',
	distance: '40px',
	duration: 200,
	reset: true
})

sr.reveal('.home-text, .home-img, .about-text, .about-img, .box, .s-box, .connect-text, .btn, .contact-box',{interval:200})

let previewContainer =document.querySelector('.prod-review');
let previewBox=previewContainer.querySelectorAll('.preview');
document.querySelectorAll('.menu-container .box').forEach(box=>{
	box.onclick = ()=>{
		previewContainer.style.display='flex';
		let name = box.getAttribute('data-name');
		previewBox.forEach(preview =>{
			let target = preview.getAttribute('data-target');
			if(name==target){
				preview.classList.add('active');
			}
		});
	};
});