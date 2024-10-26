import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export const AboutMe = () => {
  const paragraphsRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      paragraphsRef.current,
      { autoAlpha: 0, y: 20 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.5,
      },
    );
  }, []);

  return (
    <div className='w-10/12 h-full flex flex-col justify-around items-center gap-y-8 text-xl font-medium mx-auto'>
      <p ref={(el) => (paragraphsRef.current[0] = el)}>
        My name is Egor, and I specialize in developing websites based on web3.0 technology utilizing the TON blockchain. My expertise
        encompasses the creation of decentralized applications (DApps) and engaging web games that immerse users in unique interactive
        experiences.
      </p>
      <p ref={(el) => (paragraphsRef.current[1] = el)}>
        Additionally, I develop Telegram mini apps, integrating bot functionalities into the popular messaging platform to enhance user
        interaction. My objective is to create innovative and user-friendly solutions that address current challenges while making technology
        more accessible.
      </p>
      <p ref={(el) => (paragraphsRef.current[2] = el)}>
        I am committed to continuous growth and the exploration of emerging trends in blockchain and game development, ensuring that I offer my
        clients the most modern and effective solutions. If you have ideas for collaboration or projects you wish to discuss, please feel free to
        reach out.
      </p>
    </div>
  );
};
