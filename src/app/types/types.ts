export type Evaluation = {
  id: string;
  category: string;
  descriptions: string[];
};

export type NormalizedInput = {
  name: {
    first: string;
    middle: string;
    last: string;
  };
  category: string;
  evaluation: string;
};

export type Pupil = {
  id: string;
  name: PupilName;
  evaluations: Evaluation[];
};

export type PupilName = {
  first: string;
  middle: string;
  last: string;
};

export type RawInput = {
  name: string;
  category: string;
  evaluation: string;
};
