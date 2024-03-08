$("document").ready(function () {
  $(".socials-icon").hover(
    function () {
      $(this).attr("src", "img/" + this.id + "-hover.svg");
    },
    function () {
      $(this).attr("src", "img/" + this.id + ".svg");
    }
  );

  $("#menu").hover(
    function () {
      $(this).attr("src", "img/" + this.id + "-hover.png");
    },
    function () {
      $(this).attr("src", "img/" + this.id + ".png");
    }
  );
});

$("#slideLeftBtn").hide();

$("#slideRightBtn").click(function () {
  $("#list").animate({ scrollLeft: "+=100" }, 500);
  if ($("#list").scrollLeft() >= 0) {
    $("#slideLeftBtn").show();
  }
  if ($("#list").scrollLeft() >= 200) {
    $("#slideRightBtn").hide();
  }
});

$("#slideLeftBtn").click(function () {
  $("#list").animate({ scrollLeft: "-=100" }, 500);
  if ($("#list").scrollLeft() <= 200) {
    $("#slideRightBtn").show();
  }
  if ($("#list").scrollLeft() <= 0) {
    $("#slideLeftBtn").hide();
  }
});

$("a.link-item").addClass("border-bottom border-white border-2");
$("a.link-item").attr("tabindex", -1);

$("a.link-item").hover(
  function () {
	$(this).removeClass("border-white");
    $(this).addClass("border-black");
  },
  function () {
	$(this).removeClass("border-black");
	$(this).addClass("border-white");
  }
);

$(".dropdown").mouseenter(function () {
  $(this).find(".dropdown-toggl").dropdown("show");
});

$(".dropdown").mouseleave(function () {
  setTimeout(() => {
    $(this).find(".dropdown-toggl").dropdown("hide");
  },500);
});
