$(document).ready(function() {
	$("#modalbtn_1").click(function() {
		$("#modal_1").modal({
			keyboard: 'false', //true是默认可是使用esc退出弹窗，false是不能使用esc退出 foot
			show: 'true', // bool值，立即调用show
			backdrop: 'static' //static是只在弹窗内点击关闭按钮可以关闭
		});
	});

	$("#modalbtn_2").click(function() {
		$("#modal_2").modal({
			keyboard: 'false', //true是默认可是使用esc退出弹窗，false是不能使用esc退出 foot
			show: 'true', // bool值，立即调用show
			backdrop: 'static' //static是只在弹窗内点击关闭按钮可以关闭
		});
	});

	$("#modalbtn_3").click(function() {
		$("#modal_3").modal({
			keyboard: 'false', //true是默认可是使用esc退出弹窗，false是不能使用esc退出 foot
			show: 'true', // bool值，立即调用show
			backdrop: 'static' //static是只在弹窗内点击关闭按钮可以关闭
		});
	});
	$("#modalbtn_4").click(function() {
		$("#modal_4").modal({
			keyboard: 'false', //true是默认可是使用esc退出弹窗，false是不能使用esc退出 foot
			show: 'true', // bool值，立即调用show
			backdrop: 'static' //static是只在弹窗内点击关闭按钮可以关闭
		});
	});
	$("#modalbtn_5").click(function() {
		$("#modal_5").modal({
			keyboard: 'false', //true是默认可是使用esc退出弹窗，false是不能使用esc退出 foot
			show: 'true', // bool值，立即调用show
			backdrop: 'static' //static是只在弹窗内点击关闭按钮可以关闭
		});
	});
	$("#modalbtn_6").click(function() {
		$("#modal_6").modal({
			keyboard: 'false', //true是默认可是使用esc退出弹窗，false是不能使用esc退出 foot
			show: 'true', // bool值，立即调用show
			backdrop: 'static' //static是只在弹窗内点击关闭按钮可以关闭
		});
	});

	$("#modalbtn_7").click(function() {
		$("#modal_7").modal({
			keyboard: 'false', //true是默认可是使用esc退出弹窗，false是不能使用esc退出 foot
			show: 'true', // bool值，立即调用show
			backdrop: 'static' //static是只在弹窗内点击关闭按钮可以关闭
		});

	});

	$("#modalbtn_8").click(function() {
		$("#modal_8").modal({
			keyboard: 'false', //true是默认可是使用esc退出弹窗，false是不能使用esc退出 foot
			show: 'true', // bool值，立即调用show
			backdrop: 'static' //static是只在弹窗内点击关闭按钮可以关闭
		});

	});


	$("#modalbtn_10").click(function() {
		$("#modal_10").modal({
			keyboard: 'false', //true是默认可是使用esc退出弹窗，false是不能使用esc退出 foot
			show: 'true', // bool值，立即调用show
			backdrop: 'static' //static是只在弹窗内点击关闭按钮可以关闭
		});

	});

	$("#modalbtn_11").click(function() {
		$("#modal_11").modal({
			keyboard: 'false', //true是默认可是使用esc退出弹窗，false是不能使用esc退出 foot
			show: 'true', // bool值，立即调用show
			backdrop: 'static' //static是只在弹窗内点击关闭按钮可以关闭
		});

	});

	$("#modalbtn_12").click(function() {
		$("#modal_12").modal({
			keyboard: 'false', //true是默认可是使用esc退出弹窗，false是不能使用esc退出 foot
			show: 'true', // bool值，立即调用show
			backdrop: 'static' //static是只在弹窗内点击关闭按钮可以关闭
		});

	});

	$("#modalbtn_13").click(function() {
		$("#modal_13").modal({
			keyboard: 'false', //true是默认可是使用esc退出弹窗，false是不能使用esc退出 foot
			show: 'true', // bool值，立即调用show
			backdrop: 'static' //static是只在弹窗内点击关闭按钮可以关闭
		});

	});



	


//bootbox实例
	$("#bootbox-regular").click(function() {
		bootbox.prompt("What is your name?", function(result) {
			if (result === null) {
				//Example.show("Prompt dismissed");
			} else {
				//Example.show("Hi <b>"+result+"</b>");
			}
		});
	});

	$("#bootbox-confirm").click(function() {
		bootbox.confirm({
			buttons: {
				confirm: {
					label: '我是确认按钮',
					className: 'btn-myStyle'
				},
				cancel: {
					label: '我是取消按钮',
					className: 'btn-default'
				}
			},
			message: '提示信息Are you sure?',
			callback: function(result) {
				if (result) {
					alert('点击确认按钮了');
				} else {
					alert('点击取消按钮了');
				}
			},
			title: "bootbox confirm也可以添加标题哦",
		});
	});

	$("#bootbox-options").click(function() {
		bootbox.dialog({
			message: "<span class='bigger-110'>I am a custom dialog with smaller buttons</span>",
			title: "Dialog title",
			buttons: {
				"success": {
					"label": "<i class='icon-ok'></i> Success!",
					"className": "btn-sm btn-success",
					"callback": function() {
						//Example.show("great success");
					}
				},
				"danger": {
					"label": "Danger!",
					"className": "btn-sm btn-danger",
					"callback": function() {
						//Example.show("uh oh, look out!");
					}
				},
				"click": {
					"label": "Click ME!", 
					"className": "btn-sm btn-primary",
					"callback": function() {
						//Example.show("Primary button");
					}
				},
				"button": {
					"label": "自定义按钮文字...", //自定义按钮文字
					"className": "btn-sm"
				}
			}

		});
	});

	$("#bootbox-alert").click(function() {
		bootbox.alert({
			buttons: {
				ok: {
					label: '我是ok按钮',
					className: 'btn-myStyle'
				}
			},
			message: '提示信息',
			callback: function() {
				alert('关闭了alert');
			},
			title: "bootbox alert也可以添加标题哦",
			className:"customModal YourModal" //你的modal类名
		});
	});




	//解决bootStrap modal无法滚动处理
	$('.modal').on('shown.bs.modal', function() {
		$(this).resize();
	})


	//Bootstrap modal垂直居中
	$('.YourModal').on('show.bs.modal', function(e) {
		$(this).find('.modal-dialog').css({
			'margin-top': function() {
				var modalHeight = $('.yourModal').find('.modal-dialog').height();
				return ($(window).height() / 3 - (modalHeight / 2));
			}
		});
	});




});



//解决双层遮罩

$(document).on('show.bs.modal', '.modal', function(event) {
	$(this).appendTo($('body'));
}).on('shown.bs.modal', '.modal.in', function(event) {
	setModalsAndBackdropsOrder();
}).on('hidden.bs.modal', '.modal', function(event) {
	setModalsAndBackdropsOrder();
});

function setModalsAndBackdropsOrder() {
	var modalZIndex = 1040;
	$('.modal.in').each(function(index) {
		var $modal = $(this);
		modalZIndex++;
		$modal.css('zIndex', modalZIndex);
		$modal.next('.modal-backdrop.in').addClass('hidden').css('zIndex', modalZIndex - 1);
	});
	$('.modal.in:visible:last').focus().next('.modal-backdrop.in').removeClass('hidden');
}










	
       