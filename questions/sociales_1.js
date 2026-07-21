module.exports = [
  // 1-10: Recursos Inagotables y Renovables
  {
    id: "soc_1", subject: "sociales", station: "Recursos Naturales", type: "multiple",
    context: "La naturaleza nos da muchas cosas que usamos todos los días. Algunas de ellas pueden volver a formarse en poco tiempo si las cuidamos.",
    prompt: "¿Cómo se llaman los recursos que la naturaleza puede volver a producir rápidamente?",
    options: ["Recursos renovables", "Recursos no renovables", "Recursos minerales"],
    correctAnswer: "Recursos renovables",
    explain: "¡Exacto! Los recursos renovables pueden volver a aparecer en poco tiempo, como los árboles o las plantas."
  },
  {
    id: "soc_2", subject: "sociales", station: "Recursos Naturales", type: "true_false",
    context: null,
    prompt: "Los recursos inagotables (o perpetuos) nunca se acaban, aunque los usemos muchísimo.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explain: "¡Verdadero! Siempre están disponibles en la naturaleza, como la luz del sol o el viento."
  },
  {
    id: "soc_3", subject: "sociales", station: "Recursos Naturales", type: "multiple",
    context: "Imagina un día muy soleado y ventoso en la playa.",
    prompt: "¿Cuál de estos es un ejemplo de recurso inagotable?",
    options: ["La luz del sol", "El petróleo", "El carbón"],
    correctAnswer: "La luz del sol",
    explain: "¡Muy bien! La luz del sol es inagotable porque brilla todos los días y no se acaba."
  },
  {
    id: "soc_4", subject: "sociales", station: "Recursos Naturales", type: "match",
    context: "Une el tipo de recurso con su ejemplo.",
    prompt: "Relaciona correctamente:",
    pairs: [
      { id: "s4_1", left: "Inagotable", right: "El viento" },
      { id: "s4_2", left: "Renovable", right: "Las plantas" },
      { id: "s4_3", left: "Renovable", right: "El agua limpia" }
    ],
    explain: "El viento es inagotable, mientras que las plantas y el agua son renovables (¡si las cuidamos!)."
  },
  {
    id: "soc_5", subject: "sociales", station: "Recursos Naturales", type: "multiple",
    context: "Aunque el agua es un recurso renovable, debemos usarla con responsabilidad.",
    prompt: "¿Qué pasaría si usamos mal el agua y los árboles sin cuidarlos?",
    options: ["Se pueden agotar o dañar", "Aparecerán mágicamente", "No pasa nada"],
    correctAnswer: "Se pueden agotar o dañar",
    explain: "¡Correcto! Los recursos renovables pueden acabarse si no los protegemos y usamos con cuidado."
  },
  {
    id: "soc_6", subject: "sociales", station: "Recursos Naturales", type: "multiple",
    context: null,
    prompt: "¿Por qué son importantes los recursos naturales renovables?",
    options: ["Porque ayudan a tener energía limpia y protegen a plantas y animales", "Porque ensucian el planeta", "Porque nos dan plástico"],
    correctAnswer: "Porque ayudan a tener energía limpia y protegen a plantas y animales",
    explain: "Los recursos renovables cuidan la naturaleza y nos ayudan a vivir mejor."
  },
  {
    id: "soc_7", subject: "sociales", station: "Recursos Naturales", type: "true_false",
    context: null,
    prompt: "Los animales y los árboles son ejemplos de recursos renovables.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explain: "¡Sí! La naturaleza puede volver a producirlos con el tiempo si los cuidamos."
  },
  {
    id: "soc_8", subject: "sociales", station: "Recursos Naturales", type: "multiple",
    context: "Las olas del mar se mueven todos los días sin parar.",
    prompt: "El movimiento del mar es un recurso...",
    options: ["Inagotable (perpetuo)", "No renovable", "Dañino para el planeta"],
    correctAnswer: "Inagotable (perpetuo)",
    explain: "El movimiento del mar nunca se detiene, ¡es inagotable!"
  },
  {
    id: "soc_9", subject: "sociales", station: "Recursos Naturales", type: "true_false",
    context: null,
    prompt: "Los recursos renovables contaminan muchísimo el planeta.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explain: "¡Al revés! Los recursos renovables contaminan muy poco y ayudan al planeta."
  },
  {
    id: "soc_10", subject: "sociales", station: "Recursos Naturales", type: "match",
    context: null,
    prompt: "Clasifica estos recursos de la naturaleza:",
    pairs: [
      { id: "s10_1", left: "Luz del Sol", right: "Nunca se acaba" },
      { id: "s10_2", left: "Árboles", right: "Hay que plantarlos y cuidarlos" },
      { id: "s10_3", left: "Viento", right: "Mueve los molinos para dar energía" }
    ],
    explain: "El Sol y el viento nos dan energía limpia inagotable, y a los árboles debemos sembrarlos para que no falten."
  },

  // 11-20: Recursos No Renovables
  {
    id: "soc_11", subject: "sociales", station: "No Renovables", type: "multiple",
    context: "Algunas cosas que nos da la naturaleza tardan millones de años en formarse, como en la época de los dinosaurios.",
    prompt: "¿Cómo se llaman estos recursos que pueden acabarse?",
    options: ["Recursos No Renovables", "Recursos Inagotables", "Recursos Infinitos"],
    correctAnswer: "Recursos No Renovables",
    explain: "¡Muy bien! Son limitados y si los gastamos todos, tardarán muchísimo tiempo en volver a aparecer."
  },
  {
    id: "soc_12", subject: "sociales", station: "No Renovables", type: "multiple",
    context: null,
    prompt: "¿Cuál de estos es un ejemplo de recurso NO renovable?",
    options: ["El petróleo", "El viento", "Las plantas"],
    correctAnswer: "El petróleo",
    explain: "¡Correcto! El petróleo tarda millones de años en formarse bajo la tierra."
  },
  {
    id: "soc_13", subject: "sociales", station: "No Renovables", type: "true_false",
    context: null,
    prompt: "El carbón y el gas natural son recursos que vuelven a aparecer rápidamente si los usamos.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explain: "¡Falso! El carbón y el gas son NO renovables, si los usamos todos, ¡se acaban!"
  },
  {
    id: "soc_14", subject: "sociales", station: "No Renovables", type: "match",
    context: "Muchos metales son recursos no renovables y los sacamos de las minas.",
    prompt: "Une el nombre del recurso con su grupo:",
    pairs: [
      { id: "s14_1", left: "Oro", right: "Mineral no renovable" },
      { id: "s14_2", left: "Hierro", right: "Mineral para hacer autos" },
      { id: "s14_3", left: "Petróleo", right: "Combustible no renovable" }
    ],
    explain: "El oro, el hierro, el cobre y el petróleo son recursos limitados que extraemos de la tierra."
  },
  {
    id: "soc_15", subject: "sociales", station: "No Renovables", type: "multiple",
    context: "Cuando usamos recursos no renovables, a veces generamos humo y cosas que ensucian el planeta.",
    prompt: "¿Qué característica tienen los recursos no renovables?",
    options: ["Contaminan más cuando se usan", "Son muy limpios y sanos", "No sirven para nada"],
    correctAnswer: "Contaminan más cuando se usan",
    explain: "Por ejemplo, al quemar gasolina (petróleo) en los carros, sale humo que contamina el aire."
  },
  {
    id: "soc_16", subject: "sociales", station: "No Renovables", type: "multiple",
    context: null,
    prompt: "¿Por qué son importantes recursos como el petróleo o los minerales a pesar de ser no renovables?",
    options: ["Porque nos dan energía, transporte y sirven para fabricar celulares o edificios", "Porque los comemos en el desayuno", "Porque hacen que llueva"],
    correctAnswer: "Porque nos dan energía, transporte y sirven para fabricar celulares o edificios",
    explain: "Son muy importantes para la industria humana, ¡pero por eso debemos usarlos con muchísimo cuidado!"
  },
  {
    id: "soc_17", subject: "sociales", station: "No Renovables", type: "true_false",
    context: "Como los recursos no renovables se pueden acabar...",
    prompt: "Debemos usarlos con cuidado y buscar otras opciones que no dañen el planeta.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explain: "¡Verdadero! Es muy importante buscar energías limpias (como el Sol) para cuidar nuestro hogar."
  },
  {
    id: "soc_18", subject: "sociales", station: "No Renovables", type: "multiple",
    context: "Hay minerales muy útiles en el suelo, como el cobre.",
    prompt: "¿Qué tipo de recurso es el cobre?",
    options: ["Mineral (No Renovable)", "Planta (Renovable)", "Gas (Inagotable)"],
    correctAnswer: "Mineral (No Renovable)",
    explain: "¡Exacto! El cobre, al igual que el hierro y el oro, es un mineral no renovable."
  },
  {
    id: "soc_19", subject: "sociales", station: "No Renovables", type: "match",
    context: "Compara los dos tipos de recursos.",
    prompt: "Relaciona correctamente:",
    pairs: [
      { id: "s19_1", left: "Tardan millones de años en formarse", right: "No renovables" },
      { id: "s19_2", left: "Vuelven a formarse en poco tiempo", right: "Renovables" },
      { id: "s19_3", left: "Nunca se acaban", right: "Inagotables" }
    ],
    explain: "Cada recurso tiene su propio ritmo: los no renovables son muy lentos, los renovables rápidos y los inagotables infinitos."
  },
  {
    id: "soc_20", subject: "sociales", station: "No Renovables", type: "multiple",
    context: "El papá de Camilo le puso gasolina al carro para ir a la escuela.",
    prompt: "¿De dónde viene la gasolina?",
    options: ["Del petróleo", "Del agua del río", "De los árboles"],
    correctAnswer: "Del petróleo",
    explain: "¡Así es! La gasolina se fabrica a partir del petróleo, un recurso no renovable."
  },

  // 21-30: Impacto y Contaminación
  {
    id: "soc_21", subject: "sociales", station: "Contaminación", type: "multiple",
    context: "A veces, las acciones de las personas dañan el lugar donde vivimos (nuestro entorno).",
    prompt: "¿Cómo se llama cuando ensuciamos y dañamos la naturaleza?",
    options: ["Contaminación", "Reciclaje", "Cuidado del entorno"],
    correctAnswer: "Contaminación",
    explain: "La contaminación es el impacto negativo de arrojar basura, humo o químicos al medio ambiente."
  },
  {
    id: "soc_22", subject: "sociales", station: "Contaminación", type: "multiple",
    context: "Cuando arrojamos basura, desperdicios o químicos a los ríos, lagos o mares...",
    prompt: "¿Qué tipo de contaminación estamos causando?",
    options: ["Contaminación del agua", "Contaminación del aire", "Contaminación del espacio"],
    correctAnswer: "Contaminación del agua",
    explain: "¡Correcto! Ensuciar los ríos y el mar enferma a los peces y daña el agua que necesitamos."
  },
  {
    id: "soc_23", subject: "sociales", station: "Contaminación", type: "true_false",
    context: null,
    prompt: "El humo de los carros y de las fábricas ensucia el cielo, causando contaminación del aire.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explain: "¡Verdadero! Los gases y el humo impiden que respiremos aire puro y sano."
  },
  {
    id: "soc_24", subject: "sociales", station: "Contaminación", type: "match",
    context: "Identifica los tipos de contaminación.",
    prompt: "Relaciona la acción con el tipo de contaminación:",
    pairs: [
      { id: "s24_1", left: "Tirar plásticos en el parque", right: "Contaminación del suelo" },
      { id: "s24_2", left: "Humo negro de una fábrica", right: "Contaminación del aire" },
      { id: "s24_3", left: "Químicos derramados en el río", right: "Contaminación del agua" }
    ],
    explain: "Nuestras acciones pueden dañar el aire que respiramos, la tierra donde jugamos y el agua que tomamos."
  },
  {
    id: "soc_25", subject: "sociales", station: "Contaminación", type: "multiple",
    context: "La contaminación trae consecuencias muy tristes para nuestro planeta.",
    prompt: "¿Qué le puede pasar a los animales si su entorno está muy contaminado?",
    options: ["Se pueden enfermar o morir", "Se vuelven más fuertes", "Nada, ellos no se enferman"],
    correctAnswer: "Se pueden enfermar o morir",
    explain: "¡Tristemente es así! La basura y los químicos dañan el hogar de los animalitos."
  },
  {
    id: "soc_26", subject: "sociales", station: "Contaminación", type: "multiple",
    context: null,
    prompt: "¿Qué ocurre con las plantas cuando el suelo está lleno de plásticos y basura?",
    options: ["No crecen bien", "Crecen más bonitas", "Se vuelven árboles gigantes"],
    correctAnswer: "No crecen bien",
    explain: "Las plantas necesitan tierra limpia para absorber nutrientes y crecer sanas."
  },
  {
    id: "soc_27", subject: "sociales", station: "Contaminación", type: "true_false",
    context: null,
    prompt: "Si contaminamos mucho, las personas también nos podemos enfermar por tomar agua sucia o respirar aire malo.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explain: "¡Verdadero! Nosotros también somos parte de la naturaleza y necesitamos agua y aire limpios."
  },
  {
    id: "soc_28", subject: "sociales", station: "Contaminación", type: "multiple",
    context: "En el parque, alguien dejó tiradas muchas botellas y bolsas plásticas.",
    prompt: "Esta acción es un ejemplo claro de...",
    options: ["Contaminación del suelo", "Cuidado ambiental", "Energía renovable"],
    correctAnswer: "Contaminación del suelo",
    explain: "¡Exacto! Tirar basura en la calle o en los parques daña el suelo."
  },
  {
    id: "soc_29", subject: "sociales", station: "Contaminación", type: "match",
    context: "Consecuencias de la contaminación.",
    prompt: "Une el problema con quién lo sufre:",
    pairs: [
      { id: "s29_1", left: "Falta de agua limpia para tomar", right: "Personas y animales" },
      { id: "s29_2", left: "No pueden crecer fuertes y sanas", right: "Plantas y árboles" },
      { id: "s29_3", left: "Queda sucio y lleno de humo", right: "Aire (el cielo)" }
    ],
    explain: "Todo en la naturaleza está conectado. ¡Si ensuciamos el planeta, todos nos afectamos!"
  },
  {
    id: "soc_30", subject: "sociales", station: "Contaminación", type: "true_false",
    context: null,
    prompt: "La contaminación es algo bueno porque nos da más recursos naturales.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explain: "¡Súper Falso! La contaminación daña los recursos naturales que necesitamos para vivir."
  },

  // 31-40: Cuidar el Entorno
  {
    id: "soc_31", subject: "sociales", station: "Cuidado", type: "multiple",
    context: "Todos podemos ayudar a cuidar nuestro hermoso planeta con acciones sencillas.",
    prompt: "¿Qué debes hacer si tienes una botella vacía y estás en la calle?",
    options: ["Guardarla hasta encontrar una caneca para botarla", "Tirarla a la calle", "Tirarla a un río"],
    correctAnswer: "Guardarla hasta encontrar una caneca para botarla",
    explain: "¡Muy bien! Nunca debemos botar basura en la calle ni en los ríos."
  },
  {
    id: "soc_32", subject: "sociales", station: "Cuidado", type: "multiple",
    context: "Al cepillarte los dientes, el agua sigue corriendo por la llave.",
    prompt: "¿Cuál es la acción correcta para cuidar el entorno?",
    options: ["Ahorrar agua cerrando la llave mientras te cepillas", "Dejar la llave abierta", "Poner más jabón"],
    correctAnswer: "Ahorrar agua cerrando la llave mientras te cepillas",
    explain: "¡Excelente! Ahorrar agua (cerrar la llave) es fundamental para cuidar nuestro planeta."
  },
  {
    id: "soc_33", subject: "sociales", station: "Cuidado", type: "true_false",
    context: null,
    prompt: "Separar y reciclar los residuos (como plástico y cartón) ayuda a cuidar el medio ambiente.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explain: "¡Verdadero! Reciclar le da una segunda vida a las cosas y disminuye la basura."
  },
  {
    id: "soc_34", subject: "sociales", station: "Cuidado", type: "match",
    context: "Acciones para salvar el mundo.",
    prompt: "Une cada acción con lo que estás cuidando:",
    pairs: [
      { id: "s34_1", left: "Apagar las luces al salir del cuarto", right: "Ahorrar energía" },
      { id: "s34_2", left: "Cerrar la llave del lavamanos", right: "Ahorrar agua" },
      { id: "s34_3", left: "Poner el papel en la caneca azul", right: "Reciclar" }
    ],
    explain: "¡Eres un superhéroe del planeta! Con pequeñas acciones ahorramos energía, agua y ayudamos a reciclar."
  },
  {
    id: "soc_35", subject: "sociales", station: "Cuidado", type: "multiple",
    context: "Camilo siempre deja la luz de su cuarto encendida cuando se va al colegio.",
    prompt: "¿Qué le aconsejarías a Camilo para cuidar el planeta?",
    options: ["Que apague las luces cuando no las use", "Que compre más focos", "Que prenda también el televisor"],
    correctAnswer: "Que apague las luces cuando no las use",
    explain: "¡Exacto! Apagar las luces ahorra energía y protege nuestros recursos naturales."
  },
  {
    id: "soc_36", subject: "sociales", station: "Cuidado", type: "multiple",
    context: "Vas caminando por un parque y ves unas hermosas flores y unos pajaritos.",
    prompt: "¿Cuál de estas es una buena acción por el entorno?",
    options: ["Cuidar y respetar las plantas y los animales", "Arrancar todas las flores", "Asustar a los pajaritos"],
    correctAnswer: "Cuidar y respetar las plantas y los animales",
    explain: "¡Muy bien! Las plantas y los animales merecen nuestro respeto y cuidado."
  },
  {
    id: "soc_37", subject: "sociales", station: "Cuidado", type: "true_false",
    context: "Si todos cuidamos la naturaleza...",
    prompt: "Podremos vivir en un lugar mucho más limpio, sano y feliz.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explain: "¡Completamente Verdadero! El planeta es nuestra casa, si lo cuidamos todos seremos más felices."
  },
  {
    id: "soc_38", subject: "sociales", station: "Cuidado", type: "multiple",
    context: "En la casa hay tres canecas de diferentes colores para botar la basura.",
    prompt: "¿Para qué sirve tener varias canecas?",
    options: ["Para separar y reciclar los residuos", "Para jugar basquetbol", "Para que huela feo"],
    correctAnswer: "Para separar y reciclar los residuos",
    explain: "¡Exacto! Separar la basura (reciclar) es clave para mantener limpio el entorno."
  },
  {
    id: "soc_39", subject: "sociales", station: "Cuidado", type: "match",
    context: "Resumen de lo aprendido.",
    prompt: "Relaciona correctamente:",
    pairs: [
      { id: "s39_1", left: "Petróleo y Carbón", right: "Recursos No Renovables" },
      { id: "s39_2", left: "Agua y Árboles", right: "Recursos Renovables" },
      { id: "s39_3", left: "Humo de carros", right: "Contaminación del Aire" }
    ],
    explain: "¡Excelente memoria! Ya eres todo un experto en ciencias sociales."
  },
  {
    id: "soc_40", subject: "sociales", station: "Cuidado", type: "multiple",
    context: "Imagina que el planeta Tierra pudiera hablar.",
    prompt: "¿Qué nos pediría que hagamos?",
    options: ["Que lo cuidemos, reciclemos y ahorremos agua", "Que tiremos mucha basura", "Que cortemos todos sus árboles"],
    correctAnswer: "Que lo cuidemos, reciclemos y ahorremos agua",
    explain: "¡Así es! Si todos aportamos un granito de arena, la Tierra será un lugar maravilloso por siempre."
  }
];
