import { InitialPosition } from './initial-position';

export interface Position extends InitialPosition{
  orientation: string;
  isLost?: boolean;
}
