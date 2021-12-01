export type Evaluation = {
  id: string;
  category: string;
  descriptions: string[];
};

export type Pupil = {
  id: string;
  name: string;
  evaluations: Evaluation[];
};
