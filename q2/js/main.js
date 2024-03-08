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

$(".dropdown").mouseenter(function () {
  $(this).find("a.link-item").addClass("border-bottom border-black border-2");
  $(this).find(".dropdown-toggle").dropdown("show");
});

$(".dropdown").mouseleave(function () {
  $(this)
    .find("a.link-item")
    .removeClass("border-bottom border-black border-2");
  $(this).find(".dropdown-toggle").dropdown("hide");
});
