import Logo from './logo'
import MobileNav from './navigation/navbar/mobile-nav'

export default function Header() {
  return (
    <header className='sticky top-0 left-0 z-10 flex h-(--mobile-header-height) w-full items-center justify-between bg-card px-5 lg:h-(--desktop-header-height) lg:px-6'>
      <Logo />

      <div className='flex items-center'>
        {/* Theme Toggle */}

        {/* Profile */}

        <MobileNav />
      </div>
    </header>
  )
}
