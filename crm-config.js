/* Conexión de la web con el CRM de MZ Garage.
   url: dirección del CRM · key: clave pública pk_... (CRM → Configuración → Integración web).
   Si "url" o "key" están vacías, la web funciona igual que antes (solo WhatsApp) y no envía nada.
   DEMO: apunta al CRM de demostración gratuito (los datos se reinician al dormirse). */
window.MZ_CRM = { url: "https://mzgarage-crm.onrender.com", key: "pk_mzgarage_demo_2026" };
