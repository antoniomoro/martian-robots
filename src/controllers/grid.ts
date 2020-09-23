import { InitialPosition } from '../types/initial-position';
import MapperService from '../services/mapper';
import Validator from '../services/validator';
import { Robot } from '../types/robot';
import { ORIENTATION_MOVES, POSITION_MOVE } from '../types/orientation';
import { Position } from '../types/position';

class Grid {
  public static handleInput(input: string): void {
    try {
      const inputInstructions = input.split('\n');
      this.validateInputFormat(inputInstructions);
      const initialPosition: InitialPosition = MapperService.mapInitialPosition(inputInstructions[0]);
      const robots: Robot[] = MapperService.mapRobots(inputInstructions);
      this.doInstructions(robots, initialPosition);
    } catch (e) {
      console.error(`ERROR: ${e.message}`);
    }
  }

  private static validateInputFormat(input: string[]): void {
    Validator.validateInitialPosition(input[0]);
    Validator.validateRobotData(input);
  }

  private static doInstructions(robots: Robot[], initialPosition: InitialPosition) {
    if (robots) {
      let lostPositions: Position[] = [];
      robots.forEach(robot => {
        robot.instruction.movements.forEach(move => {
          if(!robot.position.isLost) {
            if (move !== 'F') {
              robot.position.orientation = ORIENTATION_MOVES[move][robot.position.orientation];
            } else {
              const movement = POSITION_MOVE[robot.position.orientation];
              if (!this.checkPreviousLost(lostPositions, {
                x: robot.position.x + (movement.x),
                y: robot.position.y + (movement.y)
              })) {
                robot.position.x = robot.position.x + (movement.x);
                robot.position.y = robot.position.y + (movement.y);
              }
            }
            if (this.checkIfLost(robot.position, initialPosition)) {
              lostPositions.push(robot.position);
              robot.position.isLost = true;
            }
          }
        });
      });
      robots.forEach(robot => console.log(`${robot.position.x} ${robot.position.y} ${robot.position.orientation} ${robot.position.isLost ? 'LOST' : ''}`));
    }
  }

  private static checkIfLost(position: Position, initialPosition: InitialPosition): boolean {
    return (position.x > initialPosition.x || position.x < 0)
      || (position.y > initialPosition.y || position.y < 0);
  }

  private static checkPreviousLost(lostPositions: Position[], nextPosition: InitialPosition) {
    return lostPositions && lostPositions.some(position => position.x === nextPosition.x && position.y === nextPosition.y);
  }
}

export default Grid;
