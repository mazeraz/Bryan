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
        let section3Visible = false;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (isVisible && section.id === 'section3') {
                section3Visible = true;
            }
        });

        navLinks.forEach((link) => {
            if (section3Visible) {
                link.classList.add('section3-visible');
                link.classList.remove('section-visible');
            } else {
                link.classList.remove('section3-visible');
                link.classList.add('section-visible');
            }
        });
    }

    changeLinkColor();
    window.addEventListener('scroll', changeLinkColor);
});
