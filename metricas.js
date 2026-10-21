
const configuracionMetricas = {
    DISCOS: {
        nombre: "DISCOS",
        archivoDatos: "discos.js",
        umbralWarning: 80,
        umbralCritico: 90,
        datosPorEstacion: true,
        columnas: [
            { campo: "servidor", titulo: "SERVIDOR" },
            { campo: "disco", titulo: "DISCO" },
            { campo: "total", titulo: "TOTAL" },
            { campo: "usado", titulo: "USADO" },
            { campo: "libre", titulo: "LIBRE" },
            { campo: "uso", titulo: "USO" },
            { campo: "estado", titulo: "ESTADO" },
            { campo: "ultimoDato", titulo: "ÚLTIMO DATO" },
            { campo: "estadoOperador", titulo: "ESTADO OPERADOR" }
        ]
    },

    CONEXIÓN: {
        nombre: "CONEXIÓN",
        archivoDatos: "conexion.js",
        datosPorEstacion: true,

        columnas: [
            { campo: "servidor", titulo: "SERVIDOR" },
            { campo: "estado", titulo: "ESTADO" },
            { campo: "ultimaRespuesta", titulo: "ÚLTIMA RESPUESTA" },
            { campo: "latencia", titulo: "LATENCIA" },
            { campo: "ultimoDato", titulo: "ÚLTIMO DATO" }
        ]
    },

    MEMORIA: {
        nombre: "MEMORIA",
        archivoDatos: "memoria.js",
        datosPorEstacion: true,
        umbralWarning: 80,
        umbralCritico: 90,

        columnas: [
            { campo: "servidor", titulo: "SERVIDOR" },
            { campo: "total", titulo: "RAM TOTAL" },
            { campo: "usado", titulo: "RAM USADA" },
            { campo: "libre", titulo: "RAM LIBRE" },
            { campo: "uso", titulo: "USO" },
            { campo: "estado", titulo: "ESTADO" },
            { campo: "ultimoDato", titulo: "ÚLTIMO DATO" }
        ]
    },

    
    "TEMPERATURA GPU": {
        nombre: "TEMPERATURA GPU",
        archivoDatos: "temperatura-gpu.js",
        datosPorEstacion: true,
        columnas: [
            { campo: "servidor", titulo: "SERVIDOR" },
            { campo: "temperatura", titulo: "TEMPERATURA" },
            { campo: "usoGpu", titulo: "USO GPU" },
            { campo: "estado", titulo: "ESTADO" },
            { campo: "ultimoDato", titulo: "ÚLTIMO DATO" }
        ]
    },

    "CÁMARAS": {
        nombre: "CÁMARAS",
        archivoDatos: "camaras.js",
        datosPorEstacion: true,
        columnas: [
            { campo: "servidor", titulo: "SERVIDOR" },
            { campo: "camara", titulo: "CÁMARA" },
            { campo: "estado", titulo: "ESTADO" },
            { campo: "ultimoDato", titulo: "ÚLTIMO DATO" },
            { campo: "observaciones", titulo: "OBSERVACIONES" }
        ]
    },

    "SERVICIOS IA": {
        nombre: "SERVICIOS IA",
        archivoDatos: "servicios-ia.js",
        datosPorEstacion: true,
        columnas: [
            { campo: "servidor", titulo: "SERVIDOR" },
            { campo: "servicio", titulo: "SERVICIO" },
            { campo: "estado", titulo: "ESTADO" },
            { campo: "ultimoDato", titulo: "ÚLTIMO DATO" },
            { campo: "observaciones", titulo: "OBSERVACIONES" }
        ]
    }


};

