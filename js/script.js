function validateForm() {
    let name = document.forms["inquiryForm"]["name"].value;
    let email = document.forms["inquiryForm"]["email"].value;
    let message = document.forms["inquiryForm"]["message"].value;
    
    if (name == "" || email == "" || message == "") {
    alert("Please fill out all fields.");
    return false;
    }
}

const images = document.querySelectorAll('.banner-image');
let currentIndex = 0;

function slideBanner() {
    const nextIndex = (currentIndex + 1) % images.length;

    images[nextIndex].classList.remove('next');
    images[nextIndex].classList.add('active');

    images[currentIndex].classList.add('slide-out');

    currentIndex = nextIndex;

    setTimeout(() => {
        images.forEach((img, index) => {
            img.classList.remove('slide-out');
            if (index !== currentIndex) {
                img.classList.remove('active');
                img.classList.add('next');
            }
        });
    }, 1000); 
}

images.forEach((img, index) => {
    if (index !== currentIndex) {
        img.classList.add('next');
    } else {
        img.classList.add('active');
    }
});

setInterval(slideBanner, 3000);

