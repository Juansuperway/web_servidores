const parametros = new URLSearchParams(window.location.search);

    const estacion = parametros.get("estacion") || "uat";
    const metrica = parametros.get("metrica") || "DISCOS";
    const configuracionMetrica = configuracionMetricas[metrica];
    if (!configuracionMetrica) {
    throw new Error(`La métrica "${metrica}" no está configurada.`);
}

document.getElementById("metricName").textContent = metrica;

document.getElementById("stationName").textContent =
    `Estación: ${estacion.toUpperCase()}`;

const closeButton = document.getElementById("closeButton");

closeButton.addEventListener("click", () => {
    window.history.back();
});



const disksTableHead = document.getElementById("disksTableHead");

function generarEncabezadoTabla() {
    const columnas = configuracionMetrica.columnas;

    const filaTitulos = document.createElement("tr");
    const filaFiltros = document.createElement("tr");

    filaFiltros.className = "filters-row";

    columnas.forEach((columna, indice) => {
        // Crear título de columna
        const thTitulo = document.createElement("th");
        thTitulo.textContent = columna.titulo;
        filaTitulos.appendChild(thTitulo);

        // Crear filtro de columna
        const thFiltro = document.createElement("th");
        const input = document.createElement("input");

        input.type = "text";
        input.dataset.column = indice;
        input.placeholder = `Filtrar ${columna.titulo.toLowerCase()}`;
        input.setAttribute("aria-label", input.placeholder);

        thFiltro.appendChild(input);
        filaFiltros.appendChild(thFiltro);
    });

    disksTableHead.replaceChildren(filaTitulos, filaFiltros);
}

generarEncabezadoTabla();

function obtenerDatosMetrica() {
    const datosPorMetrica = {
        DISCOS: datosDiscosPorEstacion,
        "CONEXIÓN": datosConexionPorEstacion,
        MEMORIA: datosMemoriaPorEstacion,
        "TEMPERATURA GPU": datosTemperaturaGpuPorEstacion,
        CÁMARAS: datosCamarasPorEstacion,
        "SERVICIOS IA": datosServiciosIaPorEstacion
    };

    return datosPorMetrica[metrica]?.[estacion] || [];
}

function mostrarDiscos() {
    disksTableBody.innerHTML = "";

    const discosEstacion = obtenerDatosMetrica();

    discosEstacion.forEach((disco) => {
        
        const fila = document.createElement("tr");

        configuracionMetrica.columnas.forEach((columna) => {
            const celda = document.createElement("td");
            const valor = disco[columna.campo] ?? "";

            if (columna.campo === "estado") {
                const etiqueta = document.createElement("span");
                etiqueta.className = `status-badge ${String(valor).toLowerCase()}`;
                etiqueta.textContent = String(valor).toUpperCase();
                celda.appendChild(etiqueta);
            } else {
                celda.textContent = valor;
            }

            fila.appendChild(celda);
        });


        disksTableBody.appendChild(fila);
    });
}

mostrarDiscos();


const generalSearch = document.getElementById("generalSearch");



function filtrarDiscos() {
    const busquedaGeneral = generalSearch.value.toLowerCase().trim();

    const filas = disksTableBody.querySelectorAll("tr");
    const columnFilters = document.querySelectorAll(".filters-row input");

    filas.forEach((fila) => {
        const textoFila = fila.textContent.toLowerCase();
        const coincideGeneral = textoFila.includes(busquedaGeneral);

        const coincideColumnas = Array.from(columnFilters).every((filtro) => {
            const columna = Number(filtro.dataset.column);
            const valorFiltro = filtro.value.toLowerCase().trim();
            const valorCelda = fila.cells[columna].textContent.toLowerCase();

            return valorCelda.includes(valorFiltro);
        });

        fila.style.display =
            coincideGeneral && coincideColumnas ? "" : "none";
    });
}

function activarFiltros() {
    const columnFilters = document.querySelectorAll(".filters-row input");

    columnFilters.forEach((filtro) => {
        filtro.addEventListener("input", filtrarDiscos);
    });

    generalSearch.addEventListener("input", filtrarDiscos);
}

activarFiltros();


