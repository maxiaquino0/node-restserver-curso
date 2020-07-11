// Puerto
process.env.PORT = process.env.PORT || 3000;


// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Vencimiento del token
// 60 segundos * 30 minutos * 24 horas * 30 días
process.env.CADUCUDAD_TOKEN = 60 * 60 * 24 * 30;

// Seed: semilla de autenticacion
process.env.SEED = process.env.SEED || 'este-es-elseed-desarrollo';

// Base de datos
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;


// Google Client ID
process.env.CLIENT_ID = process.env.CLIENT_ID || '591200697399-ae456co495tg4a8v59613q8c5utlg5kn.apps.googleusercontent.com';