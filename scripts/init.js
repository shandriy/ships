addEventListener("DOMContentLoaded", function() {
  document.body.style.overflow = "hidden";
  var hide = document.getElementById("hide");
  var canvas = document.getElementById("canvas");
  var destroy = document.getElementById("destroy");
  var context = canvas.getContext("2d", { alpha: false });
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
  var scripts = ["engine/kb"];
  var images = ["placeholder"];
  var loadedImages = [];
  var maximum = scripts.length + images.length;
  var amount = maximum;
  function count() {
    amount -= 1;
    context.fillStyle = "#000";
    context.fillRect(0, 0, 1280, 720);
    context.lineWidth = 4;
    context.strokeStyle = "#fff";
    context.strokeRect(40, 329, 1200, 62);
    context.fillStyle = "#3c4194";
    context.fillRect(46, 335, (1 - (amount / maximum)) * 1188, 50);
    if (amount < 1) {
      setTimeout(function() {

      }, 100);
    };
  };
  var length = scripts.length;
  for (var i = 0; i < length; i += 1) {
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.addEventListener("load", count);
    script.setAttribute("src", "scripts/" + scripts[i] + ".js");
    document.getElementsByTagName("head")[0].appendChild(script);
  };
  length = images.length;
  for (var i = 0; i < length; i += 1) {
    var image = new Image();
    loadedImages.push({ image: image, name: images[i] });
    image.addEventListener("load", count);
    image.src = "assets/images/" + images[i] + ".png";
  };
});