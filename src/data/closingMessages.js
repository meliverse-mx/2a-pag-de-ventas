const closingMessages = [
  {
    id: 1,

    title:
      "Cliente interesado",

    situation:
      "El cliente dice que le gustó el paquete.",

    message: `¡Qué emoción! 😍✈️

Me da mucho gusto que te haya gustado.

Si quieres, podemos revisar la disponibilidad actual para confirmar que todo siga disponible.`,

    action:
      "Solicitar confirmación de fechas y viajeros.",

    closing:
      `Para revisar la disponibilidad necesito confirmar:

📅 Fecha
👥 Número de viajeros
🏨 Tipo de habitación`
  },

  {
    id: 2,

    title:
      "Cliente pregunta cómo reservar",

    situation:
      "El cliente quiere avanzar con la compra.",

    message: `¡Excelente! 😍

Me da mucho gusto ayudarte a comenzar con la reserva de tu viaje.

Primero vamos a confirmar la disponibilidad y después te explicaré paso a paso cómo continuar.`,

    action:
      "Confirmar disponibilidad.",

    closing:
      `¿Me confirmas nuevamente las fechas y el número de viajeros? 😊`
  },

  {
    id: 3,

    title:
      "Última duda",

    situation:
      "El cliente tiene una duda antes de comprar.",

    message: `Claro 😊

Es muy importante que tengas toda la información antes de tomar una decisión.

Con mucho gusto puedo resolver todas tus dudas para que puedas sentirte tranquilo(a) con tu viaje.`,

    action:
      "Resolver la duda y volver a preguntar si desea avanzar.",

    closing:
      `¿Hay alguna otra duda que quieras resolver antes de continuar con la reserva? ✈️`
  },

  {
    id: 4,

    title:
      "Cierre suave",

    situation:
      "El cliente parece interesado pero todavía no decide.",

    message: `Me parece que esta opción puede ser muy buena para lo que estás buscando 😊✈️

Si quieres, podemos avanzar revisando la disponibilidad actual.`,

    action:
      "Invitar al siguiente paso.",

    closing:
      `¿Te gustaría que revisemos la disponibilidad para tus fechas?`
  }
];

export default closingMessages;