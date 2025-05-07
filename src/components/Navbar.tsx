import { ToogleMode } from './ToogleMode'
import { ToggleLanguages } from './ToggleLanguages'
import { NavbarMenu } from './navbar-menu'
import { useTranslations } from 'next-intl'

const Navbar = () => {
  const t = useTranslations("navbarLabel")

  return (
    <header className='z-40 flex w-full gap-2 flex-row justify-between items-center'>
      <NavbarMenu
        homeLabel={t("home")}
        projectsLabel={t("project")}
        blogLabel={t("blog")}
      />
      <div className='flex items-center gap-4'>
        <ToogleMode />
        <ToggleLanguages />
      </div>

    </header>
  )
}

export default Navbar
