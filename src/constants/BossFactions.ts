type FactionType = "basic" | "advanced";

export interface iFaction {
  id: string;
  name: string;
  type: FactionType;
}

const BossFactions: { [key: string]: iFaction } = {
  evilGoblins: {
    id: "evilGoblins",
    name: "Evil Goblins",
    type: "basic"
  },
  wildFaries: {
    id: "wildFaries",
    name: "Wild Faries",
    type: "basic"
  },
  undeadRealms: {
    id: "undeadRealms",
    name: "Undead Realms",
    type: "advanced"
  },
  spectralShamans: {
    id: "spectralShamans",
    name: "Spectral Shamans",
    type: "advanced"
  },
  shadeSlayers: {
    id: "shadeSlayers",
    name: "Shade Slayers",
    type: "advanced"
  }
};

export default BossFactions;
