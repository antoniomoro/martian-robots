export const ORIENTATION = ['N', 'S', 'E', 'W'];

export const ORIENTATION_MOVES: any = {
  L: {N: 'W', S: 'E', E: 'N', W: 'S'},
  R: {N: 'E', S: 'W', E: 'S', W: 'N'}
};

export const POSITION_MOVE: any = {
  N: {x: 0, y: +1}, S: {x: 0, y: -1}, E: {x: +1, y: 0}, W: {x: -1, y: 0}
};
