import { ToogleMode } from './ToogleMode'
import { ToggleLanguages } from './ToggleLanguages'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const t = useTranslations("navbarLabel")

  return (
    <header className='z-40 flex w-full gap-2 flex-row justify-between items-center'>
      {/* <NavbarMenu
        homeLabel={t("home")}
        projectsLabel={t("project")}
        blogLabel={t("blog")}
      /> */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Image
              src="/assets/me.jpeg"
              alt="Alvin Pratama | Software Engineer & iOS Developer Enthusiasts "
              fill
              className="object-cover rounded-full"
              sizes="32px"
              priority
              unoptimized
            />
          </div>
          <span className="text-lg font-light text-kalpataru-2">Alvin Pratama</span>
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
