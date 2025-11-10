import { ToogleMode } from './ToogleMode'
import { ToggleLanguages } from './ToggleLanguages'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const t = useTranslations("navbarLabel")

  return (
    <header className='z-40 flex w-full gap-2 flex-row justify-between items-center'>
      <div className="flex items-center justify-between">
        {/* Logo with Listening Indicator */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            {/* Profile Image */}
            <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-full">
              <Image
                src="/assets/me.jpeg"
                alt="Alvin Pratama | Software Engineer & iOS Developer Enthusiasts"
                fill
                className="object-cover ring-2 ring-kalpataru-2/20 group-hover:ring-kalpataru-2/40 transition-all duration-300"
                sizes="40px"
                priority
                unoptimized
              />
            </div>
            
            {/* Listening Indicator Badge */}
            <div className="absolute -top-2 -right-3 bg-gradient-to-br from-green-400 to-green-600 rounded-full p-1.5 shadow-lg border-2 border-background">
              <div className="flex items-center gap-[2px] h-2.5 w-2.5">
                {/* Animated bars */}
                <span className="w-[2px] bg-white rounded-full animate-music-bar-1" style={{ height: '40%' }} />
                <span className="w-[2px] bg-white rounded-full animate-music-bar-2" style={{ height: '60%' }} />
                <span className="w-[2px] bg-white rounded-full animate-music-bar-3" style={{ height: '80%' }} />
              </div>
            </div>
          </div>

          {/* Name and Status */}
          <div className="flex flex-col">
            <span className="text-lg font-light text-kalpataru-2 group-hover:text-kalpataru-1 transition-colors duration-200">
              Alvin Pratama
            </span>
            
            {/* Now Playing Status */}
            <div className="flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
              <span className="text-[10px] text-muted-foreground">
                <span className="font-medium">White Ferrari</span> - Frank Ocean
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div className='flex items-center gap-4'>
        <ToogleMode />
        <ToggleLanguages />
      </div>
    </header>
  )
}

export default Navbar