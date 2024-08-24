import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import Trips from '@/components/ui/Trips'
import Transport from '@/components/ui/Transport'
import Gallery from '@/components/ui/Gallery'
import About from '@/components/ui/About'
import Contact from '@/components/ui/Contact'
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

            <Trips />
            <Transport />
            <Gallery />
            <About />
            <Contact />

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
            <DropdownMenuItem>Trips</DropdownMenuItem>
            <DropdownMenuItem>Transport</DropdownMenuItem>
            <DropdownMenuItem>Gallery</DropdownMenuItem>
            <DropdownMenuItem>About</DropdownMenuItem>
            <DropdownMenuItem>Contact Us</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        </div>

      </div>

    </div>
  )
}

export default Header
