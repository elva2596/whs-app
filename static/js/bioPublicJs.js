$(function() {
	//主菜单模态框自适应大小控制
	var winWidth = window.innerWidth;
	var winHeight = window.innerHeight;

	var $menuContent = $(".right-tool .menu-content");
	var $rightTool = $(".right-tool");
	var $leftTool = $(".left-tool");
	//webgl主界面全屏显示
	$("#app").width(winWidth).height(winHeight); 
	//左侧和右侧的工具栏高度为100%
	$leftTool.height(winHeight); 
	$rightTool.height(winHeight);
	//展示实验列表外层div显示
	$(".main-area").width(winWidth * 0.96).height(winHeight * 0.96).css({
		'left': winWidth * 0.02,
		'top': winHeight * 0.02
	});
	//展示实验列表内容div显示
	$(".main-area .area-ctx").width(winWidth * 0.96 - 70).height(winHeight * 0.96 - 40);
	//右上角的按钮
	$(".tool-bar").css({
		'right': winWidth * 0.02,
		'top': winHeight * 0.02
	});
	//tip弹框
	$(".tip").css({
		'width': 0.7 * winWidth,
		'left': 0.15 * winWidth,
		'top': 0.08 * winHeight
	});
	//根据设备大小以及横竖屏情况，定义右侧菜单栏间隔和大小
	if(winWidth > winHeight && winHeight < 414) {
		$rightTool.find(".menu ").css("marginTop","-160px")
			.find("li").css({
				'height': 40,
				'lineHeight': 40,
				'marginTop': 5,
				'marginBottom': 5,
			})
			.find("div").css("lineHeight", "40px");
	} else {
		$rightTool.find(".menu ").css("marginTop","-208px")
			.find("li").css({
				'height': 48,
				'lineHeight': 48,
				'marginTop': 10,
				'marginBottom': 10,
			})
			.find("div").css("lineHeight", "40px");
	}

	$(window).resize(function() {
		winWidth = window.innerWidth;
		winHeight = window.innerHeight;

		//在屏幕大小发生改变时，重新定义一部分标签的位置属性
		$("#app").width(winWidth).height(winHeight);
		$leftTool.height(winHeight);
		$rightTool.height(winHeight);
		$(".main-area").width(winWidth * 0.96).height(winHeight * 0.96).css({
			'left': winWidth * 0.02,
			'top': winHeight * 0.02
		});
		$(".main-area .area-ctx").width(winWidth * 0.96 - 70).height(winHeight * 0.96 - 40);;
		$(".tool-bar").css({
			'right': winWidth * 0.02,
			'top': winHeight * 0.02
		});
		$(".tip").css({
			'width': 0.7 * winWidth,
			'left': 0.15 * winWidth,
			'top': 0.08 * winHeight
		});
		if(winWidth > winHeight && winHeight < 414) {
			$rightTool.find(".menu ").css("marginTop","-160px")
				.find("li").css({
					'height': 40,
					'lineHeight': 40,
					'marginTop': 5,
					'marginBottom': 5,
				})
				.find("div").css("lineHeight", "40px");
		} else {
			$rightTool.find(".menu ").css("marginTop","-208px")
				.find("li").css({
					'height': 48,
					'lineHeight': 48,
					'marginTop': 10,
					'marginBottom': 10,
				})
				.find("div").css("lineHeight", "40px");
		}
		
		//做实验界面，右侧工具栏多终端响应式调整显示
		if($rightTool.hasClass("detail")) {
			var areaWidth;
			if(winWidth >= 1024) {
				areaWidth = 500;
			} 
			if(winWidth < 450) {
				areaWidth = winWidth -  90
			}
			if(winWidth >= 450 && winWidth < 1024) {
				areaWidth = 350;
			}
			$rightTool.width(areaWidth);
			if(!$rightTool.hasClass("open")) {
				$rightTool.css("right", - areaWidth);
			}
		} else {
			$rightTool.width(200);
			if(!$rightTool.hasClass("open")) {
				$rightTool.css("right", - 200);
			}

		}	
		if($rightTool.hasClass("open")) {
			$rightTool.css("right","0");
		} 
	});

	//点击右上角工具栏的菜单按钮，对应的操作
	$(document).on("click",".tool-bar .menu-btn", function() {
		if($(this).hasClass("close")) {
			$(this).removeClass("close");
			$(".main-area").removeClass("open");
		} else {
			$(this).addClass("close");
			$(".main-area").addClass("open");
		}
	});

	//做实验界面，点击弹出按钮对应的操作
	/*
	
	 $rightTool.find(".toggle-btn").click(function() {
		if($rightTool.hasClass("open")) {
			$rightTool.removeClass("open");
			var rightToolWidth = $rightTool.width();
			$rightTool.css("right", - rightToolWidth);
			// controls.enabled = true;
		} else {
			console.log("ceshi");
			$rightTool.addClass("open");
			$rightTool.css("right","0");
		}
	});
*/
	//做实验界面右侧工具栏展开后，点击里面的菜单对应的操作
	$rightTool.find(".menu .item").click(function() {
		var operation = $(this).attr("operation");
		if(operation) {
			// controls.enabled = false;
		}
		$menuContent.find(".content-area").each(function() {
			if($(this).attr("content") == operation) {
				$(this).parent("li").css({
					visibility:"visible",
					opacity: 1
				});
			} else {
				$(this).parent("li").css({
					visibility:"hidden",
					opacity: 0
				});
			}
		});
		if(!$rightTool.hasClass("detail")) {
			$rightTool.addClass("detail");
			if(winWidth > 1023) {
				$rightTool.width(500);
			} else if(winWidth < 450) {
				$rightTool.width(winWidth -  90);
			} else {
				$rightTool.width(350);
			}
			$rightTool.find(".close-detail").css("visibility","visible");
		}
	})

	$rightTool.find(".menu .end").click(function() {
		layer.confirm('您确定要退出实验吗？', {
		    btn: ['确定','取消'] ,
		    title: '退出提示',
		    move: false
		}, function(){
		    window.location.href="./biology-index.html";
		}, function(index){
		    layer.close(index);
		});
	});

	$rightTool.find(".menu .reset").click(function() {
		layer.confirm('您确定要重置实验吗？', {
		    btn: ['确定','取消'] ,
		    title: '重置提示',
		    move: false
		}, function(){
		    window.location.reload(); 
		}, function(index){
		    layer.close(index);
		});
	});

	//做实验界面右侧工具栏中，显示某菜单对应详情信息后，点击右上角关闭按钮对应的操作
	$rightTool.find(".close-detail").click(function() {
		$rightTool.removeClass("detail");
		$rightTool.width(200);
		$(this).css("visibility","hidden");
		$menuContent.find(".content-area").each(function() {
			$(this).parent("li").css({
				visibility:"hidden",
				opacity: 0
			});
		});
		// controls.enabled = true;
	});

	$rightTool.find(".content-area .sentence .show-a").click(function() {
		if($(this).hasClass("selected")) {
			$(this).removeClass("selected");
			$(this).parent(".q").siblings(".a").hide();
		} else {
			$(this).addClass("selected");
			$(this).parent(".q").siblings(".a").show();
		}
	});


	
})