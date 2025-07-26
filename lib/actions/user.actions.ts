'use server';

import { signIn, signOut } from '@/auth';
import { signInFormSchema } from '../validator';

// Sign in the user with credentials
export async function signInWithCredentials(
    prevState: unknown,
    formData: FormData
) {
    try {
        // Validar datos del formulario
        const user = signInFormSchema.parse({
            email: formData.get('email'),
            password: formData.get('password'),
        });

        // Intentar iniciar sesión con NextAuth
        await signIn('credentials', user);

        return { success: true, message: 'Signed in successfully' };
    } catch (error) {
        // Ya no usamos isRedirectError, simplemente propagamos o manejamos
        return { success: false, message: 'Invalid email or password' };
    }
}

// Sign the user out
export async function signOutUser() {
    await signOut();
}
