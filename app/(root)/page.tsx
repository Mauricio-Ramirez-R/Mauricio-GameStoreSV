import ProductList from '@/components/shared/product/product-list';
import { getLatestProductsAction } from '@/lib/actions/product.actions';

const HomePage = async () => {
  const latestProducts = await getLatestProductsAction();

  return (
    <div className='space-y-8'>
      <h2 className='h2-bold'>Latest Products</h2>
      <ProductList title='Newest Arrivals' data={latestProducts} />
    </div>
  );
};

export default HomePage;