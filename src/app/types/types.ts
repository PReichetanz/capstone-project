export type Evaluation = {
  id: string;
  description: string;
};

export type Pupil = {
  id: string;
  name: string;
  evaluations: Evaluation[];
};
