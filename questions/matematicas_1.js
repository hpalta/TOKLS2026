module.exports = [
  // 1-10: Medidas no convencionales (Ciclo 4)
  {
    id: "mat_1", subject: "matematica", station: "Medidas Antiguas", type: "multiple",
    context: "Hace muchísimo tiempo, las personas no tenían reglas ni cintas métricas como las que usamos hoy para medir las cosas.",
    prompt: "¿Qué usaban las personas en la antigüedad para medir distancias u objetos?",
    options: ["Partes de su cuerpo (como manos o pies) y elementos de su entorno", "Calculadoras y teléfonos", "Láseres y satélites"],
    correctAnswer: "Partes de su cuerpo (como manos o pies) y elementos de su entorno",
    explain: "¡Exacto! Como no había reglas, usaban sus propios cuerpos, palos o cuerdas para medir."
  },
  {
    id: "mat_2", subject: "matematica", station: "Medidas Antiguas", type: "match",
    context: "Las partes del cuerpo fueron las primeras reglas de la historia.",
    prompt: "Relaciona la parte del cuerpo con su nombre como medida no convencional:",
    pairs: [
      { id: "m2_1", left: "La mano abierta", right: "Palmo / Cuarta" },
      { id: "m2_2", left: "Distancia al caminar", right: "Pasos" },
      { id: "m2_3", left: "Del codo a los dedos", right: "Codo egipcio" }
    ],
    explain: "Cada parte del cuerpo servía para medir algo diferente: terrenos (pasos) o mesas (palmos)."
  },
  {
    id: "mat_3", subject: "matematica", station: "Medidas Antiguas", type: "true_false",
    context: "Si mides el ancho de tu cuarto con pasos, y luego lo mide tu papá con sus pasos...",
    prompt: "¿El cuarto medirá exactamente la misma cantidad de pasos para los dos?",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explain: "¡Falso! Como los pies de tu papá son más grandes, a él le saldrán menos pasos que a ti. Por eso las medidas no convencionales no eran exactas."
  },
  {
    id: "mat_4", subject: "matematica", station: "Medidas Antiguas", type: "multiple",
    context: "Los antiguos egipcios construyeron enormes pirámides y necesitaban medir con precisión.",
    prompt: "¿Qué medida famosa del cuerpo utilizaban los egipcios?",
    options: ["El codo (distancia entre el codo y la punta de los dedos)", "La nariz (el largo de la nariz)", "La pestaña (el largo de las pestañas)"],
    correctAnswer: "El codo (distancia entre el codo y la punta de los dedos)",
    explain: "El 'codo real egipcio' fue una medida muy famosa en la antigüedad."
  },
  {
    id: "mat_5", subject: "matematica", station: "Medidas Antiguas", type: "multiple",
    context: "Imagina que quieres decirle a un amigo a qué distancia está un árbol en el parque sin tener una cinta métrica.",
    prompt: "¿Cuál sería la mejor medida no convencional para calcular la distancia en el suelo?",
    options: ["Contar los pasos", "Contar los dedos", "Medir con las orejas"],
    correctAnswer: "Contar los pasos",
    explain: "¡Muy bien! Los pasos son perfectos para medir distancias largas en terrenos."
  },
  {
    id: "mat_6", subject: "matematica", station: "Medidas Antiguas", type: "true_false",
    context: null,
    prompt: "Hoy en día nunca usamos las medidas no convencionales, está prohibido.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explain: "Aunque tenemos reglas, a veces seguimos contando pasos o midiendo con la mano ('¡Falta un palmo para llegar!')."
  },
  {
    id: "mat_7", subject: "matematica", station: "Medidas Antiguas", type: "match",
    context: "¿Con qué lo medirías de forma no convencional?",
    prompt: "Une el objeto con la mejor medida no convencional:",
    pairs: [
      { id: "m7_1", left: "Distancia del arco a la mitad de la cancha", right: "Contar los pasos" },
      { id: "m7_2", left: "El ancho de tu cuaderno", right: "Manos (palmos)" },
      { id: "m7_3", left: "Una caja muy grande", right: "Cuerdas o palos" }
    ],
    explain: "Usamos el cuerpo dependiendo del tamaño de lo que queremos medir."
  },
  {
    id: "mat_8", subject: "matematica", station: "Medidas Antiguas", type: "multiple",
    context: "Camilo y Laura midieron la misma mesa usando sus manos. Camilo dijo 'mide 5 manos' y Laura dijo 'mide 6 manos'.",
    prompt: "¿Por qué les dio un resultado diferente si es la misma mesa?",
    options: ["Porque no todas las manos son del mismo tamaño", "Porque la mesa creció por arte de magia", "Porque sumaron mal"],
    correctAnswer: "Porque no todas las manos son del mismo tamaño",
    explain: "¡Exacto! Ese era el gran problema en el pasado: si el cuerpo es diferente, la medida cambia."
  },
  {
    id: "mat_9", subject: "matematica", station: "Medidas Antiguas", type: "multiple",
    context: "Además de usar partes de su cuerpo, las personas de antes también usaban cosas del entorno.",
    prompt: "¿Qué objetos de la naturaleza usaban como herramienta de medición?",
    options: ["Cuerdas, palos y piedras", "Televisores y radios", "Vasos de vidrio"],
    correctAnswer: "Cuerdas, palos y piedras",
    explain: "Usaban palos de un tamaño específico o cuerdas con nudos para hacer sus mediciones."
  },
  {
    id: "mat_10", subject: "matematica", station: "Medidas Antiguas", type: "true_false",
    context: null,
    prompt: "Si quieres medir tu cama usando 'pies', debes poner un pie pegadito justo enfrente del otro.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explain: "¡Verdadero! Para medir correctamente con 'pies' no puedes dejar huecos entre ellos."
  },

  // 11-20: Medidas Estandarizadas (Metro) (Ciclo 5)
  {
    id: "mat_11", subject: "matematica", station: "El Metro", type: "multiple",
    context: "Como las manos y los pasos no daban medidas exactas, los humanos inventaron las 'medidas estandarizadas'.",
    prompt: "¿Qué significa que una medida sea estandarizada?",
    options: ["Que es igual en todo el mundo sin importar quién mida", "Que solo la pueden usar los científicos", "Que siempre da un número par"],
    correctAnswer: "Que es igual en todo el mundo sin importar quién mida",
    explain: "¡Excelente! Gracias al metro, un metro en Colombia mide exactamente lo mismo que un metro en Japón."
  },
  {
    id: "mat_12", subject: "matematica", station: "El Metro", type: "multiple",
    context: "La unidad de medida de longitud más famosa en todo el mundo se creó hace muchos años.",
    prompt: "¿Cuál es esta famosa unidad de medida?",
    options: ["El metro (m)", "El paso largo", "El kilo (kg)"],
    correctAnswer: "El metro (m)",
    explain: "El metro es la base para medir longitudes de forma exacta."
  },
  {
    id: "mat_13", subject: "matematica", station: "El Metro", type: "match",
    context: "Dentro del metro hay medidas más pequeñas. Repasemos sus equivalencias:",
    prompt: "Une cada unidad con su tamaño:",
    pairs: [
      { id: "m13_1", left: "1 metro", right: "10 decímetros (o 100 centímetros)" },
      { id: "m13_2", left: "1 decímetro", right: "10 centímetros" },
      { id: "m13_3", left: "1 centímetro", right: "Tamaño pequeñito para borradores" }
    ],
    explain: "¡Muy bien! 1 metro son 10 decímetros, y 1 decímetro son 10 centímetros. ¡Todo va de 10 en 10!"
  },
  {
    id: "mat_14", subject: "matematica", station: "El Metro", type: "true_false",
    context: "Tomaste la regla de tu escuela y mediste una línea muy larga.",
    prompt: "Si logras contar 100 centímetros, significa que tienes exactamente 1 metro completo.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explain: "¡Verdadero! 100 centímetros (cm) son exactamente 1 metro (m)."
  },
  {
    id: "mat_15", subject: "matematica", station: "El Metro", type: "multiple",
    context: "Cada cosa tiene un tamaño diferente, así que usamos el metro, el decímetro o el centímetro dependiendo de qué vayamos a medir.",
    prompt: "¿Cuál usarías para medir un borrador o un sacapuntas?",
    options: ["Centímetros (cm)", "Metros (m)", "Kilómetros (km)"],
    correctAnswer: "Centímetros (cm)",
    explain: "Los centímetros son perfectos para medir cosas pequeñitas que caben en tu cartuchera."
  },
  {
    id: "mat_16", subject: "matematica", station: "El Metro", type: "multiple",
    context: "Imagina la puerta de la entrada a tu salón de clases.",
    prompt: "¿Con qué unidad de medida es más fácil medir la altura de la puerta?",
    options: ["Con metros (m)", "Con centímetros (cm)", "Con litros (l)"],
    correctAnswer: "Con metros (m)",
    explain: "¡Exacto! Las puertas de una casa suelen medir cerca de 2 metros de altura."
  },
  {
    id: "mat_17", subject: "matematica", station: "El Metro", type: "match",
    context: "Elige la unidad correcta.",
    prompt: "Une el objeto con la unidad de medida más apropiada:",
    pairs: [
      { id: "m17_1", left: "Un edificio muy alto", right: "Metros (m)" },
      { id: "m17_2", left: "Una hormiga", right: "Centímetros (cm) (o milímetros)" },
      { id: "m17_3", left: "Un libro de la escuela", right: "Decímetros (dm)" }
    ],
    explain: "Usamos metros para cosas grandes, decímetros para medianas y centímetros para pequeñitas."
  },
  {
    id: "mat_18", subject: "matematica", station: "El Metro", type: "true_false",
    context: null,
    prompt: "Las medidas estandarizadas como el metro se usan para fabricar juguetes y construir carreteras.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explain: "¡Verdadero! Sin medidas estandarizadas, todas las casas y carreteras quedarían chuecas."
  },
  {
    id: "mat_19", subject: "matematica", station: "El Metro", type: "multiple",
    context: "¿Recuerdas la lección del decímetro?",
    prompt: "Si tienes 1 decímetro (dm), ¿cuántos centímetros (cm) tienes?",
    options: ["10 centímetros", "100 centímetros", "1 centímetro"],
    correctAnswer: "10 centímetros",
    explain: "¡Muy bien! Un decímetro es un 'bloque' formado por 10 centímetros pegados."
  },
  {
    id: "mat_20", subject: "matematica", station: "El Metro", type: "multiple",
    context: "Un carpintero está midiendo una tabla y descubre que mide 20 decímetros.",
    prompt: "Como 10 decímetros forman 1 metro... ¿cuántos metros tiene la tabla de 20 decímetros?",
    options: ["2 metros", "20 metros", "1 metro"],
    correctAnswer: "2 metros",
    explain: "¡Excelente cálculo! Si 1 metro son 10 decímetros, entonces 2 metros son 20 decímetros."
  },

  // 21-30: Perímetro (Ciclo 5)
  {
    id: "mat_21", subject: "matematica", station: "Perímetro", type: "multiple",
    context: "Imagina una cancha de fútbol. Si caminas por toda la línea blanca que la rodea por fuera, estás midiendo algo especial.",
    prompt: "¿Cómo se le llama a la medida de todo el contorno (o borde) de una figura?",
    options: ["El perímetro", "El área", "El peso"],
    correctAnswer: "El perímetro",
    explain: "¡Así es! El perímetro es medir todo el bordecito que rodea a una figura."
  },
  {
    id: "mat_22", subject: "matematica", station: "Perímetro", type: "true_false",
    context: null,
    prompt: "Para calcular el perímetro de un cuadrado, solo debes sumar la medida de todos sus lados.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explain: "¡Verdadero! Sumando el largo de todos los bordes, obtienes el perímetro total."
  },
  {
    id: "mat_23", subject: "matematica", station: "Perímetro", type: "multiple",
    context: "Tienes una tarjeta en forma de triángulo.",
    prompt: "¿Cuál es el perímetro total de este triángulo?",
    illustration: `<svg viewBox="0 0 200 150" width="200" height="150">
      <polygon points="100,20 40,120 160,120" fill="#FFE5B4" stroke="#FF8C00" stroke-width="4"/>
      <text x="50" y="65" font-family="Arial" font-size="14" fill="#000" font-weight="bold">3 cm</text>
      <text x="125" y="65" font-family="Arial" font-size="14" fill="#000" font-weight="bold">5 cm</text>
      <text x="100" y="140" font-family="Arial" font-size="14" fill="#000" font-weight="bold" text-anchor="middle">4 cm</text>
    </svg>`,
    options: ["12 cm", "7 cm", "20 cm"],
    correctAnswer: "12 cm",
    explain: "¡Super! 3 + 4 + 5 = 12 cm. ¡Sumaste todos los bordes correctamente!"
  },
  {
    id: "mat_24", subject: "matematica", station: "Perímetro", type: "match",
    context: "Calcula los siguientes perímetros sumando los lados:",
    prompt: "Une el polígono con su perímetro:",
    pairs: [
      { id: "m24_1", left: "Cuadrado de 2 cm por lado (4 lados iguales)", right: "8 cm" },
      { id: "m24_2", left: "Triángulo con tres lados de 3 cm", right: "9 cm" },
      { id: "m24_3", left: "Rectángulo de 5 cm de largo y 2 cm de ancho", right: "14 cm" }
    ],
    explain: "¡Súper matemático! Sumaste perfectamente (2+2+2+2=8), (3+3+3=9) y (5+5+2+2=14)."
  },
  {
    id: "mat_25", subject: "matematica", station: "Perímetro", type: "multiple",
    context: "Laura quiere ponerle una cinta brillante por todo el borde a su cartelera rectangular para que se vea bonita.",
    prompt: "¿Qué necesita calcular Laura para saber cuánta cinta debe comprar?",
    options: ["El perímetro de la cartelera", "El color de la cartelera", "El peso de la cartelera"],
    correctAnswer: "El perímetro de la cartelera",
    explain: "Como va a pegarlo por el borde, ¡necesita saber el perímetro!"
  },
  {
    id: "mat_26", subject: "matematica", station: "Perímetro", type: "true_false",
    context: null,
    prompt: "El perímetro solo se puede calcular en triángulos, es imposible calcularlo en cuadrados.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explain: "¡Falso! Todas las figuras cerradas tienen un borde o contorno, así que a todas se les puede calcular el perímetro."
  },
  {
    id: "mat_27", subject: "matematica", station: "Perímetro", type: "multiple",
    context: "Tienes una figura muy rara que parece una estrella. ¡Tiene 10 lados iguales!",
    prompt: "¿Cuál será su perímetro?",
    illustration: `<svg viewBox="0 0 150 150" width="150" height="150">
      <polygon points="75,10 90,50 135,50 100,75 110,120 75,95 40,120 50,75 15,50 60,50" fill="#E6E6FA" stroke="#8A2BE2" stroke-width="3"/>
      <text x="35" y="40" font-family="Arial" font-size="12" fill="#000" font-weight="bold">1 cm</text>
    </svg>`,
    options: ["10 centímetros", "1 centímetro", "100 centímetros"],
    correctAnswer: "10 centímetros",
    explain: "¡Muy bien! Sumaste el número 1 un total de 10 veces."
  },
  {
    id: "mat_28", subject: "matematica", station: "Perímetro", type: "match",
    context: "Imagina que tienes una granja.",
    prompt: "¿Para qué sirve el perímetro en la vida real?",
    pairs: [
      { id: "m28_1", left: "Construir una cerca para las vacas", right: "Necesitas medir el perímetro del pasto" },
      { id: "m28_2", left: "Poner un marco a un cuadro", right: "Necesitas el perímetro de la foto" },
      { id: "m28_3", left: "Darle la vuelta a la manzana trotando", right: "Estás recorriendo el perímetro del parque" }
    ],
    explain: "¡El perímetro está en todas partes, desde las cercas hasta el deporte!"
  },
  {
    id: "mat_29", subject: "matematica", station: "Perímetro", type: "multiple",
    context: "Camilo tiene un cuadrado gigante.",
    prompt: "¿Cuál es el perímetro del cuadrado de Camilo?",
    illustration: `<svg viewBox="0 0 150 150" width="150" height="150">
      <rect x="25" y="25" width="100" height="100" fill="#E0FFFF" stroke="#00CED1" stroke-width="4"/>
      <text x="75" y="15" font-family="Arial" font-size="14" fill="#000" font-weight="bold" text-anchor="middle">1 metro</text>
      <text x="75" y="142" font-family="Arial" font-size="14" fill="#000" font-weight="bold" text-anchor="middle">1 metro</text>
      <text x="12" y="80" font-family="Arial" font-size="14" fill="#000" font-weight="bold" text-anchor="middle" transform="rotate(-90, 12, 80)">1 metro</text>
      <text x="138" y="80" font-family="Arial" font-size="14" fill="#000" font-weight="bold" text-anchor="middle" transform="rotate(90, 138, 80)">1 metro</text>
    </svg>`,
    options: ["4 metros", "1 metro", "10 metros"],
    correctAnswer: "4 metros",
    explain: "¡Exacto! El cuadrado tiene 4 lados iguales. 1 + 1 + 1 + 1 = 4 metros."
  },
  {
    id: "mat_30", subject: "matematica", station: "Perímetro", type: "true_false",
    context: "La regla de tu escuela te sirve para calcular el perímetro.",
    prompt: "Puedes poner la regla sobre cada lado de tu cuaderno de matemáticas, sumar las medidas y obtener el perímetro.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explain: "¡Verdadero! La regla te da la medida de los lados, luego tú solo haces la suma."
  },

  // 31-40: Sistema de Datos y Gráficos (Ciclo 6)
  {
    id: "mat_31", subject: "matematica", station: "Tablas y Gráficos", type: "multiple",
    context: "Cuando le preguntas a tus amigos cuál es su helado favorito, recoges mucha información. A eso se le llama recolectar 'datos'.",
    prompt: "¿Qué herramienta te sirve para anotar y ordenar esa información de forma fácil de entender?",
    options: ["Una tabla de frecuencias", "Un termómetro", "Una cinta métrica"],
    correctAnswer: "Una tabla de frecuencias",
    explain: "¡Sí! Las tablas nos ayudan a ver la información de manera ordenada y divertida."
  },
  {
    id: "mat_32", subject: "matematica", station: "Tablas y Gráficos", type: "multiple",
    context: "En una tabla, anotas cuántos niños prefieren jugar fútbol, cuántos básquet y cuántos tenis.",
    prompt: "¿Cómo se le llama al número de veces que se repite una respuesta (ej: 5 niños eligieron fútbol)?",
    options: ["Frecuencia absoluta", "Perímetro deportivo", "Medida no convencional"],
    correctAnswer: "Frecuencia absoluta",
    explain: "La frecuencia absoluta es solo el conteo de votos que obtuvo cada opción."
  },
  {
    id: "mat_33", subject: "matematica", station: "Tablas y Gráficos", type: "true_false",
    context: null,
    prompt: "Los diagramas de barras o los pictogramas usan imágenes y colores para mostrar los datos como si fuera un dibujo.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explain: "¡Verdadero! Los gráficos transforman los números en dibujos muy visuales y fáciles de leer."
  },
  {
    id: "mat_34", subject: "matematica", station: "Tablas y Gráficos", type: "match",
    context: "Las partes del análisis de datos.",
    prompt: "Relaciona correctamente:",
    pairs: [
      { id: "m34_1", left: "Encuesta", right: "Hacerle preguntas a tus amigos" },
      { id: "m34_2", left: "Frecuencia", right: "La cantidad de votos que sacó una respuesta" },
      { id: "m34_3", left: "Diagrama de barras", right: "Dibujar barritas para ver qué ganó" }
    ],
    explain: "¡Eres todo un investigador! Preguntas, cuentas y luego dibujas los resultados."
  },
  {
    id: "mat_35", subject: "matematica", station: "Tablas y Gráficos", type: "multiple",
    context: "Analiza el siguiente gráfico de barras sobre mascotas favoritas.",
    prompt: "¿Qué significa que la barra de los Gatos sea más alta que la barra de los Perros?",
    illustration: `<svg viewBox="0 0 200 150" width="200" height="150">
      <!-- Ejes -->
      <line x1="30" y1="10" x2="30" y2="120" stroke="#000" stroke-width="2"/>
      <line x1="30" y1="120" x2="180" y2="120" stroke="#000" stroke-width="2"/>
      <!-- Barras -->
      <rect x="50" y="40" width="40" height="80" fill="#FF69B4" rx="3"/>
      <rect x="110" y="70" width="40" height="50" fill="#87CEFA" rx="3"/>
      <!-- Etiquetas -->
      <text x="70" y="140" font-family="Arial" font-size="12" fill="#000" text-anchor="middle">Gatos</text>
      <text x="130" y="140" font-family="Arial" font-size="12" fill="#000" text-anchor="middle">Perros</text>
      <text x="20" y="50" font-family="Arial" font-size="10" fill="#000" text-anchor="end">10</text>
      <text x="20" y="80" font-family="Arial" font-size="10" fill="#000" text-anchor="end">5</text>
    </svg>`,
    options: ["Que a más personas les gustan los gatos", "Que los gatos son más altos", "Que hay un error en el gráfico"],
    correctAnswer: "Que a más personas les gustan los gatos",
    explain: "¡Exacto! En un diagrama de barras, la barra más alta es la que tuvo mayor frecuencia (más votos)."
  },
  {
    id: "mat_36", subject: "matematica", station: "Tablas y Gráficos", type: "multiple",
    context: "En vez de barras, a veces usamos un 'Pictograma', que es un gráfico que usa pequeños dibujos.",
    prompt: "Si haces un pictograma de frutas favoritas, ¿qué usarías para mostrar los votos de la manzana?",
    options: ["Dibujitos de manzanas", "Piedras reales", "Números romanos"],
    correctAnswer: "Dibujitos de manzanas",
    explain: "Los pictogramas son geniales porque usan imágenes (iconos o dibujos) para representar los votos."
  },
  {
    id: "mat_37", subject: "matematica", station: "Tablas y Gráficos", type: "true_false",
    context: null,
    prompt: "Si en una tabla dice que 6 niños hacen Robótica y 7 hacen Danza, entonces hay más niños en Robótica.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explain: "¡Falso! 7 es mayor que 6, por lo tanto la mayoría está en Danza."
  },
  {
    id: "mat_38", subject: "matematica", station: "Tablas y Gráficos", type: "match",
    context: "Analiza el siguiente gráfico de barras del zoológico.",
    prompt: "Relaciona correctamente según el dibujo:",
    illustration: `<svg viewBox="0 0 200 150" width="200" height="150">
      <line x1="30" y1="10" x2="30" y2="120" stroke="#000" stroke-width="2"/>
      <line x1="30" y1="120" x2="180" y2="120" stroke="#000" stroke-width="2"/>
      <rect x="50" y="70" width="40" height="50" fill="#FFA500" rx="2"/>
      <rect x="110" y="20" width="40" height="100" fill="#32CD32" rx="2"/>
      <text x="70" y="140" font-family="Arial" font-size="12" fill="#000" text-anchor="middle">Leones</text>
      <text x="130" y="140" font-family="Arial" font-size="12" fill="#000" text-anchor="middle">Monos</text>
      <text x="25" y="30" font-family="Arial" font-size="10" fill="#000" text-anchor="end">30</text>
      <text x="25" y="80" font-family="Arial" font-size="10" fill="#000" text-anchor="end">15</text>
    </svg>`,
    pairs: [
      { id: "m38_1", left: "Cantidad de Leones", right: "15" },
      { id: "m38_2", left: "Cantidad de Monos", right: "30" },
      { id: "m38_3", left: "¿Quién tiene la barra más alta?", right: "Los Monos" }
    ],
    explain: "¡Perfecto! Analizar gráficos es como leer una historia contada con dibujitos."
  },
  {
    id: "mat_39", subject: "matematica", station: "Tablas y Gráficos", type: "multiple",
    context: "Si en tu tabla de frecuencias sumas todos los votos que hubo en total (los de fútbol, tenis y básquet)...",
    prompt: "¿Qué descubres al sumar todo?",
    options: ["El número total de amigos que fueron encuestados", "El perímetro del colegio", "El año en el que estamos"],
    correctAnswer: "El número total de amigos que fueron encuestados",
    explain: "¡Súper inteligente! Al sumar la 'frecuencia absoluta' de todo, sabes a cuántas personas les preguntaste."
  },
  {
    id: "mat_40", subject: "matematica", station: "Tablas y Gráficos", type: "multiple",
    context: "Camilo y Laura van a hacer un concurso.",
    prompt: "¿Cuál es el orden correcto para saber qué helado comprar para la fiesta?",
    options: ["1. Preguntar 2. Hacer tabla 3. Dibujar gráfico", "1. Dibujar gráfico 2. Comprar helado", "1. Hacer tabla 2. Preguntar"],
    correctAnswer: "1. Preguntar 2. Hacer tabla 3. Dibujar gráfico",
    explain: "¡Excelente! Primero recolectas los datos, luego los ordenas en tu tabla de frecuencias, ¡y al final los dibujas en tu diagrama de barras!"
  }
];
