$(".topBtn").click(() => {
  $("html, body").animate({ scrollTop: 0 }, 600);
});

$(window).scroll(() => {
  if ($(window).scrollTop() > 40) {
    $(".topBtn").fadeIn();
  } else {
    $(".topBtn").fadeOut();
  }
});
