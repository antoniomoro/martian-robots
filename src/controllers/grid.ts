import { InitialPosition } from '../types/initial-position';
import MapperService from '../services/mapper';
import Validator from '../services/validator';
import { Robot } from '../types/robot';

class Grid {
  public static handleInput(input: string): void {
    try {
      const inputInstructions = input.split('\n');
      this.validateInputFormat(inputInstructions);
      const initialPosition: InitialPosition = MapperService.mapInitialPosition(inputInstructions[0]);
      const robots: Robot[] = MapperService.mapRobots(inputInstructions);
      this.initializeGrid(inputInstructions[0]);
      this.doInstructions(robots);
    } catch (e) {
      console.error(e);
    }
  }

  private static validateInputFormat(input: string[]): void {
    Validator.validateInitialPosition(input[0]);
    Validator.validateRobotData(input);
  }


  private static initializeGrid(string: string) {

  }

  private static doInstructions(robots: Robot[]) {

  }
}

export default Grid;
