document.addEventListener('DOMContentLoaded', function() {
    const msgIcons = document.querySelector('.msg-container .msg-icons');
    const icon1 = document.querySelector('.msg-icon-1');
    const icon2 = document.querySelector('.msg-icon-2');
    const whatsapp = document.querySelector('.whatsapp');
    const sms = document.querySelector('.sms');

    let isRightAnimation = false;

    msgIcons.addEventListener('click', function() {
        if (!isRightAnimation) {
            // Remove any existing animation classes
            whatsapp.classList.remove('animate-3');
            sms.classList.remove('animate-3');

            // Add animation classes
            whatsapp.classList.add('animate-4');
            sms.classList.add('animate-4');
            
            // Display icon-2 and hide icon-1
            icon1.style.display = 'none';
            icon2.style.display = 'block';
            
        } else {
            // Remove any existing animation classes
            whatsapp.classList.remove('animate-4');
            sms.classList.remove('animate-4');

            // Add animation classes
            whatsapp.classList.add('animate-3');
            sms.classList.add('animate-3');
            
            // Display icon-1 and hide icon-2
            icon1.style.display = 'block';
            icon2.style.display = 'none';
        }
        isRightAnimation = !isRightAnimation; // Toggle the state
    });
});
