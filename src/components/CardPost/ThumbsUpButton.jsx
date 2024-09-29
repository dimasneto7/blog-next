'use client'

import { IconButton } from '../IconButton'
import { ThumbsUp } from '../icons/ThumbsUp'
import { Spinner } from '../Spinner'

import { useFormStatus } from 'react-dom'
import { useSession } from 'next-auth/react'

export const ThumbsUpButton = () => {
  const { pending } = useFormStatus()
  const { data: session } = useSession()

  return (
    <IconButton disabled={!session || pending}>
      {pending ? <Spinner /> : <ThumbsUp />}
    </IconButton>
  )
}
