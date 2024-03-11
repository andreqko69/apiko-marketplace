import capitalize from './capitalize';

class InputFormatter {
  public formatName(name: string) {
    return capitalize(name.trim().toLowerCase());
  }
}

const inputFormatter = new InputFormatter();

export default inputFormatter;
