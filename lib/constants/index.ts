export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'GameStore SV';
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'La mejor tienda para gamers, con los mejores juegos de todo el mundo';
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
export const LATEST_PRODUCTS_LIMIT =
    Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;

export const signInDefaultValues = {
    email: '',
    password: '',
};

export const signUpDefaultValues = {
    name: 'Mauricio Ramirez',
    email: 'mauricio@example.com',
    password: '123456',
    confirmPassword: '123456',
};