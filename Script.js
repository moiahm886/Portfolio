const currentPage = window.location.pathname;
const navTabs = document.querySelectorAll('.nav-tabs li a');

navTabs.forEach((tab) => {
    if (currentPage.includes(tab.getAttribute('href'))) {
        tab.classList.add('active');
    } else {
        tab.classList.remove('active');
    }
});


const Quality = ["I AM A CODER'", "I LOVE TO DEVELOP'", "I LOVE PROBLEM SOLVING'"];
const typingDelay = 200;
const text = document.getElementById("qualities");
let qualityIndex = 0;
let charIndex = 0;

function typeText() {
    if (qualityIndex < Quality.length) {
        if (charIndex < Quality[qualityIndex].length) {
            text.textContent += Quality[qualityIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingDelay);
        } else {
            setTimeout(eraseText, 1500);
        }
    }
}

function eraseText() {
    if (charIndex > 0) {
        text.textContent = text.textContent.slice(0, -1);
        charIndex--;
        setTimeout(eraseText, typingDelay);
    } else {
        qualityIndex++;
        if (qualityIndex >= Quality.length) {
            qualityIndex = 0;
        }
        setTimeout(typeText, typingDelay);
    }
}

typeText();

const LinkedInButton = document.getElementById("linkedin-button");
LinkedInButton.addEventListener("click",function (){
    window.open("https://www.linkedin.com/in/moiahm886/",'popupWindow');
})

const contactButton = document.getElementById("contact-button");
const dropdown = document.querySelector(".dropdown");

contactButton.addEventListener("click", function() {
    dropdown.classList.toggle("show");
});

const phoneButton = document.getElementById("phone-link");
phoneButton.addEventListener("click",function(){
    const phoneNumber = '+923482241916';

    navigator.clipboard.writeText(phoneNumber)
        .then(() => {
            console.log('Phone number copied to clipboard:', phoneNumber);
            alert('Phone number copied to clipboard!');
        })
        .catch((error) => {
            console.error('Failed to copy phone number:', error);
        });
})
