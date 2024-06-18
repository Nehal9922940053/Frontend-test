/*Scrolling  Client Review */ 
let scrollContainer = document.querySelector('.review-cards');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft +=evt.deltaY;
    scrollContainer.style.scrollBehavior = 'smooth';
});

nextBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft +=300;
});

prevBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -=300;
});


/* Contact Page Validation*/
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Name validation
    if (name === '') {
        isValid = false;
        document.getElementById('nameError').textContent = 'Name is required';
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        isValid = false;
        document.getElementById('emailError').textContent = 'Email is required';
    } else if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Invalid email format';
    }

    // Phone validation
    const phonePattern = /^\d{10}$/;
    if (phone === '') {
        isValid = false;
        document.getElementById('phoneError').textContent = 'Phone number is required';
    } else if (!phonePattern.test(phone)) {
        isValid = false;
        document.getElementById('phoneError').textContent = 'Invalid phone number format';
    }

    // Message validation
    if (message === '') {
        isValid = false;
        document.getElementById('messageError').textContent = 'Message is required';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        
    }
});


/* Responsive navbar menu toggle */


let menus = document.querySelector(".navbar");
let menus_btn = document.querySelector(".menu-btn");
let close_btn = document.querySelector(".close-btn");

menus_btn.addEventListener("click", function () {
  menus.classList.add("active2");
});

close_btn.addEventListener("click", function () {
  menus.classList.remove("active2");
});










/*let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-icon");
let closeBtn = document.querySelector(".close-icon");
let body = document.querySelector("body");

menuBtn.onclick=function() {
    menuBtn.style.opacity="0";
    menuBtn.style.pointerEvents = "none";
    navBar.classList.add("active");
	body.style.overflow="hidden";
} 
closeBtn.onclick=function() {
	menuBtn.style.opacity="1";
	menuBtn.style.pointerEvents="auto";	
	navBar.classList.remove("active");
	body.style.overflow="auto";
} 
//sticky nav
let nav=document.querySelector("nav");
let val;
window.onscroll=function(){
	if (document.documentElement.scrollTop > 20) {
		nav.classList.add("sticky");
	} else{
		nav.classList.remove("sticky");
	}
}
// side nav menu closed when nav links clicked
let navLinks=document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++){
	navLinks[i].addEventListener("click" ,()=>{
		menuBtn.style.opacity="1";
		menuBtn.style.pointerEvents="auto";	
		navBar.classList.remove("active");
		body.style.overflow="auto";
	});
}*/