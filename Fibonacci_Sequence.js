function fibonacciSequence(n) {
if (n <= 0) {
    return "Invalid input. Please enter a positive integer.";
    } 
    else if (n === 1) {
    return [0];
    } 
    else if (n === 2) {
    return [0, 1];
    }
    else {
    var sequence = [0, 1];
    for (var i = 2; i < n; i++) {
        var nextTerm = sequence[i - 2] + sequence[i - 1];
        sequence.push(nextTerm);
    }
    return sequence;
    }
}  

var n = parseInt(prompt("Enter the number of terms in the sequence:"));
var result = fibonacciSequence(n);

console.log("Fibonacci sequence:", result);