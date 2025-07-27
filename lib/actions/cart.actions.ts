'use server';

import { CartItem } from '@/types';

export async function addItemToCart(data: CartItem): Promise<{ success: boolean; message: string }> {
    return {
        success: true,
        message: 'Item added to the cart',
    };
}
