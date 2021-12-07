export type DefaultEvaluation = {
  name: string;
  valuations: { mark: number; descriptions: string[] }[];
};

export type DefaultEvaluations = [
  {
    name: string;
    valuations: [
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
