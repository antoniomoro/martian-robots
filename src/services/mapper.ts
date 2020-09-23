import { InitialPosition } from '../types/initial-position';
import { Robot } from '../types/robot';
import { Position } from '../types/position';
import { Instruction } from '../types/instruction';

class MapperService {
  public static mapInitialPosition(initialPosition: string): InitialPosition {
    const splitPosition = initialPosition.split(' ');
    return {
      x: +splitPosition[0],
      y: +splitPosition[1],
    };
  }

  public static mapRobots(inputInstructions: string[]): Robot[] {
    const robots: Robot[] = [];
    let robot: Robot = this.initializeRobot();
    inputInstructions.slice().slice(1, inputInstructions.length - 1).forEach((input, index) => {
      if (index % 2 === 0) {
        robot.position = this.mapPosition(input.split(' '));
      } else {
        robot.instruction = this.mapInstruction(input);
        robots.push({...robot});
      }
    });
    return robots;
  }

  private static mapPosition(position: string[]): Position {
    return {
      x: +position[0],
      y: +position[1],
      orientation: position[2]
    };
  }

  private static mapInstruction(instruction: string): Instruction {
    return {
      movements: instruction.split(''),
    };
  }

  private static initializeRobot(): Robot {
    return {
      position: {x: 0, y: 0, orientation: ''},
      instruction: {movements: ['']},
    };
  }
}

export default MapperService;
