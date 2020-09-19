class Grid {
  public static handleInput(input: string): void {
    try {
      const inputInstructions = input.split('\n');
      this.validateInputFormat(inputInstructions);
      this.initializeGrid(inputInstructions[0]);
      this.doInstructions(inputInstructions);
    } catch (e) {

    }
  }

  private static validateInputFormat(input: string[]): void {

  }

  private static initializeGrid(string: string) {

  }

  private static doInstructions(inputInstructions: string[]) {

  }
}

export default Grid;
