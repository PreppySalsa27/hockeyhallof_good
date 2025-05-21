// Example data for inductees. Expand this array for more players!
const INDUCTEES = [
  {
    id: "bob_bassen",
    name: "Bob Bassen",
    position: "C",
    seasons: "1987-99",
    teams: ["NYI", "STL", "DAL", "CGY", "CHI"],
    games: 765,
    goals: 66,
    assists: 139,
    points: 205,
    pims: 584,
    blurb: "Legendary 4th line center and penalty killer, a fan favorite everywhere he went.",
    inductionYear: 2025,
    img: "https://www.hockeydb.com/ihdb/photos/bob-bassen-1997-98-2.jpg"
  },
  {
    id: "steve_smith",
    name: "Steve Smith",
    position: "D",
    seasons: "1984-01",
    teams: ["EDM", "CHI", "CGY"],
    games: 804,
    goals: 72,
    assists: 303,
    points: 375,
    pims: 2139,
    blurb: "Forever remembered for a playoff own-goal, but a rock-solid, physical defenseman with 3 Cups.",
    inductionYear: 2024,
    img: "https://www.hockeydb.com/ihdb/photos/steve-smith-1994-95-1.jpg"
  },
  // Add more inductees here!
];

// Utility to get the most recent inductee (highest inductionYear)
function getMostRecentInductee() {
  if (!INDUCTEES.length) return null;
  return INDUCTEES.reduce((latest, ind) => (ind.inductionYear > latest.inductionYear ? ind : latest), INDUCTEES[0]);
}

// For easy lookup by id
function getInducteeById(id) {
  return INDUCTEES.find(ind => ind.id === id) || null;
}
