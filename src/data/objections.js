const objections = [
  {
    id: 1,
    title: "Está muy caro",
    category: "Precio",

    clientMessage:
      "El cliente dice que el viaje está muy caro.",

    response: `¡Claro! 😊 Entiendo perfectamente.

Podemos revisar diferentes opciones para encontrar una alternativa que se adapte mejor a tu presupuesto.

A veces podemos ajustar:

✈️ Las fechas
🏨 El tipo de habitación
📍 La ubicación
🎟️ Las actividades

¿Tienes un presupuesto aproximado por persona para que pueda ayudarte a encontrar una mejor opción?`,

    question:
      "¿Cuál sería aproximadamente tu presupuesto por persona?",

    nextStep:
      "Conocer el presupuesto real del cliente.",

    closing:
      `Perfecto 😊 Con esa información puedo revisar opciones que se adapten mejor a lo que estás buscando.`
  },

  {
    id: 2,
    title: "Lo voy a pensar",
    category: "Decisión",

    clientMessage:
      "El cliente dice que necesita pensarlo.",

    response: `¡Claro! 😊 Tómate tu tiempo.

Solo recuerda que los precios y la disponibilidad pueden cambiar dependiendo de vuelos y hospedajes.

Si quieres, puedo resolver cualquier duda que tengas para ayudarte a tomar una mejor decisión. ✈️`,

    question:
      "¿Hay algo específico que te haga dudar sobre el viaje?",

    nextStep:
      "Descubrir la verdadera razón por la que no compra.",

    closing:
      `Si quieres, podemos resolver esa duda ahora mismo 😊 y así puedes decidir con toda la información.`
  },

  {
    id: 3,
    title: "Tengo que preguntarle a mi pareja",
    category: "Decisión",

    clientMessage:
      "El cliente necesita consultar la decisión con su pareja.",

    response: `¡Perfecto! 😊

Si quieres, puedo prepararte un resumen sencillo con toda la información del viaje para que puedan revisarlo juntos.

Así tendrán claros los vuelos, hospedaje, actividades y precio. ✈️`,

    question:
      "¿Quieres que te prepare un resumen del viaje para compartirlo?",

    nextStep:
      "Facilitar que pueda presentar la propuesta.",

    closing:
      `Cuando lo revisen, con mucho gusto puedo resolver cualquier duda que tengan los dos 😊`
  },

  {
    id: 4,
    title: "Voy a comparar precios",
    category: "Comparación",

    clientMessage:
      "El cliente quiere comparar con otras agencias.",

    response: `¡Claro! 😊 Es completamente válido comparar opciones antes de tomar una decisión.

Te recomiendo revisar no solamente el precio, sino también:

✈️ Tipo de vuelo
🧳 Equipaje incluido
🏨 Ubicación del hotel
🎟️ Actividades
📞 Asistencia

Si quieres, puedo explicarte exactamente qué incluye esta opción para que puedas compararla fácilmente.`,

    question:
      "¿Quieres que te haga un resumen de todo lo que incluye?",

    nextStep:
      "Ayudar al cliente a comparar valor y no solamente precio.",

    closing:
      `Así podrás comparar exactamente qué estás recibiendo en cada opción 😊`
  },

  {
    id: 5,
    title: "No tengo todo el dinero",
    category: "Presupuesto",

    clientMessage:
      "El cliente quiere viajar pero no tiene todo el dinero.",

    response: `¡Entiendo perfectamente! 😊

Podemos revisar alternativas para planear tu viaje con mayor anticipación.

También podemos buscar opciones que se adapten mejor a tu presupuesto.

Lo importante es encontrar una opción realista para que puedas disfrutar tu viaje sin complicarte. ✈️`,

    question:
      "¿Cuánto te gustaría invertir aproximadamente por persona?",

    nextStep:
      "Encontrar una alternativa según su presupuesto.",

    closing:
      `Perfecto 😊 Con ese presupuesto podemos comenzar a buscar opciones para tu viaje.`
  },

  {
    id: 6,
    title: "Ahorita no puedo viajar",
    category: "Tiempo",

    clientMessage:
      "El cliente quiere viajar pero todavía no puede.",

    response: `¡Claro! 😊

Podemos revisar opciones para fechas futuras.

Planear con anticipación puede ayudarte a organizar mejor tu presupuesto y tener más tiempo para preparar tu viaje. ✈️`,

    question:
      "¿En qué mes aproximadamente te gustaría viajar?",

    nextStep:
      "Convertir el interés actual en una venta futura.",

    closing:
      `Perfecto 😊 Podemos comenzar a planear tu viaje para esa fecha.`
  }
];

export default objections;