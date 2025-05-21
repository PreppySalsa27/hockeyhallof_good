// main.js - Home page logic

document.addEventListener("DOMContentLoaded", () => {
  const recent = getMostRecentInductee();
  const $recent = document.getElementById("recent-inductee");
  if (recent && $recent) {
    $recent.innerHTML = `
      <h2>Most Recent Inductee: <a href="player.html?id=${recent.id}" class="inductee-link">${recent.name}</a></h2>
      <div class="inductee-blurb">
        <img src="${recent.img}" alt="${recent.name}" style="float:right;max-width:110px;border-radius:8px;box-shadow:0 2px 8px #2356a81a;margin-left:1.5rem;margin-bottom:1rem;">
        <strong>Position:</strong> ${recent.position} &nbsp; <strong>Seasons:</strong> ${recent.seasons}<br>
        <strong>Teams:</strong> ${recent.teams.join(", ")}<br>
        <strong>Career:</strong> ${recent.games} GP, ${recent.goals} G, ${recent.assists} A, ${recent.points} P, ${recent.pims} PIM<br>
        <p>${recent.blurb}</p>
        <span style="color:#2356a8;font-weight:500;">Inducted: ${recent.inductionYear}</span>
      </div>
    `;
  }
});
