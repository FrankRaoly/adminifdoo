$(document).ready(function(){
	$(".sidebar-menu a").each(function(){  
		$this = $(this);  
		if($this[0].href==String(window.location)){ 
			$(this).parent("li").addClass("active");
			//$(this).parent("li").parent("ul").parent("li").addClass("active");
			$(this).parent("li").parent("ul.treeview-menu").parent("li.treeview").addClass("active");
		}  
	});
});