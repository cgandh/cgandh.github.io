function parallel_boxes() {
  var strings_array = document.getElementsByClassName("textbox");
  let left_boxes = (strings_array[0].value.split("\n"));
  let right_boxes = (strings_array[1].value.split("\n"));
  var left_out = "";
  var right_out = "";
  var rows = "";

  for (let i=0; i<Math.max(left_boxes.length, right_boxes.length); i++) {
    if (!isNaN(left_boxes[i])) {
      left_out = `<span class="left_out_num"> ${left_boxes[i]} </span>`;
    } else {
      left_out = `<span class="left_out"> ${left_boxes[i]} </span>`;
    }
    if (!isNaN(right_boxes[i])) {
      right_out = `<span class="right_out_num"> ${right_boxes[i]} </span>`;
    } else {
      right_out = `<span class="right_out"> ${right_boxes[i]} </span>`;
    }
    rows += `<div> ${left_out + right_out} </div>`;
  }
  document.getElementById("output").innerHTML = rows;
}

function parallelize() {
  let leftpag = [];
  let rightpag = [];
  let n = 70;
  let solutionL = "";
  let solutionR = "";
  var strings_array = document.getElementsByClassName("textbox");
  let left_pages = (strings_array[0].value.split("\n"));
  let right_pages = (strings_array[1].value.split("\n"));

  for (let i = 0; i < left_pages.length; i++) {
    leftpag.push(left_pages[i]);
    rightpag.push(right_pages[i]);
    console.log(left_pages[0]);
    console.log(left_pages[i].length, right_pages[i].length);
    diff = Math.ceil(left_pages[i].length / n) - Math.ceil(right_pages[i].length / n);
    console.log(diff);
    if (diff == 0) {}
    else if (diff < 0) {
      diff *= -1;
      equaliser = "<br>".repeat(diff);
      leftpag.push(equaliser);
    } else if (diff > 0) {
      equaliser = "<br>".repeat(diff);
      rightpag.push(equaliser);
    }
    leftpag.push("<br><br>");
    rightpag.push("<br><br>");
  }
  solutionL = "";
  solutionR = "";
  for (let i = 0; i < leftpag.length; i++) {
    solutionL += leftpag[i];
  }
  for (let i = 0; i < rightpag.length; i++) {
    solutionR += rightpag[i];
  }
  document.getElementById("leftout").innerHTML = solutionL;
  document.getElementById("rightout").innerHTML = solutionR;
}