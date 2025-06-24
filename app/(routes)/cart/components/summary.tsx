'use client';

import Button from '@/components/ui/button';
import useCart from '@/hooks/use-cart';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('결제가 완료되었습니다.');
      removeAll();
    }
    if (searchParams.get('canceled')) {
      toast.error('문제가 발생했습니다. 다시 시도해 주세요.');
    }
  }, [searchParams, removeAll]);

  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: items.map((item) => item.id),
    });

    window.location = response.data.url;
  };

  return (
    <div className="px-4 py-6 mt-16 rounded-lg bg-gray-50 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">주문 요약</h2>
      <Button disabled={items.length === 0} className="w-full mt-6" onClick={onCheckout}>
        결제하기
      </Button>
    </div>
  );
};

export default Summary;
