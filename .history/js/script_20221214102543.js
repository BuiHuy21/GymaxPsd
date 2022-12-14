$(document).ready(function () {
        $(".menu-icon").click(function (e) { 
                e.preventDefault();
               $(".navbar").addClass("active");
               $(".wrapper").addClass("cover");
        });
        $(".close").click(function (e) { 
                e.preventDefault();
               $(".navbar").removeClass("active");
        });
});