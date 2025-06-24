import { Product } from '@/types';
import Button from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface InfoProps {
  data: Product;
}
const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <hr className="my-4" />
      <div className="flex items-center mt-10 gap-x-4">
        <Button className="flex items-center gap-x-2">
          장바구니 담기
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
