import Header from '@/components/header'
import Navbar from '@/components/navigation/navbar'

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />

      <div className='flex'>
        <Navbar />

        <main className='flex flex-col px-5'>{children}</main>
      </div>
    </>
  )
}
