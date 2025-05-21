// player-page.js - Show player details

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

document.addEventListener("DOMContentLoaded", () => {
  const id = getQueryParam("id");
  const $sec = document.getElementById("player-section");
  if (!id || !$sec) {
    $sec.innerHTML = "<p>Inductee not found.</p>";
    return;
  }
  const ind = getInducteeById(id);
  if (!ind) {
    $sec.innerHTML = "<p>Inductee not found.</p>";
    return;
  }
  document.title = `${ind.name} | Inductee | Hockey Hall of Good`;
  $sec.innerHTML = `
    <div class="site-blurb">
      <h1>${ind.name}</h1>
      <img src="${ind.img}" alt="${ind.name}" style="max-width:180px;border-radius:10px;float:right;margin-left:2rem;box-shadow:0 2px 10px #2356a81a;">
      <strong>Position:</strong> ${ind.position} <br>
      <strong>Seasons:</strong> ${ind.seasons} <br>
      <strong>Teams:</strong> ${ind.teams.join(", ")} <br>
      <strong>Career:</strong> ${ind.games} GP, ${ind.goals} G, ${ind.assists} A, ${ind.points} P, ${ind.pims} PIM <br>
      <span style="color:#2356a8;font-weight:500;">Inducted: ${ind.inductionYear}</span>
      <hr>
      <p style="max-width:500px;">${ind.blurb}</p>
      <p><a href="inductees.html" class="button">Back to All Inductees</a></p>
    </div>
  `;
});
