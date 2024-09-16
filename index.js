const showDiv1Button = document.getElementById('showDiv1Button');
const showDiv2Button = document.getElementById('showDiv2Button');

showDiv1Button.addEventListener('click', function() {
    document.getElementById('div1').classList.remove('hidden');
    document.getElementById('div2').classList.add('hidden');
    
    // Add selected class to showDiv1Button and remove it from showDiv2Button
    showDiv1Button.classList.add('selected');
    showDiv2Button.classList.remove('selected');
});

showDiv2Button.addEventListener('click', function() {
    document.getElementById('div1').classList.add('hidden');
    document.getElementById('div2').classList.remove('hidden');
    
    // Add selected class to showDiv2Button and remove it from showDiv1Button
    showDiv2Button.classList.add('selected');
    showDiv1Button.classList.remove('selected');
});

 // change the color of anchor tags based on the currently visible section while scrolling
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    function changeLinkState() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    changeLinkState();
    window.addEventListener('scroll', changeLinkState);
});


 // tools change color anchor tags at #tools
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    function changeLinkColor() {
        let tools_sectionVisible = false;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (isVisible && section.id === 'tools_section') {
                tools_sectionVisible = true;
            }
        });

        navLinks.forEach((link) => {
            if (tools_sectionVisible) {
                link.classList.add('tools_section-visible');
                link.classList.remove('section-visible');
            } else {
                link.classList.remove('tools_section-visible');
                link.classList.add('section-visible');
            }
        });
    }

    changeLinkColor();
    window.addEventListener('scroll', changeLinkColor);
});


let lastScrollTop = 0;
const fixedDiv = document.getElementById('fixedDiv');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Check if we are scrolling down
    if (scrollTop > lastScrollTop) {
        // Add the slide-up class to hide the div
        fixedDiv.classList.add('slide-up-flogo');
    } else {
        // Remove the class to bring the div back down
        fixedDiv.classList.remove('slide-up-flogo');
    }
    lastScrollTop = scrollTop;
});




// Pop-up email 

   // Get elements
   const popupBox = document.getElementById('popupBox');
        const overlay = document.getElementById('overlay');
        const openPopup = document.getElementById('openPopup');
        const closePopup = document.getElementById('closePopup');
        const emailForm = document.getElementById('emailForm');
        const confirmationBox = document.getElementById('confirmationBox');
        const closeConfirmation = document.getElementById('closeConfirmation');

        // Open popup
        openPopup.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            popupBox.style.display = 'block';
            overlay.style.display = 'block';
        });

        // Close popup
        closePopup.addEventListener('click', function () {
            popupBox.style.display = 'none';
            overlay.style.display = 'none';
        });

        // Close popup when clicking outside the box
        overlay.addEventListener('click', function () {
            popupBox.style.display = 'none';
            overlay.style.display = 'none';
        });

        // Form submit
        emailForm.addEventListener('submit', function (event) {
            event.preventDefault();
            
            const title = document.getElementById('emailTitle').value;
            const description = document.getElementById('emailDescription').value;

            // Create mailto link with the form data
            const mailtoLink = `mailto:bryanjayco100@gmail.com?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description)}`;

            // Open email client with the mailto link
            window.location.href = mailtoLink;

            // Close the form pop-up
            popupBox.style.display = 'none';
            overlay.style.display = 'none';

            // Show confirmation message
            confirmationBox.style.display = 'block';
        });

        // Close confirmation box
        closeConfirmation.addEventListener('click', function () {
            confirmationBox.style.display = 'none';
            overlay.style.display = 'none';
        });
