import { UploadFile } from '@/components/UploadFile'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex items-center justify-center flex-col gap-2'>
      <Image
        className='invert'
        src='/vercel.svg'
        width={40}
        height={40}
        alt='vercel'
      />
      <h1 className='text-3xl font-bold'>Share Link</h1>
      <p className='text-muted-foreground max-w-md text-center'>
        Share files with anyone using a link that works across browsers and
        devices.
      </p>
      <UploadFile />
    </div>
  )
}
