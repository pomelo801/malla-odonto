const malla = [
  { nombre: "Introducción a la Odontología", semestre: 1, area: "Preclínica" },
  { nombre: "Biología Celular", semestre: 1, area: "Básica" },
  { nombre: "Química General y Orgánica", semestre: 1, area: "Básica" },
  { nombre: "Anatomía Humana", semestre: 1, area: "Básica" },
  { nombre: "Estrategias para el Aprendizaje", semestre: 1, area: "Integral" },
  // ... Continúa con el resto
];

const contenedor = document.getElementById("malla");

function renderMalla(filtro = "todas") {
  contenedor.innerHTML = "";
  for (let i = 1; i <= 12; i++) {
    const columna = document.createElement("div");
    columna.classList.add("columna");

    malla.filter(a => a.semestre === i && (filtro === "todas" || a.area === filtro))
         .forEach(asignatura => {
      const div = document.createElement("div");
      div.className = "asignatura";
      div.dataset.area = asignatura.area;
      div.innerText = asignatura.nombre;
      columna.appendChild(div);
    });

    contenedor.appendChild(columna);
  }
}

renderMalla();

document.getElementById("areaFilter").addEventListener("change", e => {
  renderMalla(e.target.value);
});
