import type React from 'react'
import type { JSX } from 'react'
import cn from 'classnames'
import styles from './index.module.css'

interface TypographyProps {
  children: React.ReactNode
  variant?:
    | 'heading1' // 46px
    | 'heading2' // 36px
    | 'heading3' // 28px
    | 'heading4' // 24px
    | 'body1' // 20px
    | 'body2' // 18px
    | 'body3' // 16px
    | 'body4' // 14px
    | 'body5' // 12px
    | 'body6' // 10px
  weight: 'regular' | 'medium' | 'semi-bold' | 'bold' //400 //500 //600 //700
  style?: 'regular' | 'italic'
  as?: keyof JSX.IntrinsicElements
  className?: string
}

export const Typography = ({
  className,
  children,
  variant,
  weight,
  style,
  as: Component = 'p',
  ...props
}: TypographyProps) => {
  return (
    <Component
      className={cn(styles.typography, className)}
      data-variant={variant}
      data-weight={weight}
      data-style={style}
      {...props}
    >
      {children}
    </Component>
  )
}
