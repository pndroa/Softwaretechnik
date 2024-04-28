import styles from './Header.module.css'
import Image from 'next/image'
import apple from '@/app/pictures/apple.png'

const Header = () => {
    return (
    <div className={styles.Header}>
        <Image src={apple} alt='logo' className={styles.profilPicture}></Image> 
        <div>
            <h1>Bryson Mills</h1> 
            <p className={styles.arbeitsGruppe}>Employee</p>
        </div>
    </div>
  )
}

export default Header
