$(document).ready(function () {
        $(".menu-icon").click(function (e) { 
                e.preventDefault();
               $(".navbar").addClass("active");
               $(".cover").addClass("active");
        });
        $(".close").click(function (e) { 
                e.preventDefault();
               $(".navbar").removeClass("active");
               $(".cover").removeClass("active");
        });
        $(".cover").click(function (e) { 
                e.preventDefault();
                $(".navbar").removeClass("active");
                $(".cover").removeClass("active");
        });


        lci
});