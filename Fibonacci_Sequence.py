def fibonacci_sequence(n):
    if n <= 0:
        return "Invalid input. Please enter a positive integer."
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    else:
        sequence = [0, 1]
        for i in range(2, n):
            next_term = sequence[i-2] + sequence[i-1]
            sequence.append(next_term)
        return sequence

n = int(input("Enter the number of terms in the sequence: "))

result = fibonacci_sequence(n)

print("Fibonacci sequence:", result)