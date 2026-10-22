/* DATOS DE LAS ESTACIONES */

const estaciones = [

    {
        id: "desembarco-del-rey",
        nombre: "Desemarco del Rey",
        descripcion: "Entorno de validación",
        estado: "critical",

        metricas: [
            {
                nombre: "CONEXIÓN",
                valor: "2/2",
                etiqueta: "OK",
                estado: "ok",
                icono: "cable"
            },

            {
                nombre: "DISCOS",
                valor: "OK",
                etiqueta: "Almacenamiento",
                estado: "ok",
                icono: "database"
            },

            {
                nombre: "MEMORIA",
                valor: "OK",
                etiqueta: "RAM",
                estado: "ok",
                icono: "memory-stick"
            },

            {
                nombre: "TEMPERATURA GPU",
                valor: "64°C",
                etiqueta: "Normal",
                estado: "ok",
                icono: "thermometer"
            },

            {
                nombre: "CÁMARAS",
                valor: "1",
                etiqueta: "Incidencia",
                estado: "critical",
                icono: "cctv"
            },

            {
                nombre: "SERVICIOS IA",
                valor: "OK",
                etiqueta: "Servicios activos",
                estado: "info",
                icono: "cpu-ai"
            }

        ]
    },


    {
        id: "invernalia",
        nombre: "Invernalia",
        descripcion: "Eje Invernalia",
        estado: "info",

        metricas: [

            {
                nombre: "CONEXIÓN",
                valor: "2/2",
                etiqueta: "OK",
                estado: "ok",
                icono: "cable"
            },

            {
                nombre: "DISCOS",
                valor: "OK",
                etiqueta: "Normal",
                estado: "ok",
                icono: "database"
            },

            {
                nombre: "MEMORIA",
                valor: "42%",
                etiqueta: "RAM",
                estado: "ok",
                icono: "memory-stick"
            },

            {
                nombre: "TEMPERATURA GPU",
                valor: "58°C",
                etiqueta: "Normal",
                estado: "ok",
                icono: "thermometer"
            },

            {
                nombre: "CÁMARAS",
                valor: "OK",
                etiqueta: "Activas",
                estado: "ok",
                icono: "cctv"
            },

            {
                nombre: "SERVICIOS IA",
                valor: "OK",
                etiqueta: "Activos",
                estado: "info",
                icono: "cpu-ai"
            }

        ]
    },


    {
        id: "harrend-hall",
        nombre: "Harrend Hall",
        descripcion: "Eje Harrend Hall",
        estado: "critical",

        metricas: [

            {
                nombre: "CONEXIÓN",
                valor: "1/2",
                etiqueta: "Crítico",
                estado: "critical",
                icono: "cable"
            },

            {
                nombre: "DISCOS",
                valor: "OK",
                etiqueta: "Normal",
                estado: "ok",
                icono: "database"
            },

            {
                nombre: "MEMORIA",
                valor: "51%",
                etiqueta: "RAM",
                estado: "ok",
                icono: "memory-stick"
            },

            {
                nombre: "TEMPERATURA GPU",
                valor: "61°C",
                etiqueta: "Normal",
                estado: "ok",
                icono: "thermometer"
            },

            {
                nombre: "CÁMARAS",
                valor: "OK",
                etiqueta: "Activas",
                estado: "ok",
                icono: "cctv"
            },

            {
                nombre: "SERVICIOS IA",
                valor: "OK",
                etiqueta: "Activos",
                estado: "info",
                icono: "cpu-ai"
            }

        ]
    },


    {
        id: "bastion-de-tormentas",
        nombre: "Bastion de Tormentas",
        descripcion: "Eje Bastion de Tormentas",
        estado: "info",

        metricas: [

            {
                nombre: "CONEXIÓN",
                valor: "2/2",
                etiqueta: "OK",
                estado: "ok",
                icono: "cable"
            },

            {
                nombre: "DISCOS",
                valor: "OK",
                etiqueta: "Normal",
                estado: "ok",
                icono: "database"
            },

            {
                nombre: "MEMORIA",
                valor: "47%",
                etiqueta: "RAM",
                estado: "ok",
                icono: "memory-stick"
            },

            {
                nombre: "TEMPERATURA GPU",
                valor: "59°C",
                etiqueta: "Normal",
                estado: "ok",
                icono: "thermometer"
            },

            {
                nombre: "SERVICIOS IA",
                valor: "OK",
                etiqueta: "Activos",
                estado: "info",
                icono: "cpu-ai"
            }

        ]
    },


    {
        id: "rocadragon",
        nombre: "Rocadragon",
        descripcion: "Eje Rocadragon",
        estado: "ok",

        metricas: [

            {
                nombre: "CONEXIÓN",
                valor: "2/2",
                etiqueta: "OK",
                estado: "ok",
                icono: "cable"
            },

            {
                nombre: "DISCOS",
                valor: "OK",
                etiqueta: "Normal",
                estado: "ok",
                icono: "database"
            },

            {
                nombre: "MEMORIA",
                valor: "38%",
                etiqueta: "RAM",
                estado: "ok",
                icono: "memory-stick"
            },

            {
                nombre: "TEMPERATURA GPU",
                valor: "57°C",
                etiqueta: "Normal",
                estado: "ok",
                icono: "thermometer"
            },

            {
                nombre: "CÁMARAS",
                valor: "OK",
                etiqueta: "Activas",
                estado: "ok",
                icono: "cctv"
            }

        ]
    },


    {
        id: "los-gemelos",
        nombre: "Los Gemelos",
        descripcion: "Eje Los Gemelos",
        estado: "info",

        metricas: [

            {
                nombre: "CONEXIÓN",
                valor: "2/2",
                etiqueta: "OK",
                estado: "ok",
                icono: "cable"
            },

            {
                nombre: "DISCOS",
                valor: "OK",
                etiqueta: "Normal",
                estado: "ok",
                icono: "database"
            },

            {
                nombre: "MEMORIA",
                valor: "44%",
                etiqueta: "RAM",
                estado: "ok",
                icono: "memory-stick"
            },

            {
                nombre: "TEMPERATURA GPU",
                valor: "62°C",
                etiqueta: "Normal",
                estado: "ok",
                icono: "thermometer"
            },

            {
                nombre: "SERVICIOS IA",
                valor: "OK",
                etiqueta: "Activos",
                estado: "info",
                icono: "cpu-ai"
            }

        ]
    },


    {
        id: "altojardin",
        nombre: "Altojardin",
        descripcion: "Eje Altojardin",
        estado: "critical",

        metricas: [

            {
                nombre: "CONEXIÓN",
                valor: "0/2",
                etiqueta: "Crítico",
                estado: "critical",
                icono: "cable"
            },

            {
                nombre: "DISCOS",
                valor: "OK",
                etiqueta: "Normal",
                estado: "ok",
                icono: "database"
            },

            {
                nombre: "MEMORIA",
                valor: "68%",
                etiqueta: "RAM",
                estado: "ok",
                icono: "memory-stick"
            },

            {
                nombre: "TEMPERATURA GPU",
                valor: "66°C",
                etiqueta: "Normal",
                estado: "ok",
                icono: "thermometer"
            },

            {
                nombre: "CÁMARAS",
                valor: "1",
                etiqueta: "Incidencia",
                estado: "critical",
                icono: "cctv"
            },

            {
                nombre: "SERVICIOS IA",
                valor: "OK",
                etiqueta: "Activos",
                estado: "info",
                icono: "cpu-ai"
            }

        ]
    },


    {
        id: "server-train",
        nombre: "Server train",
        descripcion: "Server train",
        estado: "warning",

        metricas: [

            {
                nombre: "CONEXIÓN",
                valor: "95s",
                etiqueta: "Warning",
                estado: "warning",
                icono: "cable"
            },

            {
                nombre: "DISCOS",
                valor: "OK",
                etiqueta: "Normal",
                estado: "ok",
                icono: "database"
            },

            {
                nombre: "MEMORIA",
                valor: "63%",
                etiqueta: "Normal",
                estado: "ok",
                icono: "memory-stick"
            },

            {
                nombre: "TEMPERATURA GPU",
                valor: "69°C",
                etiqueta: "Normal",
                estado: "ok",
                icono: "thermometer"
            },

            {
                nombre: "SERVICIOS IA",
                valor: "OK",
                etiqueta: "Activos",
                estado: "info",
                icono: "cpu-ai"
            }

        ]
    }

];


/* DOM ELEMENTS */

const stationList = document.getElementById("stationList");

const stationDetail = document.getElementById("stationDetail");

const stationCount =
    document.getElementById("stationCount");

/* ICONO TREN */

function crearIconoTren() {

    return `
        <span class="train-icon"></span>
        `;
}

/* ICONO MÉTRICA */



function crearIconoMetrica(icono) {

    const iconos = {
        "cable": "cable",
        "database": "database",
        "memory-stick": "memory-stick",
        "thermometer": "thermometer",
        "cctv": "cctv",
        "cpu-ai": "cpu-ai"
    };

    const nombreIcono = iconos[icono];

    if (!nombreIcono) {
        return "";
    }

    return `
        <div class="metric-icon">
            <i data-lucide="${nombreIcono}"></i>
        </div>
    `;
}



/* CREAR ITEM DE ESTACION */

function crearItemEstacion(estacion) {

    const button = document.createElement("button");

    button.type = "button";

    button.className = `station-item ${estacion.estado}`;

    button.dataset.id = estacion.id;

    button.innerHTML = `
    
        <div class="station-status-icon">
            ${crearIconoTren()}
        </div>
            
        
        <div class="station-item-info">

            <div class="station-item-name">
                ${estacion.nombre}
            </div>

            <div class="station-item-description">
                ${estacion.descripcion}
            </div>
        
        </div>

        <span class="station-statur-dot"></span>

    `;

    button.addEventListener(
        "click",
        () => seleccionarEstacion(estacion.id)
    );


    return button;
}

/* CREAR METRICAS*/

function crearMetrica(metrica) {

    const elemento = 
    document.createElement("article");

    elemento.className = 
        `metric ${metrica.estado || ""}`;

    
    elemento.innerHTML = `

        <div class="metric-header">

            <span class="metric-title">
                ${metrica.nombre}
            </span>

            <span class="metric-status"></span>

        </div>

        <div class="metric-value">
            ${metrica.valor}
        </div>

        <div class = "metric-label">
            ${metrica.etiqueta}
        </div>

        ${crearIconoMetrica(metrica.icono)}
    `;

    if ([
            "CONEXIÓN",
            "DISCOS",
            "MEMORIA",
            "TEMPERATURA GPU",
            "CÁMARAS",
            "SERVICIOS IA"
        ].includes(metrica.nombre.toUpperCase())) {

    elemento.style.cursor = "pointer";

    elemento.addEventListener("click", () => {
        const estacion = estacionActual.id;

        const nombreMetrica = metrica.nombre.toUpperCase();
        const url = `detalle-discos.html?estacion=${encodeURIComponent(estacion)}&metrica=${encodeURIComponent(nombreMetrica)}`;

        window.location.href = url;
    });
}
    return elemento

}


/* RENDERIZAR DETALLE */

function renderizarDetalle(estacion) {

    stationDetail.innerHTML = "";

    const header = document.createElement("header");

    header.className = "detail-header";

    header.innerHTML = `
        
        <div class="detail-heading">

            <div class="detail-station-icon ${estacion.estado}">
                ${crearIconoTren()}
            </div>

            <div class="detail-title">

                <h2>
                    ${estacion.nombre}
                </h2>

                <p>
                    ${estacion.descripcion}
                </p>
            
            </div>
        
        </div>

        <div class="detail-status ${estacion.estado}">

            <span class="detail-status-dot"></span>

            ${obtenerNombreEstado(estacion.estado)}

        </div>
    `;

    const metricsHeader =
        document.createElement("div");

    metricsHeader.className =
        "metrics-header";


    metricsHeader.innerHTML = `

        <h3>
            INDICADORES DE MONITORIZACIÓN
        </h3>

        <span>
            ${estacion.metricas.length} métricas
        </span>

    `;

    const metricsGrid = document.createElement("div");

    metricsGrid.className = "metrics-grid";

    estacion.metricas.forEach(metrica => {

        metricsGrid.appendChild(
            crearMetrica(metrica)
        );
    });

    stationDetail.appendChild(header);

    stationDetail.appendChild(metricsHeader);

    stationDetail.appendChild(metricsGrid);

    lucide.createIcons();

}

/* NOMBRE DEL ESTADO */

function obtenerNombreEstado(estado) {

    switch (estado) {
            
        case "critical":
            return "CRÍTICO";
            
        case "warning":
            return "WARNING";

        case "info":
            return "INFORMACIÓN";

        case "ok":
        default:
            return "OK";
    }
}



/* SELECCIONAR ESTACION */
let estacionActual = null;

function seleccionarEstacion(id) {

    
    const estacion = estaciones.find(item => item.id === id);
    

    if (!estacion) {
        return;
    }

    const items = document.querySelectorAll(".station-item");

    items.forEach(item => {

        item.classList.remove(
            "selected"
        );
    });

    const selected = document.querySelector(`.station-item[data-id="${id}"]`);

    if (selected) {

        selected.classList.add(
            "selected"
        )
    }
    estacionActual = estacion;
    renderizarDetalle(estacion);
}

function renderizarEstaciones() {
    stationList.innerHTML = "";

    stationCount.textContent = 
        estaciones.length;

    estaciones.forEach(estacion => {

        const item = 
            crearItemEstacion(estacion);

        stationList.appendChild(item);
    });

    seleccionarEstacion(estaciones[0].id);
}


document.addEventListener(
    "DOMContentLoaded",
    renderizarEstaciones
);

function actualizarFecha() {
    const elementoFecha = document.getElementById("ultima-actualizacion");

    if (!elementoFecha) return;

    const ahora = new Date();

    elementoFecha.textContent = ahora.toLocaleString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
}

actualizarFecha();

