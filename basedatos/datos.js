// Lista que contiene la información de los elementos que
// se mostrarán en el carrusel de la página principal.

const elementos_carrusel = [
  {
    nombre: "Optimización de Perfiles en Meta y TikTok",
    descripcion: "Transformo tu perfil en una máquina de conversión. Bio persuasiva, highlights estratégicos, diseño profesional y configuración optimizada que convierte visitantes en seguidores y clientes.",
    imagen: "images/redes.jpg"
  },
  {
    nombre: "Contenido que Convierte y Vende",
    descripcion: "Creación de contenido orgánico persuasivo para crear comunidad",
    imagen: "images/contenido.png"
  },
  {
    nombre: "Publicidad Estratégica Meta & TikTok",
    descripcion: "Campañas publicitarias rentables con targeting preciso. Desde la creación del anuncio hasta la optimización de resultados, manejo tu presupuesto para maximizar el ROI.",
    imagen: "images/ads.jpg"
  }
];

// Para que la lista de categorias sea dinámica y no estática colocamos el siguiente script
const lista_categorias = [
    { 
    codigo: "101",
    nombre: "Identidad Digital",
    descripcion: "Optimización y creación de presencia online coherente y atractiva en redes sociales.",
    imagen: "images/identidad.jpg"
  },
  {
    codigo: "102",
    nombre: "Marketing de Contenidos",
    descripcion: "Estrategias de contenido que educan, entretienen y posicionan tu marca.",
    imagen: "images/marketing1.jpg"
  },
  {
    codigo: "103",
    nombre: "Administración de Campañas",
    descripcion: "Gestión de inversión publicitaria para maximizar resultados y crecimiento medible.",
    imagen: "images/catads.png"
  }
];

//Lista que contiene la información de los servicios que se mostrarán en la página de servicios
const lista_servicios = [
    {
        codigo: "201",
        nombre: "Identidad Digital para TikTok",
        descripcion: "Diseño y optimización de perfiles en TikTok para potenciar tu marca personal o negocio.",
        codigo_categoria: "101",
        imagen: "images/identidadtk.jpg",
        precio: 740000,
        contenido: [
            "Optimización de foto de perfil",
            "Diseño de biografía atractiva",
            "Configuración de enlaces estratégicos",
            "Recomendaciones de estilo visual"
        ]
    },
    {
        codigo: "202",
        nombre: "Identidad Digital para Instagram",
        descripcion: "Creación y optimización de tu identidad digital en Instagram para atraer clientes.",
        codigo_categoria: "101",
        imagen: "images/identidadig.jpg",
        precio: 740000,
        contenido: [
            "Optimización de la bio",
            "Plantillas de historias destacadas",
            "Paleta de colores personalizada",
            "Estrategia de hashtags inicial"
        ]
    },
    {
        codigo: "203",
        nombre: "Marketing de Contenidos en TikTok",
        descripcion: "Generación de contenido creativo que conecta y fideliza a tu audiencia en TikTok.",
        codigo_categoria: "102",
        imagen: "images/contenidotk.jpg",
        precio: 840000,
        contenido: [
            "Calendario de publicaciones",
            "Guiones para videos cortos",
            "Ideas de retos virales",
            "Métricas sugeridas para seguimiento"
        ]
    },
    {
        codigo: "204",
        nombre: "Marketing de Contenidos en Instagram",
        descripcion: "Planificación y publicación de contenido atractivo y efectivo para Instagram.",
        codigo_categoria: "102",
        imagen: "images/contenidoig.jpg",
        precio: 840000,
        contenido: [
            "Plan de contenido mensual",
            "Diseños de carruseles",
            "Reels con enfoque de conversión",
            "Plantillas de stories interactivas"
        ]
    },
    {
        codigo: "205",
        nombre: "Campañas Publicitarias en TikTok",
        descripcion: "Configuración y administración de campañas pagadas en TikTok Ads.",
        codigo_categoria: "103",
        imagen: "images/publicidadtk.jpg",
        precio: 940000,
        contenido: [
            "Configuración de píxel de TikTok",
            "Segmentación de audiencias",
            "Optimización de presupuesto",
            "Reporte de rendimiento mensual"
        ]
    },
    {
        codigo: "206",
        nombre: "Campañas Publicitarias en Instagram",
        descripcion: "Gestión profesional de campañas en Instagram Ads con optimización en tiempo real.",
        codigo_categoria: "103",
        imagen: "images/adsig.png",
        precio: 940000,
        contenido: [
            "Configuración de Meta Ads Manager",
            "Creación de públicos personalizados",
            "Análisis y optimización de anuncios",
            "Informe de resultados detallado"
        ]
    }
];

//Lsita que representa el carrrito de compra del usuario
let carrito = [];



