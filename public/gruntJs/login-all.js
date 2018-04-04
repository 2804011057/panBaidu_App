
//开始使用node.js
(function($) {
	$.Login = function() {
		var _this = this
		this.num = 0;
		this.time = "";
		this.imgTurn = function() {
			this.time = setInterval(function() {
				this.num++;
				if (this.num > 3) {
					this.num = 0
				}
				$(".focus-anchor span").eq(this.num).addClass("hidefocus")
						.siblings().removeClass();
				$("li.index-body-content").eq(this.num).show().siblings()
						.hide();

			}, 3000)
		}
		this.init = function() {

			$(".focus-anchor span").hover(function() {
				var index = $(this).index();
				$(this).addClass("hidefocus").siblings().removeClass();
				$("li.index-body-content").eq(index).show().siblings().hide();
			})

			$("li.index-body-content").mouseover(function() {

				clearInterval(this.time)
			}).mouseout(function() {
				_this.imgTurn()
			})
            _this.login()
		}

		this.login = function(){
			$("#submit").on("click",function(){
				var uVal = $(".userName").val();
				var pVal = $(".passWord").val();
				$.ajax({
					url:"/api/user/signup",
					data:{user:uVal,password:pVal},
                    type:"POST"
				}).done(function(data){
                    $.cookie("name", uVal, {path: "/", expiress: 7})
                    if(data){
                        if(data=="views"){
                            window.location.href="views"
                        }else{
                            $(".passWord").after("<p class='warmMessage'>用户名或密码错误</p>")
                        }
                    }

					
				})
                _this.cookie()
			})
		}

        this.cookie = function(){
            if( $.cookie("name")!="null"){
               window.location.href="views"
            }
        }
	}
})($)

unic.Login = new $.Login();
unic.Login.init();
