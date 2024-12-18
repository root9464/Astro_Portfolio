import type { FC } from 'react';

type LogoProps = {
  className?: string;
  fill?: string;
};
export const Logo: FC<LogoProps> = ({ className, fill }) => (
  <svg viewBox='0 0 50 50' width='50px' height='50px' className={className}>
    <path
      fill={fill}
      d='M16.67 9.33C7.47 9.33 0 16.8 0 26c0 8.5 6.38 15.53 14.61 16.54l3.72-11.82C17.81 30.9 17.25 31 16.67 31c-2.77 0-5-2.23-5-5s2.23-5 5-5c1.69 0 3.18.84 4.08 2.12 1.75-5.12 3.34-8.6 5.22-10.95C23.31 10.38 20.11 9.33 16.67 9.33zM35.4 21.833c4.234 1.218 9.233 0 9.233 0-1.45 6.333-6.05 10.3-12.683 10.783-2.55 5.917-8.433 10.05-15.283 10.05l5-15.891C26.807 10.44 29.441 9.333 41.63 9.333l8.37 0C48.6 15.5 43.775 20.211 35.4 21.833z'
    />
  </svg>
);

export const LogoGradient: FC<LogoProps> = ({ className }) => (
  <svg width='437' height='292' viewBox='0 0 437 292' fill='none' className={className}>
    <path
      d='M145.696 0.544189C65.2878 0.544189 0 65.832 0 146.24C0 220.53 55.7612 281.972 127.691 290.8L160.204 187.493C155.659 189.066 150.765 189.94 145.696 189.94C121.486 189.94 101.996 170.45 101.996 146.24C101.996 122.03 121.486 102.54 145.696 102.54C160.466 102.54 173.489 109.882 181.355 121.069C196.65 76.32 210.547 45.9048 226.978 25.3658C203.729 9.72119 175.761 0.544189 145.696 0.544189ZM309.396 109.82C346.401 120.466 390.092 109.82 390.092 109.82C377.419 165.171 337.215 199.842 279.243 204.064C256.956 255.778 205.539 291.901 145.67 291.901L189.37 153.013C234.293 10.2456 257.314 0.570412 363.846 0.570412H437C424.764 54.47 382.594 95.6441 309.396 109.82Z'
      fill='url(#paint0_linear_103_217)'
    />
    <defs>
      <linearGradient id='paint0_linear_103_217' x1='1.04828' y1='-2.44078' x2='510.262' y2='119.162' gradientUnits='userSpaceOnUse'>
        <stop stopColor='#BC3CD8' />
        <stop offset='1' stopColor='#C54B8C' />
      </linearGradient>
    </defs>
  </svg>
);
