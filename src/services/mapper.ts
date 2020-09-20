import Validator from './validator';
import { InitialPosition } from '../types/initial-position';
import { Robot } from '../types/robot';

class MapperService {
  public static mapInitialPosition(initialPosition: string): InitialPosition {
    const splitPosition = initialPosition.split(' ');
    return {
      x: +splitPosition[0],
      y: +splitPosition[1],
    };
  }

  static mapRobots(inputInstructions: string[]): Robot[] {
    inputInstructions.slice().slice(0, 1).forEach((input, index) => index % 2 == 0 ? this.mapPosition(input) : this.mapInstruction(input));
    return [];
  }

  private static mapPosition(position: string) {
    return undefined;
  }

  private static mapInstruction(instruction: string) {
    return undefined;
  }
}

export default MapperService;
