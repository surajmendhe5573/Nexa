require('dotenv').config();

module.exports = {
    'mongodb': process.env.MONGODB_URI ,
    'port': process.env.PORT || 4000, // Defaults to 4000 if not specified in .env
    'nodenv': process.env.NODE_ENV || 'local',

    'mailer': {
        'username': process.env.EMAIL_USER || '', // Email username from .env
        'password': process.env.EMAIL_PASS || '', // Email password from .env
    },

    'serverConfig': {
        'CORS': {
            'allowedHosts': [
                'http://localhost:4000', 
                'http://localhost:5173'
            ] // Modify based on your development setup
        }
    },

    'jwtAuthSecret': process.env.JWT_AUTH_SECRET || 'defaultAuthSecret', // JWT Auth Secret from .env or fallback
    'jwtRefreshSecret': process.env.JWT_REFRESH_SECRET || 'defaultRefreshSecret', // JWT Refresh Secret from .env or fallback

    'urls': {
        'baseDomain': 'http://localhost:4000/api/v1/users/verify/' // Can be adjusted based on environment
    },

    'STRIPE_SECRET_KEY': process.env.STRIPE_SECRET_KEY || '', // Stripe Secret Key from .env
};
