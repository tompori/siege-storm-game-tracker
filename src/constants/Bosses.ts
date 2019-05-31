import Difficulty from "./BossDifficulties";
import { iDifficulty } from "./BossDifficulties";

export interface iBoss {
  id: string;
  name: string;
  difficulties: iDifficulty[];
}

const Bosses: { [key: string]: iBoss } = {
  byloss: {
    id: "byloss",
    name: "Byloss",
    difficulties: [Difficulty.medium, Difficulty.hard, Difficulty.veryhard]
  },
  nyryki: {
    id: "nyryki",
    name: "Nyryki",
    difficulties: [Difficulty.easy, Difficulty.medium, Difficulty.hard]
  }
};

export default Bosses;
