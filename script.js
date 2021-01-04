function resize(){
    var device = $(window).height(),
        height= $("#nav").height() + $("#interface").height();

    if(height < device){
        $("#container").height("100vh");
        $("#interface").height("100vh");
        document.getElementById("interface").style.marginBottom = "10px";
    }else{
        $("#container").height("unset");
        $("#interface").height("unset");
        document.getElementById("interface").style.marginBottom = "100px";
    }
}
resize();
$(window).on('resize', function(){
    resize();
});
$(document).ready(function(){
    $('.center').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});

function scrollDown(ElementId){
        document.getElementById(ElementId).scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }
    
    const scrollToTopButton = document.getElementById('js-top');
    const scrollFunc = () => {
    let y = window.scrollY;
    if (y > 0) {
        scrollToTopButton.className = "top-link show";
    } else {
        scrollToTopButton.className = "top-link hide";
    }
    };
    window.addEventListener("scroll", scrollFunc);
    const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, 0);
    }
    };
    scrollToTopButton.onclick = function(e) {
    e.preventDefault();
    scrollToTop();
    }