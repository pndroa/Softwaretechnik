import styles from './Dashboard.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import Image from 'next/image'

import stcIcon from '@/app/pictures/stcIcon.png'
import newsIcon from '@/app/pictures/newsIcon.png'

const Dashboard = () => {
    return(
        <div className={styles.container}>
            <Header />

            {/* NEWSLETTER */}
            <div>
                <Image src={stcIcon} alt="companyLogo" className={styles.stcLogo}></Image> 
                <h1 className={styles.News}>NEWS</h1>
            </div>
            <div>
                <main className={styles.textArea1}>
                <strong style={{ textDecorationLine: 'underline'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</strong> <br/>
                Incidunt fugiat veniam nisi in unde quod illo modi, deserunt molestias? <br/>
                <span style={{ color: 'red'}}>Corporis odio quidem quisquam nostrum</span>, soluta adipisci aperiam earum voluptatem est. <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil soluta delectus quisquam <br/>
                aut tempora ipsa dolores quibusdam, <span style={{border: '2px dotted black'}}>quaerat corporis</span> hic distinctio reiciendis labore <br/> 
                nesciunt sed debitis ducimus similique ut!
                </main>
                <Image src={newsIcon} alt="newsIcon" className={styles.newsIcon1}></Image>
            </div>
            <div>
                <main className={styles.textArea2}>
                <strong style={{ textDecorationLine: 'underline'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</strong> <br/>
                Incidunt fugiat veniam nisi in unde quod illo modi, deserunt molestias? <br/>
                <span style={{ color: 'red'}}>Corporis odio quidem quisquam nostrum</span>, soluta adipisci aperiam earum voluptatem est. <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil soluta delectus quisquam <br/>
                aut tempora ipsa dolores quibusdam, <span style={{border: '2px dotted black'}}>quaerat corporis</span> hic distinctio reiciendis labore <br/> 
                nesciunt sed debitis ducimus similique ut!
                </main>
                <Image src={newsIcon} alt="newsIcon" className={styles.newsIcon2}></Image>
            </div>

            {/* FEATURES */}
            <div className={styles.featuresTop}>
                <div className={styles.featuresTopItems}>
                    <strong>Employee Files</strong> 
                </div>
                <div className={styles.featuresTopItems}>
                    <strong>Timetable</strong>
                </div>
            </div>

            <div className={styles.featuresBottom}>
                <div className={styles.featuresBottomItems}>
                    <strong>Settings</strong> 
                </div>
                <div className={styles.featuresBottomItems}>
                    <strong>Messages</strong>
                </div>
            </div>

            <Footer />


        </div>
    )
}

export default Dashboard
