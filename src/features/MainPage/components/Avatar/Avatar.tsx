import styles from './index.module.css'
import avatar from '../../../../assets/avatar.jpeg'

export const Avatar = () => {
  return <img src={avatar} className={styles.avatar} />
}
