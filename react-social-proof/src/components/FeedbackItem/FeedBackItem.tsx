import styles from './FeedBackItem.module.css'

type Buyer = {
    avatar: string,
    name: string,
    status: string,
    feedback: string
}

const FeedBackItem = ({ avatar, name, status, feedback }: Buyer) => (
    <div className={styles.feedbackContainer}>
        <div className={styles.buyerContainer}>
            <img className={styles.buyerImage} src={avatar} alt="Profile Image" />
            <div className={styles.buyerInfo}>
                <p className={styles.buyerName}>{name}</p>
                <p className={styles.buyerStatus}>{status}</p>
            </div>
        </div>
        <p className={styles.paragraph}>{feedback}</p>
    </div>
);

export default FeedBackItem