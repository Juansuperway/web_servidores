
/* DATOS FICTICIOS DE DISCOS POR ESTACIÓN */

const configuracionDiscos = configuracionMetricas.DISCOS;

function calcularEstadoDisco(uso) {
    const porcentaje = Number.parseFloat(uso);

    if (Number.isNaN(porcentaje)) {
        return "Desconocido";
    }

    if (porcentaje >= configuracionDiscos.umbralCritico) {
        return "Crítico";
    }

    if (porcentaje >= configuracionDiscos.umbralWarning) {
        return "WARNING";
    }

    return "OK";
}



const datosDiscosPorEstacion = {

    "desembarco-del-rey": [
        {
            servidor: "UAT-01",
            disco: "C:",
            total: "500 GB",
            usado: "320 GB",
            libre: "180 GB",
            uso: "64%",
            estado: "OK",
            ultimoDato: "2026-10-20 10:30:00",
            estadoOperador: "Validado"
        },
        {
            servidor: "UAT-01",
            disco: "D:",
            total: "1 TB",
            usado: "780 GB",
            libre: "220 GB",
            uso: "78%",
            estado: "OK",
            ultimoDato: "2026-10-20 10:30:00",
            estadoOperador: "Validado"
        },
        {
            servidor: "UAT-02",
            disco: "C:",
            total: "250 GB",
            usado: "230 GB",
            libre: "20 GB",
            uso: "92%",
            estado: "Crítico",
            ultimoDato: "2026-10-20 10:29:00",
            estadoOperador: "Pendiente"
        }
    ],

    invernalia: [
        {
            servidor: "CHM-01",
            disco: "C:",
            total: "500 GB",
            usado: "200 GB",
            libre: "300 GB",
            uso: "40%",
            estado: "OK",
            ultimoDato: "2026-10-20 10:30:00",
            estadoOperador: "Validado"
        },
        {
            servidor: "CHM-02",
            disco: "D:",
            total: "2 TB",
            usado: "1.8 TB",
            libre: "200 GB",
            uso: "90%",
            estado: "WARNING",
            ultimoDato: "2026-10-20 10:28:00",
            estadoOperador: "Pendiente"
        }
    ],

    "harrend-hall": [
        {
            servidor: "MGA-01",
            disco: "C:",
            total: "500 GB",
            usado: "250 GB",
            libre: "250 GB",
            uso: "50%",
            estado: "OK",
            ultimoDato: "2026-10-20 10:30:00",
            estadoOperador: "Validado"
        },
        {
            servidor: "MGA-02",
            disco: "D:",
            total: "2 TB",
            usado: "1.8 TB",
            libre: "200 GB",
            uso: "92%",
            estado: "WARNING",
            ultimoDato: "2026-10-20 10:28:00",
            estadoOperador: "Pendiente"
        }
    ],

    "bastion-de-tormentas": [
        {
            servidor: "SEV-01",
            disco: "C:",
            total: "250 GB",
            usado: "100 GB",
            libre: "150 GB",
            uso: "40%",
            estado: "OK",
            ultimoDato: "2026-10-20 10:30:00",
            estadoOperador: "Validado"
        },
        {
            servidor: "SEV-01",
            disco: "D:",
            total: "1 TB",
            usado: "600 GB",
            libre: "400 GB",
            uso: "60%",
            estado: "OK",
            ultimoDato: "2026-10-20 10:30:00",
            estadoOperador: "Validado"
        },
        {
            servidor: "SEV-02",
            disco: "C:",
            total: "500 GB",
            usado: "475 GB",
            libre: "25 GB",
            uso: "95%",
            estado: "Crítico",
            ultimoDato: "2026-10-20 10:29:00",
            estadoOperador: "Pendiente"
        }
    ],

    "rocadragon": [
        {
            servidor: "ATO-01",
            disco: "C:",
            total: "500 GB",
            usado: "350 GB",
            libre: "150 GB",
            uso: "70%",
            estado: "OK",
            ultimoDato: "2026-10-20 10:30:00",
            estadoOperador: "Validado"
        },
        {
            servidor: "ATO-02",
            disco: "D:",
            total: "1 TB",
            usado: "850 GB",
            libre: "150 GB",
            uso: "85%",
            estado: "WARNING",
            ultimoDato: "2026-10-20 10:27:00",
            estadoOperador: "Pendiente"
        }
    ],

    "los-gemelos": [
        {
            servidor: "VAL-01",
            disco: "C:",
            total: "500 GB",
            usado: "180 GB",
            libre: "320 GB",
            uso: "36%",
            estado: "OK",
            ultimoDato: "2026-10-20 10:30:00",
            estadoOperador: "Validado"
        },
        {
            servidor: "VAL-01",
            disco: "D:",
            total: "2 TB",
            usado: "1.2 TB",
            libre: "800 GB",
            uso: "60%",
            estado: "OK",
            ultimoDato: "2026-10-20 10:30:00",
            estadoOperador: "Validado"
        },
        {
            servidor: "VAL-02",
            disco: "C:",
            total: "250 GB",
            usado: "225 GB",
            libre: "25 GB",
            uso: "90%",
            estado: "WARNING",
            ultimoDato: "2026-10-20 10:28:00",
            estadoOperador: "Pendiente"
        }
    ],

    "altojardin": [
        {
            servidor: "BCN-01",
            disco: "C:",
            total: "500 GB",
            usado: "490 GB",
            libre: "10 GB",
            uso: "98%",
            estado: "Crítico",
            ultimoDato: "2026-10-20 10:29:00",
            estadoOperador: "Pendiente"
        },
        {
            servidor: "BCN-01",
            disco: "D:",
            total: "1 TB",
            usado: "700 GB",
            libre: "300 GB",
            uso: "70%",
            estado: "OK",
            ultimoDato: "2026-10-20 10:30:00",
            estadoOperador: "Validado"
        },
        {
            servidor: "BCN-02",
            disco: "C:",
            total: "250 GB",
            usado: "210 GB",
            libre: "40 GB",
            uso: "84%",
            estado: "WARNING",
            ultimoDato: "2026-10-20 10:26:00",
            estadoOperador: "Pendiente"
        }
    ],

    "server-train": [
        {
            servidor: "TRAIN-01",
            disco: "C:",
            total: "1 TB",
            usado: "630 GB",
            libre: "370 GB",
            uso: "63%",
            estado: "OK",
            ultimoDato: "2026-10-20 10:30:00",
            estadoOperador: "Validado"
        },
        {
            servidor: "TRAIN-01",
            disco: "D:",
            total: "2 TB",
            usado: "1.7 TB",
            libre: "300 GB",
            uso: "85%",
            estado: "WARNING",
            ultimoDato: "2026-10-20 10:28:00",
            estadoOperador: "Pendiente"
        },
        {
            servidor: "TRAIN-02",
            disco: "C:",
            total: "500 GB",
            usado: "475 GB",
            libre: "25 GB",
            uso: "95%",
            estado: "Crítico",
            ultimoDato: "2026-10-20 10:25:00",
            estadoOperador: "Pendiente"
        }
    ]

};


Object.values(datosDiscosPorEstacion).forEach((discos) => {
    discos.forEach((disco) => {
        disco.estado = calcularEstadoDisco(disco.uso);
    });
});

console.log(
    "Datos ficticios de discos preparados:",
    datosDiscosPorEstacion
);
