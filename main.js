// sailor moon quiz
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let inpt1 = +document.getElementById("inpt1").value;
  let inpt2 = document.getElementById("inpt2").value.toLowerCase();
  let inpt3 = document.getElementById("inpt3").value.toLowerCase();
  let inpt4 = document.getElementById("inpt4").value.toLowerCase();
  let ic1 = document.getElementById("ic1");
  let ic2 = document.getElementById("ic2");
  let ic3 = document.getElementById("ic3");
  let ic4 = document.getElementById("ic4");

  if (inpt1 == 10) {
    ic1.innerHTML = "Correct";
    document.getElementById("ic1").style.color = "green";
    document.getElementById("inpt1").style.borderBlockColor = "green";
    ans1 = 1;
  } else {
    ic1.innerHTML = "Incorrect";
    document.getElementById("ic1").style.color = "red";
    document.getElementById("inpt1").style.borderBlockColor = "red";
    ans1 = 0;
  }

  if (inpt2 === "sailor v" || inpt2 === "sailor venus") {
    ic2.innerHTML = "Correct";
    document.getElementById("ic2").style.color = "green";
    document.getElementById("inpt2").style.borderBlockColor = "green";
    ans2 = 1;
  } else {
    ic2.innerHTML = "Incorrect";
    document.getElementById("ic2").style.color = "red";
    document.getElementById("inpt2").style.borderBlockColor = "red";
    ans2 = 0;
  }

  if (inpt3 === "white") {
    ic3.innerHTML = "Correct";
    document.getElementById("ic3").style.color = "green";
    document.getElementById("inpt3").style.borderBlockColor = "green";
    ans3 = 1;
  } else {
    ic3.innerHTML = "Incorrect";
    document.getElementById("ic3").style.color = "red";
    document.getElementById("inpt3").style.borderBlockColor = "red";
    ans3 = 0;
  }

  if (inpt4 === "sailor uranus" || inpt4 === "haruka") {
    ic4.innerHTML = "Correct";
    document.getElementById("ic4").style.color = "green";
    document.getElementById("inpt4").style.borderBlockColor = "green";
    ans4 = 1;
  } else {
    ic4.innerHTML = "Incorrect";
    document.getElementById("ic4").style.color = "red";
    document.getElementById("inpt4").style.borderBlockColor = "red";
    ans4 = 0;
  }

  let score = ((ans1 + ans2 + ans3 + ans4) / 4) * 100;
  document.getElementById("output").innerHTML = score;

  if (score == 100) {
    document.getElementById("output2").innerHTML = "yay";
  } else if (score == 75) {
    document.getElementById("output2").innerHTML = "not bad";
  } else if (score == 50) {
    document.getElementById("output2").innerHTML = "halfway there";
  } else if (score == 25) {
    document.getElementById("output2").innerHTML = "oh no";
  } else {
    document.getElementById("output2").innerHTML = "💀";
  }
}
