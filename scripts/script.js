// Declare variables/const
const shareBtn = document.getElementById('share-btn');
const userInfoElement = document.getElementById('user-info');
const overlayElement = document.getElementById('overlay');

// When the button is clicked

shareBtn.addEventListener('click', () => {
    console.log('you clicked!');
    console.log(userInfoElement);

    overlayElement.style.display  = 'flex';
    // Mobile screens
    if (window.innerWidth < 900) {
        userInfoElement.style.display = 'none';
    
    // Desktop screens    
    } else {
        // Change the display of user-info to none
        overlayElement.children[2].style.display = 'none';
        shareBtn.children[0].setAttribute('src', './../images/icon-share-inverted.svg');
        shareBtn.style.backgroundColor = 'var(--vd-grayblue)';
    }
    
});