require('dotenv').config();

module.exports = {
    'MONGODB_URI': process.env.MONGODB_URI,
    'PORT': process.env.PORT || 4000,
    'NODE_ENV': process.env.NODE_ENV || 'qa',
    "mailer": {
        "username": process.env.EMAIL_USER || '',
        "password": process.env.EMAIL_PASS || '',
        // "sendGridAPIKey": process.env.SENDGRID_API_KEY || ''
    },
    "serverConfig": {
        "CORS": {
            "allowedHosts": process.env.ALLOWED_HOSTS ? process.env.ALLOWED_HOSTS.split(',') : ['http://localhost:4000']
        }
    },
    "jwtAuthSecret": process.env.JWT_AUTH_SECRET || 'KukaSecret-1ef4c456-1cec-6550-8b34-5da1231225e2',
    "jwtRefreshSecret": process.env.JWT_REFRESH_SECRET || 'KukaRefresh-1ef4c456-f245-6080-8f42-37a57d9ad897',
    "urls": {
        "baseDomain": process.env.BASE_DOMAIN || "http://localhost:4000/api/v1/users/verify/"
    }
};
