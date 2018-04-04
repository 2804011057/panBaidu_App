/**
 * Created by czf on 2017/4/2.
 */
(function($){
	$.Views = function(){
        var _this = this
        this.init = function(){
            var user =  $.cookie("name");
            $(".pager button[date-ug='true']").after("<button type='button' class='btn btn-default'>"+user+"</button>")
            _this.returnBack();
            _this.cookie()
           _this.hove()
        }
        this.returnBack = function(){
            $("#return").on("click",function(){
                $.cookie("name", null, { path: '/' });
                window.location.href="/"
            })
        }
        this.cookie = function(){
            if( !$.cookie("name")){
                window.location.href="/"
            }
        }
        this.hove = function(){


           /* $(".list-group-item").on("mouseenter",function(){
                $(this).css({position:"relative"});
                $(this).find("p").show()
            }).on('mouseout',function(){
                $(this).find("p").hide()
            })*/
            $(".list-group-item").hover(function(){

                $(this).addClass("on").siblings().removeClass("on")
            })
        }
	}

   

})($);
unic._views_  = new $.Views()
unic._views_.init()


