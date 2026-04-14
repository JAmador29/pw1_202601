const planEstudios = {
    codigo: "IF01002",
    carrera: "Ingeniería en Ciencias de la Computación",
    bloques: [
        {
            bloque: "I",
            asignaturas: [
                { 
                    codigo: "ES101", 
                    nombre: "Español", 
                    creditos: 3, 
                    requisitos: [] 
                },
                { 
                    codigo: "MT101", 
                    nombre: "Matemáticas", 
                    creditos: 4, 
                    requisitos: [] 
                },
                { 
                    codigo: "IF112", 
                    nombre: "Introducción a las Ciencias de la Computación", 
                    creditos: 3, 
                    requisitos: [] 
                },
                { 
                    codigo: "SC101", 
                    nombre: "Sociología", 
                    creditos: 3, 
                    requisitos: [] 
                },
                { 
                    codigo: "FI101", 
                    nombre: "Filosofía", 
                    creditos: 3, 
                    requisitos: [] 
                },
                { 
                    codigo: "ESVU1", 
                    nombre: "Seminario de Iniciación", 
                    creditos: 1, 
                    requisitos: [] 
                }
            ]
        },
        {
            bloque: "II",
            asignaturas: [
                { 
                    codigo: "ES201", 
                    nombre: "Expresión Oral y Escrita", 
                    creditos: 3, 
                    requisitos: ["ES101"] 
                },
                { 
                    codigo: "MT201", 
                    nombre: "Pre Cálculo", 
                    creditos: 4, 
                    requisitos: ["MT101"] 
                },
                { 
                    codigo: "IF200", 
                    nombre: "Fundamentos y Lógica de Programación", 
                    creditos: 4, 
                    requisitos: ["IF112"] 
                },
                { 
                    codigo: "HS101", 
                    nombre: "Historia de Honduras", 
                    creditos: 3, 
                    requisitos: [] 
                },
                { 
                    codigo: "CR201", 
                    nombre: "El Hombre Frente a la Vida", 
                    creditos: 3, 
                    requisitos: ["FI101"] 
                },
                { 
                    codigo: "IDIN1", 
                    nombre: "Inglés (Principiante)", 
                    creditos: 0, 
                    requisitos: [] 
                },
                { 
                    codigo: "ESPF1", 
                    nombre: "Retiro de Padres de Familia", 
                    creditos: 0, 
                    requisitos: [] 
                }
            ]
        },
        {
            bloque: "III",
            asignaturas: [
                { 
                    codigo: "MT202", 
                    nombre: "Estadística I", 
                    creditos: 3, 
                    requisitos: ["MT101"] 
                },
                { 
                    codigo: "MT303", 
                    nombre: "Cálculo I", 
                    creditos: 4, 
                    requisitos: ["MT201"] 
                },
                { 
                    codigo: "IF214", 
                    nombre: "Programación Estructurada I", 
                    creditos: 4, 
                    requisitos: ["IF200"] 
                },
                { 
                    codigo: "IF213", 
                    nombre: "Estructuras Discretas", 
                    creditos: 3, 
                    requisitos: ["IF200"] 
                },
                { 
                    codigo: "IDIN2", 
                    nombre: "Inglés (Intermedio Bajo)", 
                    creditos: 0, 
                    requisitos: ["IDIN1"] 
                },
                { 
                    codigo: "IF394", 
                    nombre: "Diseño Gráfico", 
                    creditos: 3, 
                    requisitos: [] 
                }
            ]
        },
        {
            bloque: "IV",
            asignaturas: [
                { 
                    codigo: "AD302", 
                    nombre: "Métodos y Técnicas de Investigación", 
                    creditos: 3, 
                    requisitos: ["ES201"] 
                },
                { 
                    codigo: "MT401", 
                    nombre: "Cálculo II", 
                    creditos: 4, 
                    requisitos: ["MT303"] 
                },
                { 
                    codigo: "IF303", 
                    nombre: "Programación Estructurada II", 
                    creditos: 4, 
                    requisitos: ["IF214"] 
                },
                { 
                    codigo: "FS201", 
                    nombre: "Física I", 
                    creditos: 3, 
                    requisitos: ["MT201"] 
                },
                { 
                    codigo: "AD101", 
                    nombre: "Administración", 
                    creditos: 3, 
                    requisitos: [] 
                },
                { 
                    codigo: "IDIN3", 
                    nombre: "Inglés (Intermedio Alto)", 
                    creditos: 0, 
                    requisitos: ["IDIN2"] 
                },
                { 
                    codigo: "CNFS1", 
                    nombre: "Laboratorio de Física I", 
                    creditos: 0, 
                    requisitos: ["FS201"] 
                }
            ]
        },
        {
            bloque: "V",
            asignaturas: [
                { 
                    codigo: "IF322", 
                    nombre: "Base de Datos I", 
                    creditos: 3, 
                    requisitos: ["IF303"] 
                },
                { 
                    codigo: "CT201", 
                    nombre: "Contabilidad", 
                    creditos: 3, 
                    requisitos: [] 
                },
                { 
                    codigo: "IF325", 
                    nombre: "Prog. en Entornos de Desarrollo Visual", 
                    creditos: 3, 
                    requisitos: ["IF303"] 
                },
                { 
                    codigo: "IF319", 
                    nombre: "Principios de Electrónica", 
                    creditos: 3, 
                    requisitos: ["FS201"] 
                },
                { 
                    codigo: "MT204", 
                    nombre: "Matemáticas Financiera", 
                    creditos: 3, 
                    requisitos: ["MT101"] 
                },
                { 
                    codigo: "IDIN4", 
                    nombre: "Inglés (Avanzado)", 
                    creditos: 0, 
                    requisitos: ["IDIN3"] 
                }
            ]
        },
        {
            bloque: "VI",
            asignaturas: [
                { 
                    codigo: "IF327", 
                    nombre: "Bases de Datos II", 
                    creditos: 3, 
                    requisitos: ["IF322"] 
                },
                { 
                    codigo: "FI501", 
                    nombre: "Ética Profesional", 
                    creditos: 3, 
                    requisitos: ["FI101"] 
                },
                { 
                    codigo: "IF212", 
                    nombre: "Análisis y Diseño de Sistemas", 
                    creditos: 3, 
                    requisitos: ["IF322"] 
                },
                { 
                    codigo: "IF323", 
                    nombre: "Redes I", 
                    creditos: 3, 
                    requisitos: ["IF200"] 
                },
                { 
                    codigo: "IF324", 
                    nombre: "Circuitos Lógicos", 
                    creditos: 4, 
                    requisitos: ["IF319"] 
                },
                { 
                    codigo: "IDIN5", 
                    nombre: "Inglés (Vocabulario y Lectura Técnica)", 
                    creditos: 0, 
                    requisitos: ["IDIN4"] 
                },
                { 
                    codigo: "ESVU2", 
                    nombre: "Seminario de Madurez en la Vida Univ.", 
                    creditos: 1, 
                    requisitos: [] 
                }
            ]
        },
        {
            bloque: "VII",
            asignaturas: [
                { 
                    codigo: "IF342", 
                    nombre: "Bases de Datos Multidimensional", 
                    creditos: 3, 
                    requisitos: ["IF327"] 
                },
                { 
                    codigo: "IF340", 
                    nombre: "Programación Multiplataforma", 
                    creditos: 4, 
                    requisitos: ["IF325"] 
                },
                { 
                    codigo: "IF314", 
                    nombre: "Desarrollo de Software", 
                    creditos: 3, 
                    requisitos: ["IF303", "IF322"] 
                },
                { 
                    codigo: "IF328", 
                    nombre: "Redes II", 
                    creditos: 3, 
                    requisitos: ["IF323"] 
                },
                { 
                    codigo: "IF329", 
                    nombre: "Sistemas Automatizados", 
                    creditos: 3, 
                    requisitos: ["IF324"] 
                },
                { 
                    codigo: "IDIN6", 
                    nombre: "Inglés (Composición y Conversación)", 
                    creditos: 0, 
                    requisitos: ["IDIN5"] 
                }
            ]
        },
        {
            bloque: "VIII",
            asignaturas: [
                { 
                    codigo: "IF391", 
                    nombre: "Sistemas Inteligentes para Negocios", 
                    creditos: 3, 
                    requisitos: ["IF322", "MT202"] 
                },
                { 
                    codigo: "IF346", 
                    nombre: "Implementación de Sistemas de Software", 
                    creditos: 3, 
                    requisitos: ["IF314"] 
                },
                { 
                    codigo: "IF345", 
                    nombre: "Sistemas Operativos I", 
                    creditos: 3, 
                    requisitos: ["IF214", "IF324"] 
                },
                { 
                    codigo: "IF370", 
                    nombre: "Microcontroladores", 
                    creditos: 3, 
                    requisitos: ["IF324", "IF319"] 
                },
                { 
                    codigo: "BG205", 
                    nombre: "Ecología", 
                    creditos: 3, 
                    requisitos: [] 
                }
            ]
        },
        {
            bloque: "IX",
            asignaturas: [
                { 
                    codigo: "IF353", 
                    nombre: "Desarrollo de Portales Web I", 
                    creditos: 3, 
                    requisitos: ["IF325"] 
                },
                { 
                    codigo: "IF351", 
                    nombre: "Programación Móvil I", 
                    creditos: 3, 
                    requisitos: ["IF340"] 
                },
                { 
                    codigo: "AD104", 
                    nombre: "Gestión de la Calidad Total", 
                    creditos: 3, 
                    requisitos: ["AD101"] 
                },
                { 
                    codigo: "IF352", 
                    nombre: "Sistemas Operativos II", 
                    creditos: 3, 
                    requisitos: ["IF345"] 
                },
                { 
                    codigo: "IF381", 
                    nombre: "Seminario de Hardware y Electricidad", 
                    creditos: 3, 
                    requisitos: ["IF370"] 
                }
            ]
        },
        {
            bloque: "X",
            asignaturas: [
                { 
                    codigo: "IF357", 
                    nombre: "Desarrollo de Portales Web II", 
                    creditos: 3, 
                    requisitos: ["IF353"] 
                },
                { 
                    codigo: "IF355", 
                    nombre: "Programación Móvil II", 
                    creditos: 3, 
                    requisitos: ["IF351"] 
                },
                { 
                    codigo: "MT304", 
                    nombre: "Control Estadístico de la Calidad", 
                    creditos: 3, 
                    requisitos: ["MT202"] 
                },
                { 
                    codigo: "IF356", 
                    nombre: "Gestión y Estándares de TI", 
                    creditos: 3, 
                    requisitos: ["AD101"] 
                },
                { 
                    codigo: "CR501", 
                    nombre: "Doctrina Social de la Iglesia", 
                    creditos: 3, 
                    requisitos: [] 
                },
                { 
                    codigo: "ESVU3", 
                    nombre: "Seminario de Prep. a la Vida Profesional", 
                    creditos: 1, 
                    requisitos: [] 
                }
            ]
        },
        {
            bloque: "XI",
            asignaturas: [
                { 
                    codigo: "IF362", 
                    nombre: "Negocios Web", 
                    creditos: 3, 
                    requisitos: ["IF357"] 
                },
                { 
                    codigo: "IF347", 
                    nombre: "Programación de Negocios", 
                    creditos: 3, 
                    requisitos: ["IF340", "IF322"] 
                },
                { 
                    codigo: "AD402", 
                    nombre: "Planeación y Diseño de Modelo de Calidad", 
                    creditos: 3, 
                    requisitos: ["AD104"] 
                },
                { 
                    codigo: "IF360", 
                    nombre: "Seguridad Informática y Gestión de Riesgo", 
                    creditos: 3, 
                    requisitos: ["IF323", "IF352"] 
                },
                { 
                    codigo: "IF358", 
                    nombre: "Administración de Centros de Cómputo", 
                    creditos: 3, 
                    requisitos: ["IF352", "AD101"] 
                },
                { 
                    codigo: "FMTS1", 
                    nombre: "Trabajo Educativo Social", 
                    creditos: 0, 
                    requisitos: [] 
                }
            ]
        },
        {
            bloque: "XII",
            asignaturas: [
                { 
                    codigo: "IF361", 
                    nombre: "Seminario-Taller de Software", 
                    creditos: 3, 
                    requisitos: ["IF314", "IF346"] 
                },
                { 
                    codigo: "IF392", 
                    nombre: "Gestión de Proyectos Informáticos", 
                    creditos: 3, 
                    requisitos: ["AD101", "AD402"] 
                },
                { 
                    codigo: "IF350", 
                    nombre: "Big Data", 
                    creditos: 3, 
                    requisitos: ["IF342", "MT202"] 
                },
                { 
                    codigo: "IF380", 
                    nombre: "Auditoría de Sistemas de Información", 
                    creditos: 3, 
                    requisitos: ["IF346", "IF356"] 
                },
                { 
                    codigo: "IF393", 
                    nombre: "Excel Avanzado para Ingeniería", 
                    creditos: 3, 
                    requisitos: [] 
                }
            ]
        },
        {
            bloque: "XIII",
            asignaturas: [
                { 
                    codigo: "IF400.", 
                    nombre: "Práctica Profesional Supervisada", 
                    creditos: 0, 
                    requisitos: [] 
                }
            ]
        }
    ]
};

var mapaMaterias = {};    
var materiaSeleccionada = null;

function dibujarPlan() {
    var contenedor = document.getElementById("planflujo");
    if (!contenedor) return;
    

    contenedor.innerHTML = "";
    

    var header = document.createElement("H2");
    header.className = "plan_header";
    header.innerText = planEstudios.codigo + " - " + planEstudios.carrera;
    contenedor.appendChild(header);
    
    var sub = document.createElement("div");
    sub.className = "plan_sub";
    sub.innerText = " 13 bloques académicos (I al XIII) · Haz clic en una materia para ver prerrequisitos y materias que dependen de ella";
    contenedor.appendChild(sub);
    
    for (var b = 0; b < planEstudios.bloques.length; b++) {
        var bloque = planEstudios.bloques[b];
        var bloqueDiv = document.createElement("SECTION");
        bloqueDiv.className = "plan_bloque";
        
        var indiceDiv = document.createElement("DIV");
        indiceDiv.className = "plan_bloque_idx";
        indiceDiv.innerText = bloque.bloque;
        
        var asignaturasDiv = document.createElement("DIV");
        asignaturasDiv.className = "plan_bloque_asig";

        for (var a = 0; a < bloque.asignaturas.length; a++) {
            var asig = bloque.asignaturas[a];
            var asigDom = document.createElement("DIV");
            asigDom.className = "plan_asignatura";
            
            var codigoDom = document.createElement("DIV");
            codigoDom.innerText = asig.codigo;
            var descDom = document.createElement("DIV");
            descDom.innerText = asig.nombre + " (" + asig.creditos + " cr.)";
            
            asigDom.appendChild(codigoDom);
            asigDom.appendChild(descDom);
            asignaturasDiv.appendChild(asigDom);
            
            mapaMaterias[asig.codigo] = {
                nodo: asigDom,
                requisitosDOM: [],
                aperturaDOM: []
            };
        }
        
        bloqueDiv.appendChild(indiceDiv);
        bloqueDiv.appendChild(asignaturasDiv);
        contenedor.appendChild(bloqueDiv);
    }

    for (var b2 = 0; b2 < planEstudios.bloques.length; b2++) {
        var bloqueActual = planEstudios.bloques[b2];
        for (var a2 = 0; a2 < bloqueActual.asignaturas.length; a2++) {
            var materia = bloqueActual.asignaturas[a2];
            var info = mapaMaterias[materia.codigo];
            if (!info) continue;

            for (var r = 0; r < materia.requisitos.length; r++) {
                var reqCod = materia.requisitos[r];
                var reqInfo = mapaMaterias[reqCod];
                if (reqInfo) {
                    info.requisitosDOM.push(reqInfo.nodo);
                    reqInfo.aperturaDOM.push(info.nodo);
                }
            }
        }
    }

    for (var cod in mapaMaterias) {
        var item = mapaMaterias[cod];
        if (item && item.nodo) {
            item.nodo.addEventListener("click", (function(codigo) {
                return function() { resaltarMateria(codigo); };
            })(cod));
        }
    }
}

function resaltarMateria(codigo) {
    var actual = mapaMaterias[codigo];
    if (!actual) return;
    
    // Limpiar resaltado anterior
    if (materiaSeleccionada) {
        var anterior = materiaSeleccionada;
        anterior.nodo.classList.remove("plan_selected");
        for (var i = 0; i < anterior.requisitosDOM.length; i++) {
            anterior.requisitosDOM[i].classList.remove("plan_requisito");
        }
        for (var j = 0; j < anterior.aperturaDOM.length; j++) {
            anterior.aperturaDOM[j].classList.remove("plan_apertura");
        }
    }
    
    materiaSeleccionada = actual;
    materiaSeleccionada.nodo.classList.add("plan_selected");
    for (var k = 0; k < materiaSeleccionada.requisitosDOM.length; k++) {
        materiaSeleccionada.requisitosDOM[k].classList.add("plan_requisito");
    }
    for (var l = 0; l < materiaSeleccionada.aperturaDOM.length; l++) {
        materiaSeleccionada.aperturaDOM[l].classList.add("plan_apertura");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    dibujarPlan();
});