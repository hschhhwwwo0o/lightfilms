import React, { useState } from "react";
import Link from "next/link";
import styles from "./index.module.scss";

interface NotificationProps {
    message: string,
    link?: string
    href?: string
}

const Notification: React.FC<NotificationProps> = ({ message, link, href }) => {

    const [ notification, removeNotification ] = useState(false);

    return <>
        <div 
            id={ styles.notification } 
            style={{ height: notification ? "0" : "100px" }}
        >
            <div style={{ opacity: notification ? "0" : "1" }}>
                <div>
                    <span>{ message } </span> <br/>
                    <Link href={ href || "" }>
                        <a>
                            <span className={styles.bright}>{ link }</span> 
                        </a> 
                    </Link>
                </div>
                <div 
                    onClick={ () => {
                        removeNotification(true)
                    } }
                    className={styles.notification__close} 
                />
            </div>
        </div>
    </>
}

export default Notification;