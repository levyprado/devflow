import Logo from './logo'
import MobileNav from './navigation/mobile-nav'
import SearchInput from './search-input'

export default function Header() {
  return (
    <>
      <header className='sticky top-0 left-0 z-10 flex h-(--mobile-header-height) w-full items-center justify-between gap-16 bg-card px-5 sm:shadow-sm lg:h-(--desktop-header-height) lg:px-6'>
        <Logo />

        <div className='hidden sm:block sm:w-full'>
          <SearchInput
            placeholder='Search anything globally...'
            className='mx-auto max-w-[600px]'
          />
        </div>

        <div className='flex items-center'>
          {/* Theme Toggle */}
          {/* Profile */}
          <MobileNav />
        </div>
      </header>

      <div className='flex w-full flex-col bg-card px-5 pt-0.5 pb-5 shadow-sm sm:hidden'>
        <SearchInput placeholder='Search anything globally...' />
      </div>
    </>
  )
}
