addEventListener("DOMContentLoaded", function() {
  document.body.style.overflow = "hidden";
  var hide = document.getElementById("hide");
  var canvas = document.getElementById("canvas");
  var destroy = document.getElementById("destroy");
  if (destroy.remove) {
    hide.remove();
    destroy.remove();
  } else {
    hide.innerHTML = "";
    destroy.innerHTML = "";
    destroy.style.display = "none";
  };
  function resize() {
    if (innerWidth * 9 > innerHeight * 16) {
      canvas.style.top = "0px";
      canvas.style.height = innerHeight + "px";
      canvas.style.width = (innerHeight * 16 / 9) + "px";
      canvas.style.left = ((innerWidth - (innerHeight * 16 / 9)) / 2) + "px";
    } else {
      canvas.style.left = "0px";
      canvas.style.width = innerWidth + "px";
      canvas.style.height = (innerWidth * 9 / 16) + "px";
      canvas.style.top = ((innerHeight - (innerWidth * 9 / 16)) / 2) + "px";
    };
  };
  addEventListener("focus", resize);
  addEventListener("resize", resize);
  resize();
});