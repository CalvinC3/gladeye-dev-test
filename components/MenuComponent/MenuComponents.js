import { Fragment, useState, useEffect } from 'react'
import Image from "next/image";
import styles from "./MenuComponent.module.css"
import cx from "classnames"




const MenuComponent = ({ children }) => {

    const [isToggled, setIsToggled] = useState(false)
    const [isAboutUsOpened, setIsAboutUsOpened] = useState(false)

    return (
        <Fragment>
            <div className={cx(
                styles.sideNav,
                { [styles.sideNavisOpen]: isToggled }
            )}>
                <a href="javascript:void(0)" className="closebtn" onClick={() => setIsToggled(false)}>&times;</a>
                <div className={styles.navItemsWrapper}>
                    {/*  */}
                    <div className={cx(
                        styles.menuItems
                    )}>
                        <a href="#" className={styles.styledAnchor}>
                            Home
                        </a>
                        <div className={styles.arrowButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </div>
                    </div>
                    <div className="blueBoarder" />
                    {/*  */}
                    <div className={styles.menuItems}>
                        <a href="#" className={styles.styledAnchor}>
                            About Us
                        </a>
                        <div className={styles.arrowButton} onClick={() => setIsAboutUsOpened(prev => !prev)}>
                            {!isAboutUsOpened ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                </svg>

                            )}
                        </div>
                    </div>
                    <div className={cx(
                        styles.subItemToggle,
                        { [styles.openedSubItem]: isAboutUsOpened }
                    )}>
                        <div className={styles.subItems}>
                            <a href="#" className={styles.styledAnchor}>
                                Our team
                            </a>
                            <div className={styles.arrowButton}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                        <div className={styles.subItems}>
                            <a href="#" className={styles.styledAnchor}>
                                Our missions
                            </a>
                            <div className={styles.arrowButton}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                        <div className={styles.subItems}>
                            <a href="#" className={styles.styledAnchor}>
                                Our locations
                            </a>
                            <div className={styles.arrowButton}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="blueBoarder" />
                    {/*  */}
                    <div className={styles.menuItems}>
                        <a href="#" className={styles.styledAnchor}>
                            Our team
                        </a>
                        <div className={styles.arrowButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </div>
                    </div>
                    <div className="blueBoarder" />
                    <div className={styles.menuItems}>
                        <a href="#" className={styles.styledAnchor}>
                            Careers
                        </a>
                        <div className={styles.arrowButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </div>
                    </div>
                    <div className="blueBoarder" />
                    <div className={styles.menuItems}>
                        <a href="#" className={styles.styledAnchor}>
                            Contact
                        </a>
                        <div className={styles.arrowButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </div>
                    </div>
                    <div className="blueBoarder" />
                </div>
            </div>
            <div className={styles.upperSection}>
                <div className={styles.Icon}>
                    <Image
                        src={isToggled ? "/icon-colored.png" : "/icon-white.png"}
                        alt="Icon"
                        layout="fixed"
                        width="43px"
                        height="43px"
                        className={styles.iconAnimation}
                    />
                </div>
                <div className={styles.menuWrapper}>
                    <div className={cx(
                        styles.menuIcon,
                        { ["hidden"]: isToggled }
                    )} onClick={() => setIsToggled(prev => !prev)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className={styles.lowerSection}>
                {children}
            </div>
        </Fragment>
    )
}

export default MenuComponent;