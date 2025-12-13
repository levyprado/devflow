import Logo from './logo'
import MobileNav from './navigation/mobile-nav'

export default function Header() {
  return (
    <>
      <header className='sticky top-0 left-0 z-10 flex h-(--mobile-header-height) w-full items-center justify-between bg-card px-5 shadow-sm lg:h-(--desktop-header-height) lg:px-6'>
        <Logo />

        <div className='hidden sm:block'>
          <input
            type='search'
            placeholder='Search anything globally'
            className='rounded-xl border bg-card px-4 py-2'
          />
        </div>

        <div className='flex items-center'>
          {/* Theme Toggle */}
          {/* Profile */}
          <MobileNav />
        </div>
      </header>

      <div className='flex w-full flex-col bg-card px-5 pb-5 sm:hidden'>
        <input
          type='search'
          placeholder='Search anything globally'
          className='rounded-xl border bg-card px-4 py-2'
        />
      </div>
    </>
  )
}
