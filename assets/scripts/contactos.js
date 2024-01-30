var toggleButtons = document.querySelectorAll('.toggleButton');

toggleButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var infoContainer = this.nextElementSibling;

        if (infoContainer.style.display === 'none') {
            infoContainer.style.display = 'block';
        } else {
            infoContainer.style.display = 'none';
        }
    });
});
