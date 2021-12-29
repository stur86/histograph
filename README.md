# Histograph

A browser-based puzzle game of numbers and statistics

### The goal

Histograph is a puzzle game based on the idea of finding the right arrangement
for a grid of numbers based on indirect information about them. You win if you
can arrange the numbers in a way that makes it so that the sums of numbers 
sharing a corner equal those set as an objective.

### How to play

You can swap two numbers in squares by clicking them in succession, as long as they're 
next to each other. The sums in the circles will update as a consequence of your
moves. 

The histogram at the bottom sets your goal: you want the light bars (current arrangement)
to overlap perfectly with the dark bars (solution). This might be even possible in more
than one way! However, it is always guaranteed to be possible in *at least* one way.

For a very basic example, consider the following arrangement:

```
2  1  3
4  2  0
```

In this case, the four numbers to the left will sum to 9 (2+1+4+2), and the four numbers
to the right will sum to 6  (1+3+0+2). Suppose that the histogram says instead the
solution contains the sums 11 and 6. Then you can swap the numbers 1 and 3 to get

```
2  3  1
4  2  0
```

and now the sums match!

### Difficulty

You can set the difficulty by controlling the size of the grid and the number of moves.
The simplest possible game is a 3x3 grid with only one move necessary to reach the solution.
Bigger grids and longer chains of moves will quickly get very hard to figure out!