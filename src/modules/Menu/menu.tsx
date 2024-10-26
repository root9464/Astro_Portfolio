import { Button } from '@ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@ui/dropdown-menu';
import { type FC, useState } from 'react';

type MenuProps = {
  pages: Record<string, string>;
};

export const DropdownMenuPages: FC<MenuProps> = ({ pages }) => {
  const [position, setPosition] = useState('bottom');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={'lg'} variant='default' className='bg-pink-400 w-fit rounded-[10px] text-base text-black font-semibold md:hidden'>
          Menu pages
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-44 bg-pink-400 rounded-[10px] border-none text-black'>
        <DropdownMenuLabel>Pages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {Object.entries(pages).map(([key, value]) => (
            <DropdownMenuItem key={key} className='hover:bg-pink-300 rounded-[10px]'>
              <DropdownMenuItem>
                <a href={key}>{value}</a>
              </DropdownMenuItem>
            </DropdownMenuItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
