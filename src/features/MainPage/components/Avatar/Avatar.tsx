import styles from './index.module.css'
// import avatar from '../../../../assets/avatar.jpeg'

import avatar from '../../../../assets/avatar3.jpeg'

export const Avatar = () => {
  return <img src={avatar} className={styles.avatar} />
}
