import Header from '@/components/header'
import Navbar from '@/components/navigation/navbar'
import RightSidebar from '@/components/navigation/right-sidebar'

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />

      <div className='flex'>
        <Navbar />
        <main className='flex flex-1 flex-col px-5 pt-8 sm:px-14 sm:pt-16'>
          {children}
        </main>
        <RightSidebar />
      </div>
    </>
  )
}
