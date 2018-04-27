$(document).ready(function(){
			
	$("#select1 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectA").remove();
		} else {
			var copyThisA = $(this).clone();
			if ($("#selectA").length > 0) {
				$("#selectA a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisA.attr("id", "selectA"));
			}
		}
	});
	
	$("#select2 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectB").remove();
		} else {
			var copyThisB = $(this).clone();
			if ($("#selectB").length > 0) {
				$("#selectB a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisB.attr("id", "selectB"));
			}
		}
	});
	
	$("#select3 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectC").remove();
		} else {
			var copyThisC = $(this).clone();
			if ($("#selectC").length > 0) {
				$("#selectC a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisC.attr("id", "selectC"));
			}
		}
	});
	//4
	$("#select4 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectD").remove();
		} else {
			var copyThisD = $(this).clone();
			if ($("#selectD").length > 0) {
				$("#selectD a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisD.attr("id", "selectD"));
			}
		}
	});

	ss=function () {
		if ($(".select-result dd").length > 1) {
			$(".select-no").hide();
		} else {
			$(".select-no").show();
		}
	}
	$(".select-result").on("click","#selectA", function () {
		$("#selectA").remove();
		$("#select1 .select-all").addClass("selected").siblings().removeClass("selected");
		ss();
	});
	
	$(".select-result").on("click","#selectB", function () {
		$("#selectB").remove();
		$("#select2 .select-all").addClass("selected").siblings().removeClass("selected");
		ss();
	});
	
	$(".select-result").on("click","#selectC", function () {
		$("#selectC").remove();
		$("#select3 .select-all").addClass("selected").siblings().removeClass("selected");
		ss();
	});
	$(".select-result").on("click","#selectD", function () {
		$("#selectD").remove();
		$("#select4 .select-all").addClass("selected").siblings().removeClass("selected");
		ss();
	});
	
	
	
	$(".select dd").on("click", function () {
		ss();
	});
	
});