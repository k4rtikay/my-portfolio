'use client';
import { cn } from '@/lib/utils';
import { HTMLMotionProps, motion } from 'motion/react';

export const GRADIENT_ANGLES = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
};

export type ProgressiveBlurProps = {
  direction?: keyof typeof GRADIENT_ANGLES;
  blurLayers?: number;
  className?: string;
  blurIntensity?: number;
} & HTMLMotionProps<'div'>;

export function ProgressiveBlur({
  direction = 'bottom',
  blurLayers = 8,
  className,
  blurIntensity = 0.25,
  ...props
}: ProgressiveBlurProps) {
  const layers = Math.max(blurLayers, 2);
  const segmentSize = 1 / (blurLayers + 1);

  return (
    <div className={cn('relative', className)}>
      {Array.from({ length: layers }).map((_, index) => {
        const angle = GRADIENT_ANGLES[direction];
        const gradientStops = [
          index * segmentSize,
          (index + 1) * segmentSize,
          (index + 2) * segmentSize,
          (index + 3) * segmentSize,
        ].map(
          (pos, posIndex) =>
            `rgba(255, 255, 255, ${posIndex === 1 || posIndex === 2 ? 1 : 0}) ${pos * 100}%`
        );

        const gradient = `linear-gradient(${angle}deg, ${gradientStops.join(
          ', '
        )})`;

        return (
          <motion.div
            key={index}
            className='pointer-events-none absolute inset-0 rounded-[inherit]'
            style={{
              maskImage: gradient,
              WebkitMaskImage: gradient,
              backdropFilter: `blur(${index * blurIntensity}px)`,
              WebkitBackdropFilter: `blur(${index * blurIntensity}px)`,
            }}
            {...props}
          />
        );
      })}
    </div>
  );
}


export function Header() {
    
    const layers = [
        { blur: 0.15, start: 0, end: 0 },
        { blur: 0.25, start: 5, end: 5 },
        { blur: 0.35, start: 10, end: 10 },
        { blur: 0.45, start: 15, end: 15 },
        { blur: 0.55, start: 20, end: 20 },
        { blur: 0.65, start: 25, end: 25 },
        { blur: 0.75, start: 30, end: 30 },
        { blur: 0.85, start: 35, end: 35 },
        { blur: 0.95, start: 40, end: 40 },
        { blur: 1.05, start: 45, end: 45 },
        { blur: 1.15, start: 50, end: 50 },
        { blur: 1.25, start: 55, end: 55 },
        { blur: 1.35, start: 60, end: 60 },
    ];

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
            aria-hidden="true"
            style={{ height: 80 }}
        >
            <ProgressiveBlur
                direction="top"
                blurLayers={15}
                blurIntensity={0.3}
                className="h-full"
            />
        </header>
    );
}
