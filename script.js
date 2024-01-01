document.addEventListener('DOMContentLoaded', function() {
    var filterButtons = document.querySelectorAll('.filter-button');
    var galleryImages = document.querySelectorAll('.gallery-image');

    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var category = this.dataset.filter;

            galleryImages.forEach(function(image) {
                if (category === 'all' || image.classList.contains(category)) {
                    image.style.display = "block";
                } else {
                    image.style.display = "none";
                }
            });
        });
    });
});
