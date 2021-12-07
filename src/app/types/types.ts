export type DefaultEvaluation = {
  name: string;
  evaluations: { mark: number; descriptions: string[] }[];
};

export type DefaultEvaluations = [
  {
    name: string;
    evaluations: [
      {
        mark: number;
        descriptions: string[];
      }
    ];
  }
];

export type Evaluation = {
  id: string;
  category: string;
  descriptions: string[];
};

export type NormalizedInput = {
  name: {
    first: string;
    middle: string | null;
    last: string | null;
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
  middle: string | null;
  last: string | null;
};

export type RawInput = {
  name: string;
  category: string;
  evaluation: string;
};
