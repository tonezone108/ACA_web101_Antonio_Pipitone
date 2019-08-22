// function myFunction() {
//   alert("Hello! I am an alert box!");
// }

// myFunction();

var gameMarker = "x";

function makeMove(square) {
  if (document.getElementsByTagName("div")[square].innerText == "") {
    document.getElementsByTagName("div")[square].innerText = gameMarker;
    if (gameMarker == "x") {
      gameMarker = "o";
    } else {
      gameMarker = "x";
    }
  }

  if (
    document.getElementsByTagName("div")[0].innerText == "x" &&
    document.getElementsByTagName("div")[1].innerText == "x" &&
    document.getElementsByTagName("div")[2].innerText == "x"
  ) {
    alert("Player X wins!");
    for (let i = 0; i < 9; i++) {
      document.getElementsByTagName("div")[i].innerText = "";
    }
    if (gameMarker == "x") {
      gameMarker = "o";
    } else {
      gameMarker = "x";
    }
  }
  if (
    document.getElementsByTagName("div")[0].innerText == "o" &&
    document.getElementsByTagName("div")[1].innerText == "o" &&
    document.getElementsByTagName("div")[2].innerText == "o"
  ) {
    alert("Player O wins!");
    for (let i = 0; i < 9; i++) {
      document.getElementsByTagName("div")[i].innerText = "";
    }
    if (gameMarker == "x") {
      gameMarker = "o";
    } else {
      gameMarker = "x";
    }
  }
  if (
    document.getElementsByTagName("div")[3].innerText == "x" &&
    document.getElementsByTagName("div")[4].innerText == "x" &&
    document.getElementsByTagName("div")[5].innerText == "x"
  ) {
    alert("Player X wins!");
    for (let i = 0; i < 9; i++) {
      document.getElementsByTagName("div")[i].innerText = "";
    }
    gameMarker = "x";
  }
  if (
    document.getElementsByTagName("div")[3].innerText == "o" &&
    document.getElementsByTagName("div")[4].innerText == "o" &&
    document.getElementsByTagName("div")[5].innerText == "o"
  ) {
    alert("Player O wins!");
    for (let i = 0; i < 9; i++) {
      document.getElementsByTagName("div")[i].innerText = "";
    }
    gameMarker = "x";
  }
  if (
    document.getElementsByTagName("div")[6].innerText == "x" &&
    document.getElementsByTagName("div")[7].innerText == "x" &&
    document.getElementsByTagName("div")[8].innerText == "x"
  ) {
    alert("Player X wins!");
    for (let i = 0; i < 9; i++) {
      document.getElementsByTagName("div")[i].innerText = "";
    }
    gameMarker = "x";
  }
  if (
    document.getElementsByTagName("div")[6].innerText == "o" &&
    document.getElementsByTagName("div")[7].innerText == "o" &&
    document.getElementsByTagName("div")[8].innerText == "o"
  ) {
    alert("Player O wins!");
    for (let i = 0; i < 9; i++) {
      document.getElementsByTagName("div")[i].innerText = "";
    }
    gameMarker = "x";
  }

  if (
    document.getElementsByTagName("div")[0].innerText == "x" &&
    document.getElementsByTagName("div")[3].innerText == "x" &&
    document.getElementsByTagName("div")[6].innerText == "x"
  ) {
    alert("Player X wins!");
    for (let i = 0; i < 9; i++) {
      document.getElementsByTagName("div")[i].innerText = "";
    }
    gameMarker = "x";
  }
  if (
    document.getElementsByTagName("div")[0].innerText == "o" &&
    document.getElementsByTagName("div")[3].innerText == "o" &&
    document.getElementsByTagName("div")[6].innerText == "o"
  ) {
    alert("Player O wins!");
    for (let i = 0; i < 9; i++) {
      document.getElementsByTagName("div")[i].innerText = "";
    }
    gameMarker = "x";
  }

  if (
    document.getElementsByTagName("div")[1].innerText == "x" &&
    document.getElementsByTagName("div")[4].innerText == "x" &&
    document.getElementsByTagName("div")[7].innerText == "x"
  ) {
    alert("Player X wins!");
    for (let i = 0; i < 9; i++) {
      document.getElementsByTagName("div")[i].innerText = "";
    }
    gameMarker = "x";
  }
  if (
    document.getElementsByTagName("div")[1].innerText == "o" &&
    document.getElementsByTagName("div")[4].innerText == "o" &&
    document.getElementsByTagName("div")[7].innerText == "o"
  ) {
    alert("Player O wins!");
    for (let i = 0; i < 9; i++) {
      document.getElementsByTagName("div")[i].innerText = "";
    }
    gameMarker = "x";
  }

  if (
    document.getElementsByTagName("div")[2].innerText == "x" &&
    document.getElementsByTagName("div")[5].innerText == "x" &&
    document.getElementsByTagName("div")[8].innerText == "x"
  ) {
    alert("Player X wins!");
    for (let i = 0; i < 9; i++) {
      document.getElementsByTagName("div")[i].innerText = "";
    }
    gameMarker = "x";
  }
  if (
    document.getElementsByTagName("div")[2].innerText == "o" &&
    document.getElementsByTagName("div")[5].innerText == "o" &&
    document.getElementsByTagName("div")[8].innerText == "o"
  ) {
    alert("Player O wins!");
    for (let i = 0; i < 9; i++) {
      document.getElementsByTagName("div")[i].innerText = "";
    }
    gameMarker = "x";
  }

  if (
    document.getElementsByTagName("div")[0].innerText == "x" &&
    document.getElementsByTagName("div")[4].innerText == "x" &&
    document.getElementsByTagName("div")[8].innerText == "x"
  ) {
    alert("Player X wins!");
    for (let i = 0; i < 9; i++) {
      document.getElementsByTagName("div")[i].innerText = "";
    }
    gameMarker = "x";
  }
  if (
    document.getElementsByTagName("div")[0].innerText == "o" &&
    document.getElementsByTagName("div")[4].innerText == "o" &&
    document.getElementsByTagName("div")[8].innerText == "o"
  ) {
    alert("Player O wins!");
    for (let i = 0; i < 9; i++) {
      document.getElementsByTagName("div")[i].innerText = "";
    }
    gameMarker = "x";
  }

  if (
    document.getElementsByTagName("div")[2].innerText == "x" &&
    document.getElementsByTagName("div")[4].innerText == "x" &&
    document.getElementsByTagName("div")[6].innerText == "x"
  ) {
    alert("Player X wins!");
    for (let i = 0; i < 9; i++) {
      document.getElementsByTagName("div")[i].innerText = "";
    }
    gameMarker = "x";
  }
  if (
    document.getElementsByTagName("div")[2].innerText == "o" &&
    document.getElementsByTagName("div")[4].innerText == "o" &&
    document.getElementsByTagName("div")[6].innerText == "o"
  ) {
    alert("Player O wins!");
    for (let i = 0; i < 9; i++) {
      document.getElementsByTagName("div")[i].innerText = "";
    }
    gameMarker = "x";
  }

  var endgame = "yes";
  for (let i = 0; i < 9; i++) {
    if (document.getElementsByTagName("div")[i].innerText == "") {
      endgame = "no";
    }
  }
  if (endgame == "yes") {
    alert("It's a tie");
    for (let i = 0; i < 9; i++) {
      document.getElementsByTagName("div")[i].innerText = "";
      gameMarker = "x";
    }
  }
}

function reset() {
  for (let i = 0; i < 9; i++) {
    document.getElementsByTagName("div")[i].innerText = "";
    gameMarker = "x";
  }
}
