export interface iPlayerFaction {
  id: string;
  name: string;
}

const PlayerFactions: { [key: string]: iPlayerFaction } = {
  seraphia: {
    id: "seraphia",
    name: "Seraphia"
  },
  styxia: {
    id: "styxia",
    name: "Styxia"
  },
  ysra: {
    id: "ysra",
    name: "Ysra"
  },
  khunglai: {
    id: "khunglai",
    name: "Khung'lai"
  },
  gunslingers: {
    id: "gunslingers",
    name: "Gunslingers"
  },
  frostGiants: {
    id: "frostGiants",
    name: "Frost Giants"
  }
};

export default PlayerFactions;
