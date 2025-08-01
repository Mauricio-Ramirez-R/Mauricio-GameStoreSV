import { getOrderById } from '@/lib/actions/order.actions';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import OrderDetailsTable from './order-details-table';
import { ShippingAddress, Order } from '@/types';
import { auth } from '@/auth';

export const metadata: Metadata = {
    title: 'Order Details',
};

const OrderDetailsPage = async (props: {
    params: Promise<{
        id: string;
    }>;
}) => {
    const params = await props.params;

    const { id } = params;

    const order = await getOrderById(id);
    if (!order) notFound();

    const session = await auth();

    return (
        <OrderDetailsTable
            order={{
                ...order,
                orderItems: order.orderitems,
                shippingAddress: order.shippingAddress as ShippingAddress,
            } as Order}
            paypalClientId={process.env.PAYPAL_CLIENT_Id || "sb"}
            isAdmin={session?.user.role === 'admin' || false}
        />
    );
};

export default OrderDetailsPage;