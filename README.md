[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12701161&assignment_repo_type=AssignmentRepo)
# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature. I have also not provided any test code, but you
can base yours on test code from other exercises.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not? Add your answer, including your
reasoning, to this markdown file.

The asymptotic complexity of tail-recursive Fibonacci is not different from the non-tail-recursive version. Specifically with this non-tail-recursive version:
```
function fib_dp(n) {
    var fib_old = 1;
    var fib = 1;
    var fib_new;
    while(n > 2) {
      fib_new = fib + fib_old;
      fib_old = fib;
      fib = fib_new;
      --n;
    }
    return fib;
}
```
there is no difference, asymptotically they both run n times. 
