export interface iDifficulty {
  id: string;
  name: string;
}

const BossDifficulties: { [key: string]: iDifficulty } = {
  easy: {
    id: "easy",
    name: "Easy"
  },
  medium: {
    id: "medium",
    name: "Medium"
  },
  hard: {
    id: "hard",
    name: "Hard"
  },
  veryhard: {
    id: "veryhard",
    name: "Very Hard"
  }
};

export default BossDifficulties;
