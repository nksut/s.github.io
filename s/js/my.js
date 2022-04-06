// JavaScript Document
$(function(){
     $(".top").click(function(){
		$("body,html").animate({scrollTop:(0)},1000);
	});
    $(".top1").click(function(){
		$("body,html").animate({scrollTop:$("#top1").offset().top},1000);
	});
    $(".top2").click(function(){
		$("body,html").animate({scrollTop:$("#top2").offset().top},1000);
	});
    $(".top3").click(function(){
		$("body,html").animate({scrollTop:$("#top3").offset().top},1000);
	});
    $(".top4").click(function(){
		$("body,html").animate({scrollTop:$("#top4").offset().top},1000);
	});
});





$(function(){
   $(".call").click(function(){
       $(".all").fadeIn();
   }) ;
    
    $(".call1").click(function(){
        $(".all").hide();
       $(".all1").fadeIn(); 
    });
     $(".call2").click(function(){
        $(".all").hide();
       $(".all2").fadeIn(); 
    });
     $(".call3").click(function(){
        $(".all").hide();
       $(".all3").fadeIn(); 
    });
});

$(function(){
   $(".bbox1").hide();
    
    $(".ox1").mouseenter(function(){
       $(".bbox1").slideDown(); 
    });
    $(".ox1").mouseleave(function(){
       $(".bbox1").slideUp(); 
    });
});
$(function(){
   $(".bbox2").hide();
    
    $(".ox2").mouseenter(function(){
       $(".bbox2").slideDown(); 
    });
    $(".ox2").mouseleave(function(){
       $(".bbox2").slideUp(); 
    });
});
$(function(){
   $(".bbox3").hide();
    
    $(".ox3").mouseenter(function(){
       $(".bbox3").slideDown(); 
    });
    $(".ox3").mouseleave(function(){
       $(".bbox3").slideUp(); 
    });
});
$(function(){
   $(".bbox4").hide();
    
    $(".ox4").mouseenter(function(){
       $(".bbox4").slideDown(); 
    });
    $(".ox4").mouseleave(function(){
       $(".bbox4").slideUp(); 
    });
});
$(function(){
   $(".bbox5").hide();
    
    $(".ox5").mouseenter(function(){
       $(".bbox5").slideDown(); 
    });
    $(".ox5").mouseleave(function(){
       $(".bbox5").slideUp(); 
    });
});
$(function(){
   $(".bbox6").hide();
    
    $(".ox6").mouseenter(function(){
       $(".bbox6").slideDown(); 
    });
    $(".ox6").mouseleave(function(){
       $(".bbox6").slideUp(); 
    });
});
$(function(){
   $(".bbox7").hide();
    
    $(".ox7").mouseenter(function(){
       $(".bbox7").slideDown(); 
    });
    $(".ox7").mouseleave(function(){
       $(".bbox7").slideUp(); 
    });
});
$(function(){
   $(".bbox8").hide();
    
    $(".ox8").mouseenter(function(){
       $(".bbox8").slideDown(); 
    });
    $(".ox8").mouseleave(function(){
       $(".bbox8").slideUp(); 
    });
});
$(function(){
   $(".cuu").click(function(){
       alert(" 您已領取此優惠劵囉，希望您能與我們一起將農業發展起來。\n優惠代碼：TAIWAN-666");
   });
});
$(function(){
   $(".buy").click(function(){
       alert(" 感謝您的購買，希望您能與我們一起將農業發展起來。");
   });
});

$(function(){
   $(".a0924").delay(3400).fadeOut(); 
});

$(function(){
   $(window).scroll(function(){
       if($(window).scrollTop()>1){
           $(".nnav").css("background-color","rgba(146,203,139,0.7)");
       }
       else{
            $(".nnav").css("background-color","rgba(146,203,139,1)");
       }
   }) ;
});

$(function(){
    $(window).scroll(function(){
       if($(window).scrollTop()>$("#top3").offset().top){
           $(".goo").css("transform","translateX(10px)");
       }
   
    });
    
    $(".go").click(function(){
       $("body,html").animate({scrollTop:$("#top4").offset().top},1000) ;
    });
    
    $(".goel").click(function(){
       $(".goo").fadeOut(500); 
    });
});