'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

import { Input } from './ui/input'

export const UploadFile = () => {
  const [fileName, setFileName] = useState<string>('No file selected')

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    setFileName(file ? file.name : 'No file selected')
  }

  console.log(fileName)

  return (
    <div className='flex flex-col items-center gap-2'>
      {fileName !== 'No file selected' && (
        <motion.p
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {fileName}
        </motion.p>
      )}
      <label
        htmlFor='file'
        className='bg-primary text-primary-foreground rounded-full font-medium px-5 py-2 cursor-pointer inline-block text-center'
      >
        {fileName === 'No file selected' ? 'Choose a file' : 'Change file'}
      </label>
      <span className='text-sm text-muted-foreground'>{fileName}</span>
      <Input
        className='hidden'
        type='file'
        id='file'
        name='file'
        onChange={handleFileChange}
      />
    </div>
  )
}
