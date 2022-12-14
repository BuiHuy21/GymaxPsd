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
        $(".bread").click(function (e) { 
                $(".top-selling-row").hide
                e.preventDefault();
                $(".bread").removeClass("active");
                $(this).addClass("active");

                //show
               let id_tab = $(this).attr("href");
               $(id_tab).fadeIn();
               return false;
        //        alert(id_tab)
        });
        
});