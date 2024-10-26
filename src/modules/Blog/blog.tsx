import { gsap } from 'gsap';
import { useRef, useState } from 'react';

export const BlogLink = () => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const telegramRef = useRef<HTMLParagraphElement | null>(null);

  const handleClick = () => {
    setExpanded((prev) => !prev);

    const widthValue = window.innerWidth < 768 ? '90%' : '30%';

    gsap.to(ref.current, {
      width: expanded ? '204px' : widthValue,
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
      className='bg-uiPinkGradient w-[204px] h-12 px-4 flex flex-row items-center justify-between relative cursor-pointer overflow-hidden rounded-[15px] 
                md:absolute md:right-0 md:bottom-1/2'
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
