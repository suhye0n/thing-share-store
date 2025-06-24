import { Banner as BannerType } from '@/types';

interface BannerProps {
  data: BannerType;
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  return (
    <div className="p-4 overflow-hidden sm:p-6 lg:p-8 rounded-xl">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full text-center gap-y-8">
          <div className="max-w-xs text-3xl font-bold sm:text-5xl lg:text-6xl sm:max-w-xl">
            {data?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
