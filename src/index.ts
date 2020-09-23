import FileService from './services/file';
import Grid from './controllers/grid';

const init = () => {
  const input = FileService.getInputValues();
  console.log(`INPUT\n${input}`);
  Grid.handleInput(input);
};

init();
