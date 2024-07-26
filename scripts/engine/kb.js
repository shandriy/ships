var kb = (function() {
  var kb = {
    isDown: function(code) {
      return kb.hidden.keysDown.indexOf(code) > -1;
    },
    hidden: {
      keysDown: []
    }
  };
  function convertToCode(keyCode) {
    if (keyCode >= 65 && keyCode <= 90)
      return "Key" + ("ABCDEFGHIJKLMNOPQRSTUVWXYZ"[keyCode - 65]);
    if (keyCode >= 48 && keyCode <= 57)
      return "Digit" + (keyCode - 48);
    if (keyCode >= 112 && keyCode <= 135)
      return "F" + (keyCode - 111);
    if (keyCode >= 96 && keyCode <= 105)
      return "Numpad" + (keyCode - 96);
    switch (keyCode) {
      case 8:
        return "Backspace";
      case 9:
        return "Tab";
      case 13:
        return "Enter";
      case 16:
        return "ShiftLeft";
      case 18:
        return "AltLeft";
      case 27:
        return "Escape";
      case 32:
        return "Space";
      case 37:
        return "ArrowLeft";
      case 38:
        return "ArrowUp";
      case 39:
        return "ArrowRight";
      case 40:
        return "ArrowDown";
      case 46:
        return "Delete";
      case 186:
        return "Semicolon";
      case 187:
        return "Equal";
      case 188:
        return "Comma";
      case 189:
        return "Minus";
      case 190:
        return "Period";
      case 219:
        return "BracketLeft";
      case 220:
        return "Backslash";
      case 221:
        return "BracketRight";
      case 222:
        return "Quote";
    };
  };
  addEventListener("keydown", function(event) {
    var code;
    if (event.code) code = event.code;
    else code = convertToCode(event.keyCode);
    if (kb.hidden.keysDown.indexOf(code) === -1) kb.hidden.keysDown.push(code);
  });
  addEventListener("keyup", function(event) {
    var code;
    if (event.code) code = event.code;
    else code = convertToCode(event.keyCode);
    var index = kb.hidden.keysDown.indexOf(code);
    if (index > -1) kb.hidden.keysDown.splice(index, 1);
  });
  addEventListener("blur", function() {
    kb.hidden.keysDown = [];
  });
  return kb;
})();