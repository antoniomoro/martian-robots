import { Position } from './position';
import { Instruction } from './instruction';

export interface Robot {
  position: Position;
  instruction: Instruction;
}
