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
         $(".top-selling-row").hide();
         $(".top-selling-row:first-child").fadeIn();
        $(".bread").click(function (e) { 
                e.preventDefault();
                $(".bread").removeClass("active");
                $(this).addClass("active");
                //show
               let id_tab = $(this).attr("href");
                $(".top-selling-row").hide();
               $(id_tab).fadeIn();
               return false;
        });
        
});