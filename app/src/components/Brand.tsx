import { assetUrl } from '@/lib/asset-url';
import { brand } from '@/lib/brand';
import { cn } from '@/lib/utils';

interface BrandMarkProps {
  className?: string;
  decorative?: boolean;
}

export const BrandMark = ({ className, decorative = true }: BrandMarkProps) => {
  const alt = decorative ? '' : `${brand.companyName} logo`;

  return (
    <img
      src={assetUrl('/brand-mark.svg')}
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
}

export const BrandLockup = ({
  className,
  compact = false,
  showEnglish = true,
}: BrandLockupProps) => {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div
        className={cn(
          'relative flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]',
          compact ? 'h-10 w-10' : 'h-12 w-12'
        )}
      >
        <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(255,138,0,0.14),transparent_58%),radial-gradient(circle_at_70%_70%,rgba(20,156,230,0.14),transparent_58%)]" />
        <BrandMark className={compact ? 'h-6 w-6' : 'h-7 w-7'} />
      </div>
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
