process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function (data) {
  input_stdin += data;
});

process.stdin.on("end", function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function addNumbers(a, b) {
  return a + b;
}

function main() {
  var a = parseInt(readLine());
  var b = parseInt(readLine());

  var res = addNumbers(a, b);
  console.log("The sum is " + res);
}
