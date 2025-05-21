// inductees-table.js - All inductees sortable table

function createInducteesTable(data) {
  const columns = [
    { label: "Name", key: "name", sortable: true },
    { label: "Position", key: "position", sortable: false },
    { label: "Seasons", key: "seasons", sortable: false },
    { label: "Teams", key: "teams", sortable: false, render: row => row.teams.join(", ") },
    { label: "Games", key: "games", sortable: true },
    { label: "Goals", key: "goals", sortable: true },
    { label: "Assists", key: "assists", sortable: true },
    { label: "Points", key: "points", sortable: true },
    { label: "PIM", key: "pims", sortable: true },
    { label: "Inducted", key: "inductionYear", sortable: true }
  ];

  let sortKey = "name";
  let sortDir = 1; // 1 = asc, -1 = desc

  function renderTable(sortKey, sortDir) {
    let rows = [...data];
    const col = columns.find(c => c.key === sortKey);
    if (col && col.sortable) {
      rows.sort((a, b) => {
        let v1 = a[sortKey], v2 = b[sortKey];
        if (sortKey === "name") {
          v1 = v1.toLowerCase(); v2 = v2.toLowerCase();
        }
        return v1 > v2 ? sortDir : v1 < v2 ? -sortDir : 0;
      });
    }
    let ths = columns.map(c =>
      `<th${c.sortable ? ' tabindex="0"' : ''} data-key="${c.key}">
        ${c.label}
        ${c.sortable ? (sortKey === c.key ? (sortDir > 0 ? " ▲" : " ▼") : " ⇅") : ""}
      </th>`).join("");
    let trs = rows.map(row => `<tr>
      <td><a href="player.html?id=${row.id}" class="inductee-link">${row.name}</a></td>
      <td>${row.position}</td>
      <td>${row.seasons}</td>
      <td>${row.teams.join(", ")}</td>
      <td>${row.games}</td>
      <td>${row.goals}</td>
      <td>${row.assists}</td>
      <td>${row.points}</td>
      <td>${row.pims}</td>
      <td>${row.inductionYear}</td>
    </tr>`).join("");
    return `<table class="inductees-table">
      <thead><tr>${ths}</tr></thead>
      <tbody>${trs}</tbody>
    </table>`;
  }

  function attachSorting($table, cb) {
    $table.querySelectorAll("th[data-key]").forEach($th => {
      const key = $th.getAttribute("data-key");
      const col = columns.find(c => c.key === key);
      if (!col || !col.sortable) return;
      $th.addEventListener("click", () => {
        if (sortKey === key) sortDir = -sortDir;
        else { sortKey = key; sortDir = 1; }
        cb();
      });
      $th.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") $th.click();
      });
    });
  }

  return {
    renderTo: function(containerId) {
      const $c = document.getElementById(containerId);
      if(!$c) return;
      function rerender() {
        $c.innerHTML = renderTable(sortKey, sortDir);
        attachSorting($c.querySelector("table"), rerender);
      }
      rerender();
    }
  };
}

document.addEventListener("DOMContentLoaded", () => {
  createInducteesTable(INDUCTEES).renderTo("table-container");
});
