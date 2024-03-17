const Footer = () => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    return (
        <footer className='w-full text-sm text-center flex items-center justify-center'>
            © 2023 - {currentYear} Alvin Pratama - ☕️  Made with Caffein
        </footer>
    )
}

export default Footer
