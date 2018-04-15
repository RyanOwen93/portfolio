/*---------------------- Menu Overlay -------------------*/

$(document).ready(function () {
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });

    /*---------------------- Homepage Header ---------------*/

    // Wrap every letter in a span
    $('.ml12').each(function () {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    anime.timeline({
            loop: true
        })
        .add({
            targets: '.ml12 .letter',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: function (el, i) {
                return 500 + 30 * i;
            }
        }).add({
            targets: '.ml12 .letter',
            translateX: [0, -30],
            opacity: [1, 0],
            easing: "easeInExpo",
            duration: 5100,
            delay: function (el, i) {
                return 100 + 30 * i;
            }
        });

    $('.ml13').each(function () {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    anime.timeline({
            loop: true
        })
        .add({
            targets: '.ml13 .letter',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1500,
            delay: function (el, i) {
                return 500 + 30 * i;
            }
        }).add({
            targets: '.ml13 .letter',
            translateX: [0, -30],
            opacity: [1, 0],
            easing: "easeInExpo",
            duration: 5100,
            delay: function (el, i) {
                return 100 + 30 * i;
            }
        });

    /*---------------------- Bio FadeIn -------------------*/

    $(function () {
        $('body').removeClass('fade-out');
    });

    $('.menu span:last-child').click(function () {
        $('.menu span').not(':last-child').toggleClass('hidden show');
    })

});

/*----------------- Skate Website Modal ------------------*/

// Get the modal
var modal = document.getElementById('skateModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('skateWebsite');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("skatecaption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("skateclose")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

/*----------------- sass Website Modal ------------------*/

// Get the modal
var modal = document.getElementById('sassModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('sassWebsite');
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("sasscaption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("sassclose")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

