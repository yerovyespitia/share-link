'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

import { Input } from './ui/input'
import { Upload } from 'lucide-react'

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
      <motion.label
        htmlFor='file'
        className='bg-primary text-primary-foreground rounded-full font-semibold px-5 py-3 cursor-pointer inline-block text-center'
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.5 }}
      >
        <span className='flex items-center gap-2'>
          <Upload size={17} />
          {fileName === 'No file selected' ? 'Choose a file' : 'Change file'}
        </span>
      </motion.label>
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
