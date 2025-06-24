import getCategory from '@/actions/get-category';
import getProducts from '@/actions/get-products';
import Banner from '@/components/banner';
import Container from '@/components/ui/container';
import NoResults from '@/components/ui/no-results';
import ProductCard from '@/components/ui/product-card';

export const revalidate = 0;

type Params = Promise<{ categoryId: string }>;

const Page = async ({ params }: { params: Params }) => {
  const { categoryId } = await params;
  const products = await getProducts({ categoryId: categoryId });
  const category = await getCategory(categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Banner data={category?.banner} />
        <div className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <div className="mt-6 lg:col-span-5 lg:mt-0">
              {products?.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {products?.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
