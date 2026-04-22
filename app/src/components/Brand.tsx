import { assetUrl } from '@/lib/asset-url';
import { cn } from '@/lib/utils';
import { brand } from '@/lib/brand';

interface BrandMarkProps {
  className?: string;
  decorative?: boolean;
}

export const BrandMark = ({ className, decorative = true }: BrandMarkProps) => {
  const alt = decorative ? '' : `${brand.companyName} 图形标志`;

  return (
    <img
      src={assetUrl('/brand-mark.png')}
      alt={alt}
      aria-hidden={decorative || undefined}
      className={cn('h-10 w-10 object-contain', className)}
    />
  );
};

interface BrandLockupProps {
  className?: string;
  compact?: boolean;
  showEnglish?: boolean;
  decorative?: boolean;
}

export const BrandLockup = ({
  className,
  compact = false,
  decorative = false,
}: BrandLockupProps) => {
  const alt = decorative ? '' : `${brand.companyName} logo`;

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-[22px] border border-white/10 bg-white/95 shadow-[0_14px_32px_rgba(0,0,0,0.28)]',
        compact ? 'px-2.5 py-1.5' : 'px-3 py-2',
        className
      )}
    >
      <img
        src={assetUrl('/brand-logo.png')}
        alt={alt}
        aria-hidden={decorative || undefined}
        className={cn(
          'block w-auto max-w-none object-contain',
          compact ? 'h-8 md:h-9' : 'h-10 md:h-11'
        )}
      />
    </div>
  );
};
