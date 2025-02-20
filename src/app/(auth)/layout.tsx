import React from 'react'

interface AuthLayoutProps {
    children: React.ReactNode;
}

const layout = ({ children }: AuthLayoutProps) => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
        { children }
    </div>
  )
}

export default layout