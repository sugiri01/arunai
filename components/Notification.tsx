'use client'
import React, { useEffect } from 'react'

interface NotificationProps {
  message: string
  type: 'success' | 'error' | 'warning'
  show: boolean
  onClose: () => void
}

export default function Notification({ message, type, show, onClose }: NotificationProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!show) return null

  const borderColors = {
    success: 'border-green-500',
    error: 'border-red-500',
    warning: 'border-amber-500'
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 px-4 py-3 bg-white border ${borderColors[type]} rounded-xl shadow-lg text-sm font-medium text-gray-900`}> 
      {message}
    </div>
  )
}