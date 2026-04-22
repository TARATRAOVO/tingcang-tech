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
  showEnglish = true,
  decorative = false,
}: BrandLockupProps) => {
  const alt = decorative ? '' : `${brand.companyName} 图形标志`;

  return (
    <div className={cn('inline-flex items-center gap-3', className)}>
      <img
        src={assetUrl('/brand-mark.png')}
        alt={alt}
        aria-hidden={decorative || undefined}
        className={cn(
          'block w-auto max-w-none object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.28)]',
          compact ? 'h-8' : 'h-10 md:h-11'
        )}
      />
      <div className="min-w-0">
        <div
          className={cn(
            'truncate font-semibold tracking-tight text-white',
            compact ? 'text-base md:text-lg' : 'text-lg md:text-xl'
          )}
        >
          {brand.companyName}
        </div>
        {showEnglish && (
          <div className="hidden text-[10px] uppercase tracking-[0.26em] text-white/35 md:block">
            {brand.englishName}
          </div>
        )}
      </div>
    </div>
  );
};
