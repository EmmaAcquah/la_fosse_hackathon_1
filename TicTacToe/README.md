# Tic-Tac-Toe

## Game Summary
A game where a player needs to connect either Noughts [O] or Crosses [X] in a 3x3 grid, horizontally, vertically, or diagonally.


## Game Logic
The game grid logic is as follows.
Users will altername adding positions on the grid:
1. Player 1 keys in a position on the grid at position [1]

```
_X_|_2_|_3_

_4_|_5_|_6_

_7_|_8_|_9_
```

2. Player 2 keys in position [5].
```
_X_|_2_|_3_

_4_|_O_|_6_

_7_|_8_|_9_
```

 etc.

Until the game enters a win state or the board is full:
```
_O_|_O_|_O_

___|_X_|_X_

_X_|___|_O_
```
OR 
```
_O_|_X_|_O_

_O_|_X_|_X_

_X_|_O_|_X_
```

The program stores the above positions as follows:
x (+1) vs o (-1)

Therefore at the second game state we arrive with the below object:
```js
gameBoard:{
    1:+1,
    2:,
    3:,
    4:,
    5:-1,
    6:,
    7:,
    8:,
    9:,
}
```

And the above game board has reached a winning state.

```js
gameBoard:{
    1:+1,
    2:+1,
    3:+1,
    4:,
    5:-1,
    6:-1,
    7:-1,
    8:,
    9:+1,
}
```

That is in positions [1, 2, 3] we have the sum equal to +3 and `O` met a win state.


The following object will store each winning permutation as the key and the sense check vs. winning combination

```js
winningCombinationsObject: {
    123: [sum],
    456: ,
    789: ,
    147: ,
    258: ,
    369: ,
    357: ,
    159: 
}

```