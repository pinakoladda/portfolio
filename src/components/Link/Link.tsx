import styles from './index.module.css'
import cn from 'classnames'
import type { AnchorHTMLAttributes } from 'react'

export const Link = ({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return <a className={cn(styles.link, className)} {...props} />
}
