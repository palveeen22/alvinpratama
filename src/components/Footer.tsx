import Link from "next/link"

const Footer = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  const links = [
    {
      href: "https://github.com/palveeen22",
      title: "Github"
    },
    {
      href: "https://www.linkedin.com/in/alvin-pratama-1a046424b/",
      title: "Linkedin"
    },
    {
      href: "https://www.instagram.com/alvinnnprtm_/",
      title: "Instagram"
    }
  ]

  return (
    <footer className='w-full text-sm flex flex-wrap-reverse md:flex-row justify-between items-center gap-4 pt-6 border-t border-dashed border-neutral-500'>
      <span>
        © 2023 - {currentYear} Alvin Pratama - ☕️ Made with Caffein
      </span>

      <div className="flex items-center gap-4">
        {links?.map((link, idx) => (
          <Link
            key={idx}
            href={link?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline decoration-wavy underline-offset-8"
          >
            {link?.title}
          </Link>
        ))}
      </div>
    </footer>
  )
}

export default Footer