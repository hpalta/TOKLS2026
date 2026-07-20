module.exports = [
  {
    id: "sci_21",
    subject: "science",
    station: "Músculos",
    type: "label",
    context: "El entrenador de atletismo le mostró a Susana un dibujo para explicarle qué músculos usa al correr.",
    prompt: "Etiqueta los músculos en el dibujo.",
    svg: `<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border-radius:10px; max-height:400px; display:block; margin:auto;">
      <!-- Runner Profile -->
      <!-- Head -->
      <circle cx="120" cy="40" r="20" fill="#f5cba7"/>
      <path d="M 110 20 C 130 10, 150 30, 130 50 Z" fill="#2c3e50"/>

      <!-- Torso (Showing abs area) -->
      <path d="M 110 60 C 130 60, 140 100, 130 130 C 100 130, 90 100, 100 60 Z" fill="#f5cba7"/>
      <!-- Abs details -->
      <rect x="110" y="80" width="12" height="8" rx="2" fill="#e67e22" opacity="0.5"/>
      <rect x="110" y="90" width="12" height="8" rx="2" fill="#e67e22" opacity="0.5"/>
      <rect x="110" y="100" width="12" height="8" rx="2" fill="#e67e22" opacity="0.5"/>
      <rect x="110" y="110" width="12" height="8" rx="2" fill="#e67e22" opacity="0.5"/>

      <!-- Left Arm (Front) showing biceps -->
      <path d="M 105 65 C 100 90, 80 110, 80 110 L 65 95 C 80 80, 85 70, 105 65" fill="#e67e22"/>
      <!-- Biceps highlight -->
      <path d="M 85 75 C 95 85, 100 100, 90 105 Z" fill="#d35400"/>
      <!-- Lower arm -->
      <line x1="72" y1="102" x2="60" y2="70" stroke="#f5cba7" stroke-width="12" stroke-linecap="round"/>
      <circle cx="58" cy="65" r="8" fill="#f5cba7"/>
      
      <!-- Right Arm (Back) -->
      <line x1="125" y1="65" x2="150" y2="100" stroke="#e67e22" stroke-width="14" stroke-linecap="round"/>
      <line x1="150" y1="100" x2="160" y2="130" stroke="#f5cba7" stroke-width="12" stroke-linecap="round"/>
      
      <!-- Shorts -->
      <path d="M 100 120 C 130 120, 140 140, 130 160 L 95 160 Z" fill="#34495e"/>
      
      <!-- Right Leg (Back) -->
      <line x1="110" y1="150" x2="80" y2="200" stroke="#e67e22" stroke-width="16" stroke-linecap="round"/>
      <line x1="80" y1="200" x2="110" y2="240" stroke="#f5cba7" stroke-width="14" stroke-linecap="round"/>
      
      <!-- Left Leg (Front) showing calf (gemelo) -->
      <line x1="120" y1="150" x2="145" y2="200" stroke="#e67e22" stroke-width="18" stroke-linecap="round"/>
      <path d="M 135 200 C 120 220, 120 250, 135 270 L 150 270 C 160 250, 160 220, 150 200 Z" fill="#f5cba7"/>
      <path d="M 140 210 C 130 230, 130 240, 145 250 Z" fill="#d35400"/>
      <path d="M 135 270 L 160 270 L 165 285 L 130 285 Z" fill="#e74c3c"/>

      <!-- Pointers -->
      <!-- Bíceps -->
      <circle cx="90" cy="90" r="4" fill="#e74c3c"/>
      <line x1="90" y1="90" x2="40" y2="90" stroke="#e74c3c" stroke-width="2" stroke-dasharray="4"/>
      
      <!-- Abdominal -->
      <circle cx="115" cy="100" r="4" fill="#e74c3c"/>
      <line x1="115" y1="100" x2="175" y2="100" stroke="#e74c3c" stroke-width="2" stroke-dasharray="4"/>
      
      <!-- Gemelo -->
      <circle cx="135" cy="230" r="4" fill="#e74c3c"/>
      <line x1="135" y1="230" x2="70" y2="230" stroke="#e74c3c" stroke-width="2" stroke-dasharray="4"/>
    </svg>`,
    labels: [
      { word: "Bíceps", x: 20, y: 30 },
      { word: "Abdominal", x: 87.5, y: 33.3 },
      { word: "Gemelo", x: 35, y: 76.6 }
    ],
    explain: "El bíceps está en el brazo, los abdominales en el vientre y los gemelos en la parte baja de la pierna."
  },
  {
    id: "sci_22",
    subject: "science",
    station: "Articulaciones",
    type: "true_false",
    context: null,
    prompt: "La rodilla es una articulación fija que no se puede mover.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explain: "La rodilla es una articulación móvil muy importante para caminar y saltar."
  },
  {
    id: "sci_23",
    subject: "science",
    station: "Huesos",
    type: "multiple",
    context: "El doctor le tomó una radiografía a Lucas porque se lastimó jugando.",
    prompt: "¿De qué color se ven los huesos en una radiografía?",
    options: ["Negros", "Blancos", "Rojos"],
    correctAnswer: "Blancos",
    explain: "En las radiografías, los materiales densos como los huesos bloquean los rayos y se ven de color blanco."
  },
  {
    id: "sci_24",
    subject: "science",
    station: "Músculos",
    type: "match",
    context: null,
    prompt: "Relaciona el músculo con su ubicación.",
    pairs: [
      { id: "m3", left: "Pectorales", right: "Pecho" },
      { id: "m4", left: "Glúteos", right: "Parte trasera / Cola" },
      { id: "m5", left: "Bíceps", right: "Brazo" }
    ],
    explain: "Los pectorales están en el pecho, los glúteos atrás, y los bíceps en los brazos."
  },
  {
    id: "sci_25",
    subject: "science",
    station: "Huesos",
    type: "open",
    context: "Un bebé recién nacido parece muy blandito.",
    prompt: "¿Crees que los bebés tienen más o menos huesos que los adultos? ¿Por qué?",
    explain: "Los bebés tienen más piezas óseas (alrededor de 300) que se van fusionando a medida que crecen, hasta llegar a 206 en un adulto."
  },
  {
    id: "sci_26",
    subject: "science",
    station: "Anatomía",
    type: "true_false",
    context: null,
    prompt: "El calcio hace que nuestros huesos sean débiles y se rompan fácil.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explain: "Al contrario, el calcio es el mineral que hace a los huesos duros y resistentes."
  },
  {
    id: "sci_27",
    subject: "science",
    station: "Músculos",
    type: "multiple",
    context: "Cuando hacemos ejercicio sudamos y nuestro corazón late rápido.",
    prompt: "¿El corazón es un hueso o un músculo?",
    options: ["Es un hueso", "Es un músculo", "Es una articulación"],
    correctAnswer: "Es un músculo",
    explain: "El corazón es un músculo muy especial que late sin parar para bombear sangre."
  },
  {
    id: "sci_28",
    subject: "science",
    station: "Huesos",
    type: "multiple",
    context: null,
    prompt: "¿Qué parte del esqueleto protege la médula espinal (los nervios de la espalda)?",
    options: ["El cráneo", "La columna vertebral", "Las costillas"],
    correctAnswer: "La columna vertebral",
    explain: "La columna vertebral es una torre de huesitos que protege la médula espinal y nos permite mantenernos derechos."
  },
  {
    id: "sci_29",
    subject: "science",
    station: "Cuidado",
    type: "true_false",
    context: "Juan se sienta encorvado frente a la computadora todo el día.",
    prompt: "Tener una mala postura al sentarse puede lastimar la columna vertebral.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explain: "Es importante sentarse derecho para que nuestra columna no se deforme ni nos duela la espalda."
  },
  {
    id: "sci_30",
    subject: "science",
    station: "Articulaciones",
    type: "match",
    context: null,
    prompt: "Une cada parte del cuerpo con el tipo de articulación que tiene.",
    pairs: [
      { id: "a1", left: "Hombro", right: "Móvil (mucho movimiento)" },
      { id: "a2", left: "Cráneo", right: "Fija (ningún movimiento)" },
      { id: "a3", left: "Columna", right: "Semimóvil (poco movimiento)" }
    ],
    explain: "El hombro puede girar mucho, la columna se dobla un poco, y el cráneo no se mueve."
  },
  {
    id: "sci_31",
    subject: "science",
    station: "Músculos",
    type: "open",
    context: "Si cierras los ojos muy fuerte y luego sonríes...",
    prompt: "¿Qué órganos estás usando en tu cara para hacer estas expresiones?",
    explain: "Estás usando los músculos de la cara (músculos faciales), que nos permiten hacer toda clase de gestos."
  },
  {
    id: "sci_32",
    subject: "science",
    station: "Huesos",
    type: "true_false",
    context: null,
    prompt: "Los huesos están vivos, crecen y pueden sanar si se rompen.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explain: "Aunque parecen piedras muertas, los huesos están vivos: reciben sangre, crecen y pueden soldarse si se fracturan."
  },
  {
    id: "sci_33",
    subject: "science",
    station: "Anatomía",
    type: "multiple",
    context: "Para saltar la cuerda, usamos casi todo nuestro cuerpo.",
    prompt: "¿Qué sistema trabaja en equipo con los huesos y articulaciones para poder saltar?",
    options: ["El sistema digestivo", "El sistema muscular", "El sistema respiratorio"],
    correctAnswer: "El sistema muscular",
    explain: "El sistema muscular y el sistema óseo (huesos y articulaciones) trabajan juntos como el sistema locomotor."
  },
  {
    id: "sci_34",
    subject: "science",
    station: "Músculos",
    type: "true_false",
    context: "El estómago se mueve para mezclar la comida que tragamos.",
    prompt: "El estómago hace movimientos voluntarios que nosotros controlamos.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explain: "Los movimientos del estómago son involuntarios, nuestro cerebro los controla sin que nos demos cuenta."
  },
  {
    id: "sci_35",
    subject: "science",
    station: "Huesos",
    type: "multiple",
    context: null,
    prompt: "¿Cuál es el hueso más largo del cuerpo humano?",
    options: ["El húmero (brazo)", "El fémur (pierna)", "La clavícula (hombro)"],
    correctAnswer: "El fémur (pierna)",
    explain: "El fémur es el hueso del muslo y es el más largo y fuerte de todo el cuerpo."
  },
  {
    id: "sci_36",
    subject: "science",
    station: "Articulaciones",
    type: "label",
    context: "Dibuja un círculo imaginario con tu brazo.",
    prompt: "Etiqueta las articulaciones en el brazo.",
    svg: `<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border-radius:10px; max-height:400px; display:block; margin:auto;">
      <!-- Shoulder base -->
      <circle cx="50" cy="50" r="25" fill="#f5cba7" />
      
      <!-- Upper arm -->
      <path d="M 35 65 L 110 160 C 130 180, 150 160, 140 140 L 70 40 Z" fill="#f5cba7"/>
      
      <!-- Lower arm -->
      <path d="M 115 145 L 60 260 C 50 270, 30 260, 40 240 L 135 135 Z" fill="#f5cba7"/>
      
      <!-- Hand -->
      <path d="M 45 250 L 30 280 Q 20 290 35 295 Q 50 290 55 260 Z" fill="#f5cba7"/>
      
      <!-- Joint Highlights -->
      <circle cx="50" cy="50" r="10" fill="#e74c3c"/>
      <circle cx="125" cy="150" r="10" fill="#e74c3c"/>
      <circle cx="48" cy="250" r="8" fill="#e74c3c"/>

      <!-- Pointers -->
      <!-- Hombro -->
      <line x1="50" y1="50" x2="120" y2="40" stroke="#e74c3c" stroke-width="2" stroke-dasharray="4"/>
      <!-- Codo -->
      <line x1="125" y1="150" x2="175" y2="150" stroke="#e74c3c" stroke-width="2" stroke-dasharray="4"/>
      <!-- Muñeca -->
      <line x1="48" y1="250" x2="130" y2="250" stroke="#e74c3c" stroke-width="2" stroke-dasharray="4"/>
    </svg>`,
    labels: [
      { word: "Hombro", x: 60, y: 13.3 },
      { word: "Codo", x: 87.5, y: 50 },
      { word: "Muñeca", x: 65, y: 83.3 }
    ],
    explain: "El hombro une el brazo al cuerpo, el codo está en medio, y la muñeca une la mano."
  },
  {
    id: "sci_37",
    subject: "science",
    station: "Músculos",
    type: "true_false",
    context: null,
    prompt: "El cuerpo humano tiene más de 600 músculos.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explain: "¡Sí! Tenemos muchísimos músculos, desde los grandes en las piernas hasta los pequeñitos en los ojos."
  },
  {
    id: "sci_38",
    subject: "science",
    station: "Cuidado",
    type: "multiple",
    context: "Para evitar lastimar tus huesos al andar en bicicleta o patines...",
    prompt: "¿Qué elemento de protección debes usar siempre?",
    options: ["Una bufanda", "Un casco y rodilleras", "Gafas de sol"],
    correctAnswer: "Un casco y rodilleras",
    explain: "El casco protege los huesos del cráneo, y las rodilleras protegen las articulaciones de las rodillas."
  },
  {
    id: "sci_39",
    subject: "science",
    station: "Músculos",
    type: "open",
    context: "Cuando te ríes mucho, a veces te duele el estómago.",
    prompt: "¿Por qué crees que te duele el estómago de tanto reír?",
    explain: "Porque al reír usas fuertemente los músculos abdominales. Si te ríes mucho, esos músculos hacen mucho ejercicio y se cansan."
  },
  {
    id: "sci_40",
    subject: "science",
    station: "Huesos",
    type: "match",
    context: null,
    prompt: "Une cada acción con el sistema que más la realiza.",
    pairs: [
      { id: "s1", left: "Proteger el cerebro", right: "Sistema Óseo (Cráneo)" },
      { id: "s2", left: "Masticar comida", right: "Sistema Muscular (Músculos de la cara)" },
      { id: "s3", left: "Doblar la pierna", right: "Articulaciones (Rodilla)" }
    ],
    explain: "Huesos para proteger, músculos para mover, articulaciones para doblar."
  }
];
