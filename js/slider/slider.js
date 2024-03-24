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
        let slideWidth = $('.slider-container').width();
        let currentIndex = 0;

        $('.slider').css('width', slideCount * slideWidth);

        function slide() {
            $('.slider').css('transform', 'translateX(-' + currentIndex * slideWidth + 'px)');
        }

        $('.next').click(function () {
            if (currentIndex < slideCount - 1) {
                currentIndex++;
                slide();
            }
        });

        $('.prev').click(function () {
            if (currentIndex > 0) {
                currentIndex--;
                slide();
            }
        });
    });
});