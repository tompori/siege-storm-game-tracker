type FactionType = "basic" | "advanced";

export interface iBossFaction {
  id: string;
  name: string;
  type: FactionType;
}

const BossFactions: { [key: string]: iBossFaction } = {
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
