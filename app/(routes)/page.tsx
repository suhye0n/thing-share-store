import Container from '@/components/ui/container';
import Banner from '@/components/banner';
import getBanner from '@/actions/get-banner';
import getProducts from '@/actions/get-products';
import ProductList from '@/components/product-list';

export const revalidate = 0;

const Page = async () => {
  const banner = await getBanner('7dd51b25-6b9b-404e-a2d8-4c0d57b19253');
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="pb-10 space-y-10">
        <Banner data={banner} />

        <div className="flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8">
          <ProductList title="추천 상품" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default Page;
