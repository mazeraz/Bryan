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
