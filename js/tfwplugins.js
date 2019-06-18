
var tfwplugins;
var initstatus = false;
var initfeedbackstatus = false;
tfwplugins = {
	showtfwalert : function (imgsrc, text, yesfunc){
		if(!initstatus)
		{
			initalert(imgsrc);
			initstatus = !initstatus;
		}
		$(".alert-left-img").find("img").prop("src", imgsrc);
		$(".alert-right-text").html(text);
		if (typeof yesfunc === "function"){
            $(".alert-yes").on("click", yesfunc);
        }
		$(".alerttyp1").css("display", "block");
		centerModals();
	},
	hidetfwalert:function (){
		$(".alert-bg").css("display", "none");
		$(".alert-box").css("display", "none");
	},
	showtfwfeedback: function (imgsrc, title, btnfunc){
		if(!initfeedbackstatus)
		{
			initfeedback(imgsrc);
			initfeedbackstatus = !initfeedbackstatus;
		}
		$(".feedbacktitle").html(title);
		if (typeof btnfunc === "function"){
            $(".feedbackbtn").on("click", btnfunc);
        }
		$(".alerttyp2").css("display", "block");
		centerModals();
	}
}

/*初始化alert*/
function initalert(imgsrc){
	var contentpath = imgsrc;
	if(imgsrc.lastIndexOf("/") != -1)
	{
		contentpath = imgsrc.substr(0, imgsrc.lastIndexOf("/"));
	}else{
		contentpath = imgsrc.substr(0, imgsrc.lastIndexOf("\\"));
	}
	var alertHtml = '<div class="alert-bg dishide alerttyp1" style="display:none;"></div>' 
				+ '<div class="alert-box dishide alerttyp1" style="display:none;">'
				+ '	<div class="alert-content">'
				+ '		<div class="alert-left fl">'
				+ '			<div class="alert-left-img">'
				+ '				<img src="' + contentpath + '/tfwxiaoren1.png"/>'
				+ '			</div>'
				+ '		</div>'
				+ '		<div class="alert-right fr">'
				+ '			<div class="alert-right-sys">'
				+ '					<a href="javascript:tfwplugins.hidetfwalert();"><img src="' + contentpath + '/tfwcha.png" /></a>'
				+ '			</div>'
				+ '			<div class="alert-right-text">'
				+ '			</div>'
				+ '			<div class="alert-right-btn">'
				+ '					<a href="#" class="alert-yes">'
				+ '						<img src="' + contentpath + '/tfwqueding.png" />'
				+ '					</a>'
				+ '					<a href="javascript:tfwplugins.hidetfwalert();" class="alert-no">'
				+ '						<img src="' + contentpath + '/tfwquxiao.png" />'
				+ '					</a>'
				+ '			</div>'
				+ '		</div>'
				+ '	</div>'
				+ '</div>';
	
	$("body").append(alertHtml);
	
	$(".alert-bg").on('click', function(){
		tfwplugins.hidetfwalert();
	});
	$(window).on('resize', centerModals);
}
/*初始化alert*/
function initfeedback(imgsrc){
	var contentpath = imgsrc;
	var feedbackHtml = '<div class="alert-bg dishide alerttyp2" style="display:none;"></div>'+
					'<div class="alert-box dishide alerttyp2" style="display:none;">'+
					'	<div class="alert-content1">'+
					'		<a href="javascript:tfwplugins.hidetfwalert();" class="feedbackcha"><img src="' + imgsrc + '/tfwcha.png"/></a>'+
					'		<h2 class="feedbacktitle">纠错</h2>'+
					'		<div class="feedbackcontent">'+
					'			<textarea id="feedbackValue" style="height: 100%;width:100%;padding:0;margin: 0;" placeholder="请输入内容..." autofocus="autofocus"></textarea>'+
					'		</div>'+
					'		<div class="feedbackfooter">'+
					'				<button class="x-button1 feedbackbtn">发送</button>	'+
					'		</div>'+
					'	</div>'+
					'</div>';

	$("body").append(feedbackHtml);

	$(".alert-bg").on('click', function(){
		tfwplugins.hidetfwalert();
	});
	$(window).on('resize', centerModals);
}

/*  modal 居中 */
function centerModals(){
	$('.alert-box').each(function(i){
		var top = Math.round($(".alert-bg").height() / 4);
		$(".alert-box").css("margin-top", top);
	});
}


$(function(){
	/*select控件*/
	$(".x-select").click(function(){
		$(this).parent().find(".x-selectcontent").stop(true, false).slideToggle(600,
            function() {
            	
            }
        );
	});
	
	$(".x-selectcontent p").click(function(){
		$(".x-selectcontent p").css("display", "block");
		$(this).css("display", "none");
		var selectval = $(this).html();
		var selectid = $(this).attr("value");
		$(this).parent().parent().find(".x-selecttext").html(selectval);
		var hidval = $(this).parent().parent().find("input[type='hidden']").val(selectid);
		$("#selectsubjectid").val(selectid);
		$(this).parent().slideUp(600, function(){});
	});
	$(".x-selectcontent").on('mouseleave' , function(){
			$(this).slideUp(600, function(){});
	});
	
});
