// Example data for inductees. Expand this array for more players!
const INDUCTEES = [
  {
    id: "dany_heatley",
    name: "Dany Heatley",
    position: "LW",
    seasons: "2001-2015",
    teams: ["ATL", "OTT", "SJ", "MIN", "ANA" , "FLA"],
    games: 869,
    goals: 372,
    assists: 419,
    points: 791,
    pims: 620,
    blurb: "Dany Heatley, a dynamic scorer and two-time 50-goal star with the Ottawa Senators, has been enshrined in the Hockey Hall of Good. Known for his lethal shot and offensive flair, Heatley posted 372 goals and 791 points over 869 NHL games, while also shining on the international stage for Team Canada. Though injuries and off-ice issues impacted his later years, his impact on the ice was undeniable, securing his place as a memorable star of the 2000s.",
    inductionYear: 2025,
    img: "hhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hockeydb.com%2Fihdb%2Fstats%2Fpdisplay.php%3Fpid%3D49508&psig=AOvVaw2x8gVIyDNMm0_giNmwDque&ust=1749081134075000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOit9Y-51o0DFQAAAAAdAAAAABAE"
  },
  {
    id: "Dustin_Byfuglien",
    name: "Dustin Byfuglien",
    position: "LW/D",
    seasons: "2005-2019",
    teams: ["CHI", "ATL", "WPG"],
    games: 869,
    goals: 177,
    assists: 348,
    points: 525,
    pims: 1094,
    blurb: "Dustin Byfuglien, affectionately known as “Big Buff,” has been honored with induction into the Hockey Hall of Good. A versatile force on the ice, Byfuglien showcased his prowess both as a defenseman and forward throughout his 14-season NHL career. Drafted 245th overall by the Chicago Blackhawks in 2003, he defied expectations, amassing 177 goals and 348 assists over 869 games. Byfuglien played pivotal roles with the Chicago Blackhawks, Atlanta Thrashers, and Winnipeg Jets. Notably, he was instrumental in the Blackhawks’ 2010 Stanley Cup victory, becoming the first Black American-born player to achieve this feat . His dynamic play and leadership left an indelible mark on the sport, earning him a well-deserved place in the Hockey Hall of Good.",
    inductionYear: 2025,
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hockeydb.com%2Fihdb%2Fstats%2Fpdisplay.php%3Fpid%3D62465&psig=AOvVaw1clpkI3CpaaPXGE4o59Exs&ust=1749081209802000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPDsgbO51o0DFQAAAAAdAAAAABAE"
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
