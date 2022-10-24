import { Fragment } from 'react'
import styles from "./HomeComponent.module.css"

const Home = () => {

    return (
        <Fragment className={styles.baseStyle}>
            <div className={styles.headingWrapper}>
                <h1 className={styles.mainHeading}>The future of prostetics is here</h1>
            </div>
            <div className={styles.callToActionWrapper}>
                <div className={styles.yellowButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </div>
                Take a tour
            </div>
        </Fragment>
    )
}

export default Home;