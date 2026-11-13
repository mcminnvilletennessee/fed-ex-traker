/* ============================================================
   LOGIN / TRACKING CONFIGURATION
   The existing PRO EX login credentials and tracking configuration are maintained here.
   Anything in browser JavaScript can be viewed by visitors.
============================================================ */
const SHIPMENT = {
  sender: "Princes Leonor",
  origin: "Madrid, Spain",
  recipient: "Ernesto Corte",
  destination: "Hermosillo, Sonora, Mexico",
  status: "inFlight"
};
/* ============================================================
   START SHIPMENT POPUP TEXT — EDIT HERE
   paymentNotice: popup label / description
   noPaymentTitle: popup title
   noPaymentText: first message paragraph
   paymentSupportText: supporting information
   paymentClosingText: closing message
   whatsapp: WhatsApp support button text
   paymentFooter: popup footer
   Edit the matching values in es, en and pt to update each language.
============================================================ */
const translations = {
  es: {
    topBrand:"SERVICIOS INTERNACIONALES DE ENVÍO PRO EX",
    topRight:"Entrega fiable. Seguimiento claro.",
    navTrack:"Rastrear",
    navShipping:"Envíos",
    navSupport:"Ayuda",
    language:"Idioma",
    headerCta:"Rastrear envío →",
    welcome:"BIENVENIDO A",
    heroTitle:"Envíos internacionales, simplificados.",
    heroText:"Consulte la información de su envío y manténgase informado sobre cada actualización confirmada.",
    artLabel:"Su envío, bajo seguimiento",
    tools:"SEGUIMIENTO DE ENVÍOS",
    trackTitle:"Consulte su envío",
    lookup:"Acceso al envío",
    trackingLabel:"Número de seguimiento",
    passwordLabel:"Contraseña de seguimiento",
    trackButton:"CONSULTAR ENVÍO →",
    loginNote:"Introduzca el número de seguimiento y la contraseña proporcionados por PRO EX.",
    errorCredentials:"No se encontró un envío con esos datos. Compruebe el número y la contraseña.",
    detailsEyebrow:"INFORMACIÓN DEL ENVÍO",
    overview:"Resumen del envío",
    awaiting:"Pendiente de despacho",
    currentStatus:"ESTADO ACTUAL",
    awaitingText:"El envío está registrado y a la espera de confirmación de despacho.",
    deliveryEstimate:"ENTREGA ESTIMADA",
    notAvailable:"No disponible",
    estimateNote:"Se actualizará cuando se confirme el despacho.",
    progressTitle:"Progreso del envío",
    progressNote:"Estado actual del recorrido del envío.",
    inFlight:"Actualmente en vuelo",
    inFlightText:"El envío se encuentra actualmente en vuelo hacia México.",
    stageStarted:"Envío iniciado",
    stageStartedNote:"Completado",
    stageAirport:"En el aeropuerto de salida",
    stageAirportNote:"Completado",
    stageFlight:"Actualmente en vuelo",
    stageFlightNote:"Estado actual",
    stageMexicoCity:"Llegó a Ciudad de México",
    stageMexicoCityNote:"Próxima etapa",
    stageHermosillo:"Actualmente en Hermosillo, Sonora, México",
    stageHermosilloNote:"Pendiente",
    stageCustoms:"Esperando el despacho de aduanas",
    stageCustomsNote:"Pendiente",
    stageRegistered:"Envío registrado",
    stageRegisteredNote:"Información recibida",
    stageCollected:"Recogido",
    stageCollectedNote:"Pendiente",
    stageDestination:"Centro de destino",
    stageDestinationNote:"Pendiente",
    stageDelivery:"En reparto",
    stageDeliveryNote:"Pendiente",
    stageDelivered:"Paquete entregado",
    stageDeliveredNote:"Pendiente",
    latestUpdate:"Última actualización",
    registeredNote:"El envío se encuentra registrado. Todavía no hay movimientos de tránsito confirmados.",
    startShipment:"INICIAR ENVÍO →",
    senderInfo:"Información del remitente",
    senderRole:"Remitente",
    sender:"Remitente",
    origin:"Origen",
    recipientInfo:"Información del destinatario",
    recipientRole:"Destinatario",
    recipient:"Destinatario",
    destination:"Destino",
    destinationPending:"Por confirmar",
    clarity:"TRANSPARENCIA EN CADA ETAPA",
    howTitle:"Información clara para cada envío.",
    howText:"PRO EX reúne la información del remitente, del destinatario y las actualizaciones confirmadas del envío en un solo lugar.",
    featureOne:"Seguimiento centralizado",
    featureOneText:"Consulte los datos principales de su envío.",
    featureTwo:"Actualizaciones verificadas",
    featureTwoText:"Las etapas cambian cuando se registra una actualización confirmada.",
    footerText:"PRO EX · Servicios internacionales de envío",
    footerTrack:"Consultar otro envío ↑",
    noPaymentTitle:"NO SE ENCONTRÓ EL REGISTRO DE PAGO",
    noPaymentText:"En este momento, no podemos localizar un registro de pago asociado a este envío.",
    whatsapp:"Contactar con el servicio de atención al cliente de PRO EX por WhatsApp",
    paymentFooter:"PRO EX Atención al Cliente",
    destinationCity:"Hermosillo, Sonora, México",
    contentsEyebrow:"CONTENIDO DEL ENVÍO",
    contentsTitle:"Contenido del envío",
    contentsIntro:"Galería ilustrativa de los artículos incluidos en este envío.",
    itemPhoto1:"Contenido del envío",
    itemPhoto2:"Foto del artículo 2",
    itemPhoto3:"Foto del artículo 3",
    itemPhoto4:"Foto del artículo 4",
    imagePlaceholder:"Espacio para imagen",
    vehicleEyebrow:"DATOS DEL ENVÍO DEL VEHÍCULO",
    vehicleTitle:"Datos del envío del vehículo",
    make:"Marca",
    model:"Modelo",
    year:"Año",
    trim:"Versión",
    bodyStyle:"Tipo de carrocería",
    bodyStyleValue:"Sedán de 4 puertas",
    transmission:"Transmisión",
    automatic:"Automática",
    exteriorColour:"Color exterior",
    interiorColour:"Color interior",
    whitePearl:"Blanco Perla Platino",
    black:"Negro",
    transportMethod:"Método de transporte",
    groundTransport:"Transporte terrestre puerta a puerta (conducido hasta el destino)",
    departureDate:"Fecha de salida",
    estimatedArrival:"Llegada estimada",
    pendingPayment:"Pendiente de confirmación",
    arrivalAfterConfirmation:"Se confirmará después de la confirmación correspondiente",
    awaitingConfirmation:"A la espera de confirmación",
    vehicleGallery:"Galería de fotos del vehículo",
    vehicleGalleryIntro:"Cinco fotografías del vehículo.",
    frontView:"Vista frontal",
    rearView:"Vista trasera",
    sideView:"Vista lateral",
    interiorView:"Interior",
    dashboardView:"Tablero",
    additionalView:"Vista adicional",
    noPaymentTitle:"NO SE ENCONTRÓ EL REGISTRO DE PAGO",
    noPaymentText:"En este momento, no podemos localizar un registro de pago asociado a este envío.",
    whatsapp:"Contactar con el servicio de atención al cliente de PRO EX por WhatsApp",
    paymentFooter:"PRO EX Atención al Cliente",
    close:"Cerrar",
    trunkView:"Maletero",
    paymentSupportText:"Para obtener aclaraciones o asistencia, póngase en contacto con su agente personal asignado, quien podrá revisar el estado del pago y facilitarle la información necesaria.",
    paymentClosingText:"Gracias por su comprensión."
  },
  en: {
    topBrand:"PRO EX INTERNATIONAL SHIPPING SERVICES",
    topRight:"Reliable delivery. Clear tracking.",
    navTrack:"Track",
    navShipping:"Shipping",
    navSupport:"Support",
    language:"Language",
    headerCta:"Track shipment →",
    welcome:"WELCOME TO",
    heroTitle:"International shipping, made simple.",
    heroText:"Review your shipment information and stay informed about confirmed updates.",
    artLabel:"Your shipment, tracked",
    tools:"SHIPMENT TRACKING",
    trackTitle:"Track your shipment",
    lookup:"Shipment access",
    trackingLabel:"Tracking number",
    passwordLabel:"Tracking password",
    trackButton:"VIEW SHIPMENT →",
    loginNote:"Enter the tracking number and password provided by PRO EX.",
    errorCredentials:"No shipment was found with those details. Check the tracking number and password.",
    detailsEyebrow:"SHIPMENT INFORMATION",
    overview:"Shipment overview",
    awaiting:"Awaiting dispatch",
    currentStatus:"CURRENT STATUS",
    awaitingText:"The shipment is registered and awaiting dispatch confirmation.",
    deliveryEstimate:"ESTIMATED DELIVERY",
    notAvailable:"Not available",
    estimateNote:"This will be updated once dispatch is confirmed.",
    progressTitle:"Shipment progress",
    progressNote:"Current shipment journey status.",
    inFlight:"Currently in flight",
    inFlightText:"The shipment is currently in flight to Mexico.",
    stageStarted:"Shipment started",
    stageStartedNote:"Completed",
    stageAirport:"At departure airport",
    stageAirportNote:"Completed",
    stageFlight:"Currently in flight",
    stageFlightNote:"Current status",
    stageMexicoCity:"Arrived in Mexico City",
    stageMexicoCityNote:"Next stage",
    stageHermosillo:"Currently in Hermosillo, Sonora, Mexico",
    stageHermosilloNote:"Pending",
    stageCustoms:"Waiting for customs clearance",
    stageCustomsNote:"Pending",
    stageRegistered:"Shipment registered",
    stageRegisteredNote:"Information received",
    stageCollected:"Collected",
    stageCollectedNote:"Pending",
    stageDestination:"Destination facility",
    stageDestinationNote:"Pending",
    stageDelivery:"Out for delivery",
    stageDeliveryNote:"Pending",
    stageDelivered:"Package delivered",
    stageDeliveredNote:"Pending",
    latestUpdate:"Latest update",
    registeredNote:"The shipment is registered. No confirmed transit movements have been recorded yet.",
    startShipment:"START SHIPMENT →",
    senderInfo:"Sender information",
    senderRole:"Sender",
    sender:"Sender",
    origin:"Origin",
    recipientInfo:"Recipient information",
    recipientRole:"Recipient",
    recipient:"Recipient",
    destination:"Destination",
    destinationPending:"To be confirmed",
    clarity:"CLARITY AT EVERY STAGE",
    howTitle:"Clear information for every shipment.",
    howText:"PRO EX brings sender details, recipient information and confirmed shipment updates together in one place.",
    featureOne:"Centralised tracking",
    featureOneText:"Review your shipment's key information.",
    featureTwo:"Verified updates",
    featureTwoText:"Milestones change when a confirmed update is recorded.",
    footerText:"PRO EX · International shipping services",
    footerTrack:"Track another shipment ↑",
    noPaymentTitle:"PAYMENT RECORD NOT FOUND",
    noPaymentText:"We are unable to locate a payment record associated with this shipment at the moment.",
    whatsapp:"Contact PRO EX Customer Support on WhatsApp",
    paymentFooter:"PRO EX Customer Support",
    destinationCity:"Hermosillo, Sonora, Mexico",
    contentsEyebrow:"SHIPMENT CONTENTS",
    contentsTitle:"Shipment contents",
    contentsIntro:"Photographs of the items and shipping documents included with this shipment.",
    itemPhoto1:"Shipment contents photo 1",
    itemPhoto2:"Shipment contents photo 2",
    itemPhoto3:"Shipment contents photo 3",
    itemPhoto4:"Item photo 4",
    imagePlaceholder:"Image placeholder",
    vehicleEyebrow:"VEHICLE SHIPMENT DETAILS",
    vehicleTitle:"Vehicle shipment details",
    make:"Make",
    model:"Model",
    year:"Year",
    trim:"Trim",
    bodyStyle:"Body style",
    bodyStyleValue:"4-door sedan",
    transmission:"Transmission",
    automatic:"Automatic",
    exteriorColour:"Exterior colour",
    interiorColour:"Interior colour",
    whitePearl:"Platinum White Pearl",
    black:"Black",
    transportMethod:"Transport method",
    groundTransport:"Door-to-door ground transportation (driven to destination)",
    departureDate:"Departure date",
    estimatedArrival:"Estimated arrival",
    pendingPayment:"Pending confirmation",
    arrivalAfterConfirmation:"To be confirmed after the relevant confirmation",
    awaitingConfirmation:"Awaiting confirmation",
    vehicleGallery:"Vehicle photo gallery",
    vehicleGalleryIntro:"Five vehicle photographs.",
    frontView:"Front view",
    rearView:"Rear view",
    sideView:"Side view",
    interiorView:"Interior",
    dashboardView:"Dashboard",
    additionalView:"Additional view",
    noPaymentTitle:"PAYMENT RECORD NOT FOUND",
    noPaymentText:"We are unable to locate a payment record associated with this shipment at the moment.",
    whatsapp:"Contact PRO EX Customer Support on WhatsApp",
    paymentFooter:"PRO EX Customer Support",
    close:"Close",
    trunkView:"Trunk",
    paymentSupportText:"For further clarification or assistance, please contact your assigned personal agent, who can review the payment status and provide the necessary information.",
    paymentClosingText:"Thank you for your understanding."
  },
  pt: {
    topBrand:"SERVIÇOS INTERNACIONAIS DE ENVIO PRO EX",
    topRight:"Entrega confiável. Rastreamento claro.",
    navTrack:"Rastrear",
    navShipping:"Envios",
    navSupport:"Suporte",
    language:"Idioma",
    headerCta:"Rastrear envio →",
    welcome:"BEM-VINDO À",
    heroTitle:"Envios internacionais, de forma simples.",
    heroText:"Consulte as informações da sua remessa e acompanhe as atualizações confirmadas.",
    artLabel:"Sua remessa sob rastreamento",
    tools:"RASTREAMENTO DE ENVIOS",
    trackTitle:"Consulte sua remessa",
    lookup:"Acesso à remessa",
    trackingLabel:"Número de rastreamento",
    passwordLabel:"Senha de rastreamento",
    trackButton:"CONSULTAR ENVIO →",
    loginNote:"Insira o número de rastreamento e a senha fornecidos pela PRO EX.",
    errorCredentials:"Nenhuma remessa foi encontrada com esses dados. Confira o número e a senha.",
    detailsEyebrow:"INFORMAÇÕES DA REMESSA",
    overview:"Resumo da remessa",
    awaiting:"Aguardando despacho",
    currentStatus:"STATUS ATUAL",
    awaitingText:"A remessa está registrada e aguarda a confirmação do despacho.",
    deliveryEstimate:"PREVISÃO DE ENTREGA",
    notAvailable:"Indisponível",
    estimateNote:"Será atualizado quando o despacho for confirmado.",
    progressTitle:"Progresso da remessa",
    progressNote:"Status atual do percurso da remessa.",
    inFlight:"Atualmente em voo",
    inFlightText:"A remessa está atualmente em voo para o México.",
    stageStarted:"Envio iniciado",
    stageStartedNote:"Concluído",
    stageAirport:"No aeroporto de partida",
    stageAirportNote:"Concluído",
    stageFlight:"Atualmente em voo",
    stageFlightNote:"Status atual",
    stageMexicoCity:"Chegou à Cidade do México",
    stageMexicoCityNote:"Próxima etapa",
    stageHermosillo:"Atualmente em Hermosillo, Sonora, México",
    stageHermosilloNote:"Pendente",
    stageCustoms:"Aguardando liberação alfandegária",
    stageCustomsNote:"Pendente",
    stageRegistered:"Remessa registrada",
    stageRegisteredNote:"Informações recebidas",
    stageCollected:"Coletada",
    stageCollectedNote:"Pendente",
    stageDestination:"Centro de destino",
    stageDestinationNote:"Pendente",
    stageDelivery:"Saiu para entrega",
    stageDeliveryNote:"Pendente",
    stageDelivered:"Pacote entregue",
    stageDeliveredNote:"Pendente",
    latestUpdate:"Última atualização",
    registeredNote:"A remessa está registrada. Ainda não há movimentações de trânsito confirmadas.",
    startShipment:"INICIAR ENVIO →",
    senderInfo:"Informações do remetente",
    senderRole:"Remetente",
    sender:"Remetente",
    origin:"Origem",
    recipientInfo:"Informações do destinatário",
    recipientRole:"Destinatário",
    recipient:"Destinatário",
    destination:"Destino",
    destinationPending:"A confirmar",
    clarity:"CLAREZA EM CADA ETAPA",
    howTitle:"Informações claras para cada remessa.",
    howText:"A PRO EX reúne os dados do remetente, do destinatário e as atualizações confirmadas em um só lugar.",
    featureOne:"Rastreamento centralizado",
    featureOneText:"Consulte as principais informações da sua remessa.",
    featureTwo:"Atualizações verificadas",
    featureTwoText:"As etapas mudam quando uma atualização confirmada é registrada.",
    footerText:"PRO EX · Serviços internacionais de envio",
    footerTrack:"Rastrear outra remessa ↑",
    noPaymentTitle:"REGISTRO DE PAGAMENTO NÃO ENCONTRADO",
    noPaymentText:"No momento, não conseguimos localizar um registro de pagamento associado a este envio.",
    whatsapp:"Contatar o suporte ao cliente da PRO EX pelo WhatsApp",
    paymentFooter:"PRO EX Atendimento ao Cliente",
    destinationCity:"Hermosillo, Sonora, México",
    contentsEyebrow:"CONTEÚDO DA REMESSA",
    contentsTitle:"Conteúdo da remessa",
    contentsIntro:"Fotografias dos itens e documentos de envio incluídos nesta remessa.",
    itemPhoto1:"Foto do conteúdo 1",
    itemPhoto2:"Foto do conteúdo 2",
    itemPhoto3:"Foto do conteúdo 3",
    itemPhoto4:"Foto do item 4",
    imagePlaceholder:"Espaço para imagem",
    vehicleEyebrow:"DETALHES DO ENVIO DO VEÍCULO",
    vehicleTitle:"Detalhes do envio do veículo",
    make:"Marca",
    model:"Modelo",
    year:"Ano",
    trim:"Versão",
    bodyStyle:"Tipo de carroceria",
    bodyStyleValue:"Sedã de 4 portas",
    transmission:"Transmissão",
    automatic:"Automática",
    exteriorColour:"Cor externa",
    interiorColour:"Cor interna",
    whitePearl:"Branco Pérola Platina",
    black:"Preto",
    transportMethod:"Método de transporte",
    groundTransport:"Transporte terrestre porta a porta (conduzido até o destino)",
    departureDate:"Data de saída",
    estimatedArrival:"Previsão de chegada",
    pendingPayment:"Aguardando confirmação",
    arrivalAfterConfirmation:"A confirmar após a confirmação correspondente",
    awaitingConfirmation:"Aguardando confirmação",
    vehicleGallery:"Galeria de fotos do veículo",
    vehicleGalleryIntro:"Cinco fotografias do veículo.",
    frontView:"Vista frontal",
    rearView:"Vista traseira",
    sideView:"Vista lateral",
    interiorView:"Interior",
    dashboardView:"Painel",
    additionalView:"Vista adicional",
    noPaymentTitle:"REGISTRO DE PAGAMENTO NÃO ENCONTRADO",
    noPaymentText:"No momento, não conseguimos localizar um registro de pagamento associado a este envio.",
    whatsapp:"Contatar o suporte ao cliente da PRO EX pelo WhatsApp",
    paymentFooter:"PRO EX Atendimento ao Cliente",
    close:"Fechar",
    trunkView:"Porta-malas",
    paymentSupportText:"Para obter esclarecimentos ou assistência, entre em contato com seu agente pessoal designado, que poderá verificar o status do pagamento e fornecer as informações necessárias.",
    paymentClosingText:"Agradecemos a sua compreensão."
  }
};
let language = "es";

// Short helper for selecting an element by its ID.
const $ = (id) => document.getElementById(id);

// Apply the selected language to all translated website elements.
function setLanguage(next) {
  language = translations[next] ? next : "es";
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  $("languageSelect").value = language;
  $("closeModal").setAttribute("aria-label", translations[language].close);
}

// Change the website language when the visitor selects another option.
$("languageSelect").addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

// The shipment dashboard is displayed immediately; no tracking form or credentials are required.\n\n// Open the Start Shipment popup from the dashboard button.
$("startShipment").addEventListener("click", () => {
  $("paymentModal").hidden = false;
  $("closeModal").focus();
});

// Close the popup with its close button, backdrop, or Escape key.
$("closeModal").addEventListener("click", () => {
  $("paymentModal").hidden = true;
});

$("paymentModal").addEventListener("click", (event) => {
  if (event.target === $("paymentModal")) {
    $("paymentModal").hidden = true;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    $("paymentModal").hidden = true;
    $("photoLightbox").hidden = true;
    $("lightboxImage").src = "";
  }
});

// Open shipment contents and vehicle photographs in the same accessible image viewer.
document.querySelectorAll(".contents-gallery .image-slot img, .vehicle-gallery .image-slot img").forEach((image) => {
  image.addEventListener("click", () => {
    $("lightboxImage").src = image.src;
    $("lightboxImage").alt = image.alt;
    $("photoLightbox").hidden = false;
    $("closePhotoLightbox").focus();
  });
  image.tabIndex = 0;
  image.setAttribute("role", "button");
  image.setAttribute("aria-label", `${image.alt}. Open larger view`);
  image.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      image.click();
    }
  });
});

// Close the enlarged photograph with its close button, backdrop, or Escape key.
$("closePhotoLightbox").addEventListener("click", () => {
  $("photoLightbox").hidden = true;
  $("lightboxImage").src = "";
});

$("photoLightbox").addEventListener("click", (event) => {
  if (event.target === $("photoLightbox")) {
    $("photoLightbox").hidden = true;
    $("lightboxImage").src = "";
  }
});

// Start in Spanish, matching the original page language.
setLanguage("es");
