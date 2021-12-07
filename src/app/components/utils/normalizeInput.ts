import type { NormalizedInput } from '../../types/types';

export default function handleInput(name: string): NormalizedInput {
  const preparedName = prepareNormalisation(name);
  const firstName = preparedName[0];
  const middleName =
    preparedName.length <= 2 ? null : preparedName.slice(1, -1).join(' ');
  const lastName =
    preparedName.length === 1
      ? null
      : preparedName[preparedName.length - 1].toLowerCase();

  const normalizedPupil = {
    name: {
      first: normalizeInput(firstName),
      middle: middleName !== null ? normalizeInput(middleName) : '',
      last: lastName !== null ? normalizeInput(lastName) : '',
    },
  };
  return normalizedPupil;
}

function prepareNormalisation(name: string) {
  return name.trim().replace(/\s+/g, ' ').split(' ');
}

function toUpperCaseWhitespace(input: string, index: number) {
  const upperCasedInput = input.replace(
    input[index],
    input[index].toUpperCase()
  );
  return upperCasedInput;
}

function normalizeInput(input: string) {
  const indexOfWhitespace = input.search(/\s/g) + 1;
  const indexOfHyphen = input.search(/-/g) + 1;

  let inputToNormalize = input.toLowerCase();

  if (indexOfWhitespace > 0) {
    inputToNormalize = toUpperCaseWhitespace(
      inputToNormalize,
      indexOfWhitespace
    );
  }
  if (indexOfHyphen > 0) {
    const replacedHyphens = inputToNormalize.replace(
      inputToNormalize[indexOfHyphen - 1],
      ' '
    );
    const upperCaseName = toUpperCaseWhitespace(replacedHyphens, indexOfHyphen);
    const firstLetterUpperCase = toUpperCaseWhitespace(upperCaseName, 0);
    const replacedWhitespace = firstLetterUpperCase.replace(
      firstLetterUpperCase[indexOfHyphen - 1],
      '-'
    );

    inputToNormalize = replacedWhitespace;
    return inputToNormalize;
  }
  return toUpperCaseWhitespace(inputToNormalize, 0);
}
