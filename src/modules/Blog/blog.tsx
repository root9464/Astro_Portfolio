import { gsap } from 'gsap';
import { useRef, useState } from 'react';

export const BlogLink = () => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const telegramRef = useRef<HTMLParagraphElement | null>(null);

  const handleClick = () => {
    setExpanded((prev) => !prev);

    gsap.to(ref.current, {
      width: expanded ? '204px' : '30%',
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        if (!expanded) {
          if (telegramRef.current) {
            telegramRef.current.style.visibility = 'visible';
            gsap.to(telegramRef.current, {
              opacity: 1,
              duration: 0.3,
            });
          }
        } else {
          if (telegramRef.current) {
            gsap.to(telegramRef.current, {
              opacity: 0,
              duration: 0.3,
              onComplete: () => {
                if (telegramRef.current) telegramRef.current.style.visibility = 'hidden';
              },
            });
          }
        }
      },
    });
  };

  return (
    <div
      ref={ref}
      className='bg-uiPinkGradient w-[204px] h-12 px-4 flex flex-row items-center justify-between absolute right-0 bottom-1/2 cursor-pointer overflow-hidden rounded-[15px]'
      onClick={handleClick}>
      <p className='text-white whitespace-nowrap'>Присоеденись к нам:</p>
      {expanded && (
        <p ref={telegramRef} className='text-white opacity-0' style={{ visibility: 'hidden' }}>
          @dexlot_news
        </p>
      )}
    </div>
  );
};
