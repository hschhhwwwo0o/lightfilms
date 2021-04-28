import Link from "next/link";
import styles from "./index.module.scss";

interface NotificationProps {
    message: string,
    link?: string
    href?: string
}

const Notification: React.FC<NotificationProps> = ({ message, link, href }) => {
    return <>
        <div id={styles.notification}>
            <div>
                <div>
                    <span>{ message } </span>
                    <Link href={ href || "" }>
                        <a>
                            <span className={styles.bright}>{ link }</span> 
                        </a> 
                    </Link>
                </div>
                <div className={styles.close}></div>
            </div>
        </div>
    </>
}

export default Notification;