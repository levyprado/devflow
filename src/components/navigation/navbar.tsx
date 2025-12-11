import NavLinks from './nav-links'

export default function Navbar() {
  return (
    <div className='hidden sm:sticky sm:top-(--mobile-header-height) sm:left-0 sm:flex sm:min-h-dvh sm:flex-col sm:bg-card sm:px-5 sm:pt-12 sm:pb-10 lg:top-(--desktop-header-height) lg:w-full lg:max-w-2xs lg:px-6'>
      <div className='flex flex-1 flex-col justify-between'>
        <NavLinks />

        <div className='flex flex-col'>abc</div>
      </div>
    </div>
  )
}
