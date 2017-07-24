/*ЖИ-КВЕРИ*/
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip(); 
	
	$("#menu-toggle").click(function(e) {
	    e.preventDefault();
	    $(".to-hide").toggleClass("hidden");
	    if ($(".bs-menu-item").is(".hidden")) {
	    	$(".bs-menu-item:nth-child(3)").css("border-bottom", "none")}
	    	else {$(".bs-menu-item:nth-child(3)").css("border-bottom", "1px solid #aaa")}
	    });

	$(".inner-closer").click(function(e) {
			e.preventDefault();
			$("[aria-expanded='true']").collapse("hide");
			});
});