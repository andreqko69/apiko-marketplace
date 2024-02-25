import capitalize from '@utils/capitalize';

export class InputFormatter {
  public formatName(name: string) {
    return capitalize(name.trim().toLowerCase());
  }
}

const inputFormatter = new InputFormatter();

export default inputFormatter;
