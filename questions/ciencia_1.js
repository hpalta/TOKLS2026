module.exports = [
  {
    id: "sci_1",
    subject: "science",
    station: "Huesos",
    type: "true_false",
    context: "Camilo se cayó de su bicicleta, pero gracias a que usaba casco, protegió su cabeza. Su médico le dijo que dentro de la cabeza hay un conjunto de huesos muy importantes.",
    prompt: "El cráneo es la parte del esqueleto que protege el cerebro.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explain: "El cráneo es como una caja dura formada por huesos planos que cuida nuestro cerebro."
  },
  {
    id: "sci_2",
    subject: "science",
    station: "Huesos",
    type: "true_false",
    context: null,
    prompt: "El esqueleto de un niño de 7 años es muy blando y no tiene huesos.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explain: "Todos tenemos un esqueleto formado por muchos huesos, ¡incluso desde que nacemos!"
  },
  {
    id: "sci_3",
    subject: "science",
    station: "Articulaciones",
    type: "multiple",
    context: "Laura está bailando ballet. Levanta sus brazos y dobla sus rodillas con mucha facilidad para dar un gran salto.",
    prompt: "¿Qué partes del cuerpo le permiten a Laura doblar sus rodillas y codos?",
    options: ["Los músculos", "Las articulaciones", "El cráneo"],
    correctAnswer: "Las articulaciones",
    explain: "Las articulaciones son las zonas donde se unen los huesos y nos permiten doblar partes del cuerpo."
  },
  {
    id: "sci_4",
    subject: "science",
    station: "Músculos",
    type: "multiple",
    context: null,
    prompt: "¿Qué son los músculos?",
    options: ["Partes duras y rígidas que sostienen el cuerpo", "Órganos blandos y elásticos que se contraen y relajan para mover el cuerpo", "Líquidos que viajan por nuestras venas"],
    correctAnswer: "Órganos blandos y elásticos que se contraen y relajan para mover el cuerpo",
    explain: "Los músculos son como bandas elásticas que jalan los huesos para que podamos movernos."
  },
  {
    id: "sci_5",
    subject: "science",
    station: "Músculos",
    type: "true_false",
    context: "Andrés está sonriendo porque es su cumpleaños. Su profesora le dice que está usando muchos músculos al sonreír.",
    prompt: "No tenemos músculos en la cara, solo tenemos huesos.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explain: "¡Tenemos muchos músculos en la cara! Nos permiten sonreír, masticar, guiñar un ojo y hacer muecas."
  },
  {
    id: "sci_6",
    subject: "science",
    station: "Huesos",
    type: "multiple",
    context: "Para el desayuno, Sofía toma un gran vaso de leche y come un poco de queso. Su mamá le dice que esto es excelente para crecer.",
    prompt: "¿Qué mineral que está en la leche y el queso ayuda a mantener los huesos fuertes y duros?",
    options: ["El hierro", "El calcio", "El azúcar"],
    correctAnswer: "El calcio",
    explain: "El calcio es un mineral esencial que hace que nuestros huesos sean duros y resistentes."
  },
  {
    id: "sci_7",
    subject: "science",
    station: "Articulaciones",
    type: "match",
    context: null,
    prompt: "Relaciona cada tipo de articulación con su movimiento.",
    pairs: [
      { id: "p1", left: "Articulaciones móviles", right: "Permiten mucho movimiento (hombro, rodilla)" },
      { id: "p2", left: "Articulaciones semimóviles", right: "Permiten poco movimiento (columna vertebral)" },
      { id: "p3", left: "Articulaciones fijas", right: "No permiten ningún movimiento (cráneo)" }
    ],
    explain: "Hay 3 tipos de articulaciones: las móviles se mueven mucho, las semimóviles un poco, y las fijas nada."
  },
  {
    id: "sci_8",
    subject: "science",
    station: "Huesos",
    type: "open",
    context: "Imagina que el cuerpo humano no tuviera huesos, ¡como si fueras una lombriz gigante!",
    prompt: "¿Qué nos pasaría si no tuviéramos un sistema óseo (esqueleto)?",
    explain: "No podríamos sostenernos de pie, no podríamos caminar ni correr, y seríamos como una masa blanda en el suelo. Además, nuestros órganos (como el corazón y cerebro) estarían desprotegidos."
  },
  {
    id: "sci_9",
    subject: "science",
    station: "Músculos",
    type: "match",
    context: null,
    prompt: "Une el tipo de movimiento con su definición.",
    pairs: [
      { id: "m1", left: "Movimiento voluntario", right: "Se mueve cuando tú decides hacerlo (ej. patear un balón)" },
      { id: "m2", left: "Movimiento involuntario", right: "Se mueve solo, sin que tú lo pienses (ej. el corazón latiendo)" }
    ],
    explain: "Controlamos los movimientos voluntarios (como correr), pero nuestro cuerpo controla los involuntarios automáticamente (como la digestión)."
  },
  {
    id: "sci_10",
    subject: "science",
    station: "Anatomía",
    type: "label",
    context: "El profesor de ciencias le dio a Mateo un mapa del esqueleto para estudiar.",
    prompt: "Etiqueta las partes importantes del cuerpo.",
    // A simple SVG stick figure or bones outline. We must provide SVG and labels array.
    svg: `<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border-radius:10px; max-height:400px; display:block; margin:auto;">
      <!-- Skull -->
      <path d="M 100 20 C 70 20, 70 60, 85 70 C 85 85, 115 85, 115 70 C 130 60, 130 20, 100 20 Z" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="3"/>
      <!-- Eyes & nose -->
      <circle cx="90" cy="50" r="6" fill="#34495e"/>
      <circle cx="110" cy="50" r="6" fill="#34495e"/>
      <path d="M 100 60 L 98 65 L 102 65 Z" fill="#34495e"/>
      <!-- Smile -->
      <path d="M 90 75 Q 100 80 110 75" stroke="#34495e" stroke-width="2" fill="none"/>
      
      <!-- Spine -->
      <line x1="100" y1="85" x2="100" y2="160" stroke="#ecf0f1" stroke-width="8" stroke-linecap="round"/>
      
      <!-- Ribs -->
      <path d="M 100 100 C 70 100, 60 115, 60 125 C 60 130, 80 135, 100 130" stroke="#ecf0f1" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M 100 100 C 130 100, 140 115, 140 125 C 140 130, 120 135, 100 130" stroke="#ecf0f1" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M 100 115 C 75 115, 65 125, 65 135 C 65 140, 80 145, 100 140" stroke="#ecf0f1" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M 100 115 C 125 115, 135 125, 135 135 C 135 140, 120 145, 100 140" stroke="#ecf0f1" stroke-width="5" fill="none" stroke-linecap="round"/>
      
      <!-- Pelvis -->
      <path d="M 85 160 C 70 160, 70 180, 85 180 L 115 180 C 130 180, 130 160, 115 160 Z" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="3"/>
      
      <!-- Left Arm -->
      <circle cx="75" cy="95" r="7" fill="#ecf0f1"/> 
      <line x1="75" y1="95" x2="40" y2="130" stroke="#ecf0f1" stroke-width="6" stroke-linecap="round"/> 
      <circle cx="40" cy="130" r="5" fill="#ecf0f1"/> 
      <line x1="40" y1="130" x2="30" y2="170" stroke="#ecf0f1" stroke-width="5" stroke-linecap="round"/> 
      <circle cx="30" cy="170" r="4" fill="#ecf0f1"/> 
      <path d="M 30 170 L 20 185 M 30 170 L 30 188 M 30 170 L 40 185" stroke="#ecf0f1" stroke-width="3" stroke-linecap="round"/> 

      <!-- Right Arm -->
      <circle cx="125" cy="95" r="7" fill="#ecf0f1"/>
      <line x1="125" y1="95" x2="160" y2="130" stroke="#ecf0f1" stroke-width="6" stroke-linecap="round"/>
      <circle cx="160" cy="130" r="5" fill="#ecf0f1"/>
      <line x1="160" y1="130" x2="170" y2="170" stroke="#ecf0f1" stroke-width="5" stroke-linecap="round"/>
      <circle cx="170" cy="170" r="4" fill="#ecf0f1"/>
      <path d="M 170 170 L 160 185 M 170 170 L 170 188 M 170 170 L 180 185" stroke="#ecf0f1" stroke-width="3" stroke-linecap="round"/>
      
      <!-- Left Leg -->
      <circle cx="90" cy="175" r="8" fill="#ecf0f1"/>
      <line x1="90" y1="175" x2="70" y2="230" stroke="#ecf0f1" stroke-width="8" stroke-linecap="round"/> 
      <circle cx="70" cy="230" r="7" fill="#ecf0f1"/> 
      <line x1="70" y1="230" x2="60" y2="280" stroke="#ecf0f1" stroke-width="6" stroke-linecap="round"/>
      <path d="M 60 280 L 40 285" stroke="#ecf0f1" stroke-width="8" stroke-linecap="round"/> 
      
      <!-- Right Leg -->
      <circle cx="110" cy="175" r="8" fill="#ecf0f1"/>
      <line x1="110" y1="175" x2="130" y2="230" stroke="#ecf0f1" stroke-width="8" stroke-linecap="round"/>
      <circle cx="130" cy="230" r="7" fill="#ecf0f1"/>
      <line x1="130" y1="230" x2="140" y2="280" stroke="#ecf0f1" stroke-width="6" stroke-linecap="round"/>
      <path d="M 140 280 L 160 285" stroke="#ecf0f1" stroke-width="8" stroke-linecap="round"/>

      <!-- Pointers -->
      <circle cx="100" cy="35" r="4" fill="#e74c3c"/>
      <line x1="100" y1="35" x2="50" y2="40" stroke="#e74c3c" stroke-width="2" stroke-dasharray="4"/>
      
      <circle cx="55" cy="115" r="4" fill="#e74c3c"/>
      <line x1="55" y1="115" x2="40" y2="95" stroke="#e74c3c" stroke-width="2" stroke-dasharray="4"/>
      
      <circle cx="120" cy="205" r="4" fill="#e74c3c"/>
      <line x1="120" y1="205" x2="170" y2="205" stroke="#e74c3c" stroke-width="2" stroke-dasharray="4"/>
    </svg>`,
    labels: [
      { word: "Cráneo", x: 25, y: 13.3 },
      { word: "Brazo", x: 20, y: 31.6 },
      { word: "Pierna", x: 85, y: 68.3 }
    ],
    explain: "El cráneo está en la cabeza, el brazo sale del hombro, y la pierna soporta nuestro peso al caminar."
  },
  {
    id: "sci_11",
    subject: "science",
    station: "Músculos",
    type: "true_false",
    context: null,
    prompt: "Los músculos no necesitan descansar, puedes correr por días sin detenerte.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explain: "¡Falso! Los músculos se cansan y necesitan descanso y buen alimento para recuperarse."
  },
  {
    id: "sci_12",
    subject: "science",
    station: "Músculos",
    type: "multiple",
    context: "Cuando levantas una caja pesada, sientes que tu brazo se pone duro y fuerte.",
    prompt: "¿Qué le pasa a tu músculo (el bíceps) cuando doblas el brazo para levantar algo?",
    options: ["Se rompe", "Se relaja y se alarga", "Se contrae y se hace más corto y grueso"],
    correctAnswer: "Se contrae y se hace más corto y grueso",
    explain: "Para hacer fuerza, el músculo se contrae (se acorta y se infla), jalando el hueso."
  },
  {
    id: "sci_13",
    subject: "science",
    station: "Cuidado",
    type: "multiple",
    context: "Tomás quiere tener huesos y músculos muy fuertes para jugar al fútbol.",
    prompt: "¿Cuál de estos hábitos NO ayuda a cuidar sus músculos y huesos?",
    options: ["Hacer ejercicio regularmente", "Dormir pocas horas y comer muchos dulces", "Mantener una buena postura al sentarse"],
    correctAnswer: "Dormir pocas horas y comer muchos dulces",
    explain: "Para cuidarnos, necesitamos dormir bien, comer sano, hacer ejercicio y tener buena postura."
  },
  {
    id: "sci_14",
    subject: "science",
    station: "Huesos",
    type: "true_false",
    context: null,
    prompt: "El esqueleto protege órganos delicados como el corazón y los pulmones.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explain: "Las costillas actúan como un escudo protector para el corazón y los pulmones."
  },
  {
    id: "sci_15",
    subject: "science",
    station: "Músculos",
    type: "true_false",
    context: "Diana está respirando mientras duerme pacíficamente en su cama.",
    prompt: "La respiración es un movimiento involuntario controlado por músculos que se mueven solos.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explain: "Respirar y el latido del corazón son movimientos involuntarios; suceden sin que lo pienses."
  },
  {
    id: "sci_16",
    subject: "science",
    station: "Huesos",
    type: "multiple",
    context: null,
    prompt: "¿Cómo se llama el conjunto de todos los huesos del cuerpo?",
    options: ["Sistema Muscular", "El cráneo", "Sistema Óseo o Esqueleto"],
    correctAnswer: "Sistema Óseo o Esqueleto",
    explain: "El conjunto de todos los huesos se llama Sistema Óseo."
  },
  {
    id: "sci_17",
    subject: "science",
    station: "Articulaciones",
    type: "multiple",
    context: "María intentó doblar su brazo al revés pero no pudo.",
    prompt: "¿Por qué el codo solo se dobla hacia un lado?",
    options: ["Porque no tiene huesos", "Porque la articulación del codo es como una bisagra que limita el movimiento", "Porque los músculos están dormidos"],
    correctAnswer: "Porque la articulación del codo es como una bisagra que limita el movimiento",
    explain: "Algunas articulaciones, como el codo y la rodilla, funcionan como bisagras que solo abren y cierran en una dirección."
  },
  {
    id: "sci_18",
    subject: "science",
    station: "Músculos",
    type: "open",
    context: "Después de hacer mucho ejercicio en clase de educación física, los niños sintieron dolor en las piernas.",
    prompt: "¿Qué deben hacer para que sus músculos se recuperen?",
    explain: "Deben descansar, tomar mucha agua, estirar suavemente y comer alimentos nutritivos."
  },
  {
    id: "sci_19",
    subject: "science",
    station: "Anatomía",
    type: "match",
    context: null,
    prompt: "Une el hueso con la parte del cuerpo donde se encuentra.",
    pairs: [
      { id: "h1", left: "Cráneo", right: "Cabeza" },
      { id: "h2", left: "Costillas", right: "Pecho/Tórax" },
      { id: "h3", left: "Fémur", right: "Pierna" }
    ],
    explain: "El cráneo está en la cabeza, las costillas en el pecho, y el fémur es el hueso largo de la pierna."
  },
  {
    id: "sci_20",
    subject: "science",
    station: "Músculos",
    type: "true_false",
    context: null,
    prompt: "Para que un hueso se mueva, un músculo tiene que jalarlo.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explain: "¡Exacto! Los músculos tiran de los huesos para moverlos, pero nunca los empujan."
  }
];
