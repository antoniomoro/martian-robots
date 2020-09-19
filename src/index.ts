import FileService from './services/file';

const init = () => {
  const input = FileService.getInputValues();
  console.log(input);

};

init();
