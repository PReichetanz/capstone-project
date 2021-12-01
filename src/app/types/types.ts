export type Evaluation = {
  id: string;
  category: string;
  description: string;
};

export type Pupil = {
  id: string;
  name: string;
  evaluations: Evaluation[];
};
