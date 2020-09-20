import ErrorRobot from '../types/error-robot';
import { MAX_INSTRUCTION_NUMBERS, MAX_POSITION_VALUE } from './constants';
import { Orientation } from '../types/orientation';
import { Movements } from '../types/movements';

class Validator {
  public static validateRobotData(inputs: string[]) {
    inputs.slice().slice(0, 1).forEach((input, index) => index % 2 == 0 ? this.validatePosition(input) : this.isValidInstruction(input));
  }

  public static validatePosition(position: string): void {
    const positionSplit: string[] = position.split(' ');
    if (positionSplit.length > 3) {
      throw new ErrorRobot('The initial position must be two number and a letter separated by a space');
    } else if(this.isValidatePositionNumber(positionSplit[0])
      && this.isValidatePositionNumber(positionSplit[1])) {
      throw new ErrorRobot(`The maximum value of a position number is: ${MAX_POSITION_VALUE}`);
    } else if (Object.values(Orientation).includes(positionSplit[2])) {
      throw new ErrorRobot(`The orientation must be N, S, E or W`);
    }
  }

  public static isValidInstruction(instruction: string): void {
    if (instruction.length > MAX_INSTRUCTION_NUMBERS) {
      throw new ErrorRobot(`The maximum instruction numbers is ${MAX_INSTRUCTION_NUMBERS}`)
    } else if (instruction.split('').some(move => Object.values(Movements).includes(move))) {
      throw new ErrorRobot(`The orientation must be L, R or F`);
    }
  }

  public static validateInitialPosition(initialPosition: string): void {
    const positionSplit: string[] = initialPosition.split(' ');
    if (positionSplit.length > 2) {
      throw new ErrorRobot('The initial position must be two number separated by a space');
    } else if(positionSplit.some(position => this.isValidatePositionNumber(position))) {
      throw new ErrorRobot(`The maximum value of a position number is: ${MAX_POSITION_VALUE}`);
    }
  }

  private static isValidatePositionNumber(position: string): boolean {
    return !Number(position) || +position > MAX_POSITION_VALUE;
  }
}

export default Validator;
