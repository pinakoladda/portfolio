import type React from 'react'
import styles from './index.module.css'
import cn from 'classnames'

interface LinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export const Link = ({ href, children, className }: LinkProps) => {
  return (
    <a href={href} className={cn(styles.link, className)}>
      {children}
    </a>
  )
}
