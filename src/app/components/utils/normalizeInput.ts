import type { NormalizedInput, RawInput } from '../../types/types';

export default function handleInput(pupil: RawInput): NormalizedInput {
  const preparedName = prepareNormalisation(pupil.name);
  const firstName = preparedName[0];
  const middleName =
    preparedName.length < 2 ? '' : preparedName.slice(1, -1).join(' ');
  const lastName =
    preparedName.length === 1
      ? ''
      : preparedName[preparedName.length - 1].toLowerCase();

  const category = pupil.category;
  const evaluation = pupil.evaluation;

  const normalizedPupil = {
    name: {
      first: normalizeInput(firstName),
      middle: middleName !== '' ? normalizeInput(middleName) : '',
      last: lastName !== '' ? normalizeInput(lastName) : '',
    },
    category: category,
    evaluation: evaluation,
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
  const normalizedInput = toUpperCaseWhitespace(inputToNormalize, 0);
  return normalizedInput;
}
