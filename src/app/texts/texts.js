const title = "Suculentas Gabriel";
const email = "KARENTATIANA0428@GMAIL.COM";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en tus productos de " + title + " y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!"
);
const numeroWhatsApp = "+573144863055";

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Suculentas Gabriel se especializa en la venta de plantas decorativas que aportan vida y frescura a cualquier espacio. Con un enfoque en la belleza y la variedad, ofrecemos suculentas y plantas que transforman el ambiente con su presencia vibrante.",
        description2: "Nuestro objetivo es ayudarte a encontrar la planta perfecta para tu hogar o lugar de trabajo. Con el lema 'Decorar da vida', en Suculentas Gabriel nos dedicamos a brindar productos de calidad y asesoramiento personalizado para que cada rincón de tu vida esté lleno de verdor y estilo."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Decorar da vida",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/KAREN.TATIANA.CORREA",
        instagram: "https://www.instagram.com/KAREN_CORREA",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
