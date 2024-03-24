$(document).ready(function () {
    $.getJSON('../../json/bmw.json', function (data) {
        let slider = $('.slider');
        $.each(data, function (index, car) {
            let slide = '<div class="slide">';
            slide += '<h2>' + car.name + '</h2>';
            slide += '<p><strong>Manufacture Dates:</strong> ' + car.manufacture_begin + ' - ' + car.manufacture_end + '</p>';
            slide += '<p><strong>Characteristics:</strong> ' + car.characteristics + '</p>';
            slide += '<p><strong>Explanation:</strong> ' + car.explanation + '</p>';
            slide += '<img src="' + car.image + '" alt="' + car.name + '">';
            slide += '</div>';
            slider.append(slide);
        });

        let slideCount = $('.slide').length;
        let slideWidth = $('.slider-container').width() / 3; // Adjusting slide width for three slides
        let currentIndex = 0;
        let interval = setInterval(nextSlide, 5000); // Automatically change slides every 5 seconds

        $('.slider').css('width', slideCount * slideWidth);

        function slide() {
            $('.slider').css('transform', 'translateX(-' + currentIndex * slideWidth + 'px)');
        }

        function nextSlide() {
            if (currentIndex < slideCount - 3) { // Adjusted for three slides
                currentIndex++;
                slide();
            } else {
                currentIndex = 0;
                slide();
            }
        }

        function prevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
                slide();
            } else {
                currentIndex = slideCount - 3; // Adjusted for three slides
                slide();
            }
        }

        $('.next').click(nextSlide);

        $('.prev').click(prevSlide);
    });
});