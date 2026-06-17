import Image from 'next/image';

type Props = {
  className?: string;
  height?: number;
};

export function BrandLogo({ className = '', height = 26 }: Props) {
  const aspectRatio = 368 / 90;
  const width = Math.round(height * aspectRatio);

  return (
    <Image
      src="/images/brand/logo-cardinal.png"
      alt="Fifty & Five"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
