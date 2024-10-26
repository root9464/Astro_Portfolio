import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export const Main = () => {
  const leftHeadings = useRef<(HTMLHeadingElement | null)[]>([]);
  const rightLinks = useRef<(HTMLAnchorElement | null)[]>([]);

  const staticParamsAnimate: gsap.TweenVars = {
    opacity: 0,
    stagger: 0.2,
    duration: 0.5,
    ease: 'power2.out',
  };

  const socialLinks: Record<string, string>[] = [
    {
      text: 'This is my GitHub',
      url: 'https://example.com/github',
    },
    {
      text: 'This is my Telegram',
      url: 'https://example.com/telegram',
    },
    {
      text: 'This is my Twitter',
      url: 'https://example.com/twitter',
    },
  ];

  useEffect(() => {
    gsap.from(leftHeadings.current, {
      x: (index) => index * 50,
      ...staticParamsAnimate,
    });

    gsap.from(rightLinks.current, {
      x: (index) => index * 50,
      ...staticParamsAnimate,
    });
  }, []);

  return (
    <div className='w-full h-[700px] relative'>
      <div className='text-4xl font-semibold'>
        {['I’m a web3.0 frontend developer', 'and game developer', 'telegram mini apps/dapps creator'].map((text, index) => (
          <h1 key={index} ref={(el) => (leftHeadings.current[index] = el)} style={{ marginLeft: `${index * 50}px` }}>
            {text}
          </h1>
        ))}
      </div>

      <div className='w-fit text-4xl font-semibold absolute right-0 bottom-0'>
        {socialLinks.map((link, index) => (
          <a
            key={index}
            ref={(el) => (rightLinks.current[index] = el)}
            href={link.url}
            style={{ marginLeft: `${index * 50}px`, display: 'block' }}>
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};
