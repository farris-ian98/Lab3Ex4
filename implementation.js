

function border(){
  let red1 = document.getElementById("red1").value;
  let green1 = document.getElementById("green1").value;
  let blue1 = document.getElementById("blue1").value;
  let width = document.getElementById("width").value;
  let red2 = document.getElementById("red2").value;
  let green2 = document.getElementById("green2").value;
  let blue2 = document.getElementById("blue2").value;

  let border = "rgb(" + red1 + ", " + green1 + ", " + blue1 + ")";
  let background = "rgb(" + red2 + ", " + green2 + ", " + blue2 + ")";
  let borderWidth = "" + width + "px";

  text.style.borderStyle = "solid";
  text.style.borderColor = border;
  text.style.background = background;
  text.style.borderWidth = borderWidth;
}
