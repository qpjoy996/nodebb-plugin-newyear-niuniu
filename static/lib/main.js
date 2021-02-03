$("document").ready(function () {
  var fuzi =
    '<img src="/forum/plugins/nodebb-plugin-newyear-niuniu/static/images/福字.gif" alt="f" class="fuziImg">';
  var shizi =
    '<img src="/forum/plugins/nodebb-plugin-newyear-niuniu/static/images/狮子.gif" alt="s" class="shiziImg"></img>';
  $(document.body).append(fuzi, shizi);
  $(".fuziImg").css({
    width: "250px",
    position: "absolute",
    top: "-33px",
    left: "30px",
    zIndex: "9999",
  });
  $(".shiziImg").css({
    width: "250px",
    position: "absolute",
    bottom: "0",
    right: "30px",
  });
});
