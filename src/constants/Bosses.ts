import Difficulty from "./BossDifficulties";
import { iDifficulty } from "./BossDifficulties";

export interface iDifficultyWithStats extends iDifficulty {
  menaceLevel: number;
  resources: number;
  health: number;
}

export interface iBoss {
  id: string;
  name: string;
  difficulties: {
    [key: string]: iDifficultyWithStats;
  };
}

const Bosses: { [key: string]: iBoss } = {
  byloss: {
    id: "byloss",
    name: "Byloss",
    difficulties: {
      [Difficulty.medium.id]: {
        ...Difficulty.medium,
        menaceLevel: 2,
        resources: 22,
        health: 25
      },
      [Difficulty.hard.id]: {
        ...Difficulty.hard,
        menaceLevel: 3,
        resources: 30,
        health: 30
      },
      [Difficulty.veryhard.id]: {
        ...Difficulty.veryhard,
        menaceLevel: 4,
        resources: 40,
        health: 35
      }
    }
  },
  nyryki: {
    id: "nyryki",
    name: "Nyryki",
    difficulties: {
      [Difficulty.easy.id]: {
        ...Difficulty.easy,
        menaceLevel: 2,
        resources: 20,
        health: 20
      },
      [Difficulty.medium.id]: {
        ...Difficulty.medium,
        menaceLevel: 3,
        resources: 28,
        health: 25
      },
      [Difficulty.hard.id]: {
        ...Difficulty.hard,
        menaceLevel: 3,
        resources: 32,
        health: 30
      }
    }
  }
};

export default Bosses;
