import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




const Header = ({ className }: HeaderProps) => {
  return (
    <div className={cn('header', className)}>
      <div className='sticky left-0 mt-3 justify-between flex-nowrap  flex w-full items-center px-4'>
        <Link href='/' className='md:flex-1'>
          <Image
            src='/assets/Logo.png'
            alt='Logo with name'
            width={120}
            height={32}
            className='hidden md:block'
          />
          <Image
            src='/assets/Logo.png'
            alt='Logo'
            width={32}
            height={32}
            className='mr-2 md:hidden'
          />
        </Link>
        <div className='md:flex items-center gap-2 lg:gap-6 hidden'>

            <Link href='/trips'>Trip</Link>
            <Link href='/transport'>Transport</Link>
            <Link href='/gallery'>Gallery </Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact Us</Link>


        </div>

        <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src='/icons/menu.png'
              alt='menu'
              width={24}
              height={24}
              className='mr-2 lg:hidden mb-2'
          /></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Link href='/trips'>Trips</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href='/transport'>Transport</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href='/gallery'>Gallery </Link></DropdownMenuItem>
            <DropdownMenuItem><Link href='/about'>About</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href='/contact'>Contact Us</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        </div>

      </div>

    </div>
  )
}

export default Header
