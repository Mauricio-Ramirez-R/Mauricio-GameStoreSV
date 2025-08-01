import { getOrderById } from '@/lib/actions/order.actions';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import OrderDetailsTable from './order-details-table';
import { ShippingAddress, Order } from '@/types';

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

    return (
        <OrderDetailsTable
            order={{
                ...order,
                orderItems: order.orderitems,
                shippingAddress: order.shippingAddress as ShippingAddress,
            } as Order}
            paypalclientId={process.env.PAYPAL_CLIENT_Id || "sb"}
        />
    );
};

export default OrderDetailsPage;