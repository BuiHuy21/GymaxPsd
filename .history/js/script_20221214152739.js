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
                $(".container").hide();
                $(".container").hide();
                e.preventDefault();
                $(".bread").removeClass("active");
                $(this).addClass("active");

                //show
               let id_tab = $(this).attr("href");
               $(id_tab).fadeIn();
        //        alert(id_tab);
               return false;
        });
        
});