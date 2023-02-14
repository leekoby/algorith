const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = +fs.readFileSync(filePath).toString();


const solution = (input) => {
  let count = 0;
  let answer = [];

  function hanoi(num, start, wayPoint, end) {
    if (!num) return;
    hanoi(num - 1, start, end, wayPoint);
    answer.push([start, end]);
    count++;
    hanoi(num - 1, wayPoint, start, end);
  }
  hanoi(input, 1, 2, 3);
  console.log(count);
  return answer.map((el) => el.join(" ")).join("\n");
};

console.log(solution(input));