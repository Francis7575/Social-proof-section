import styles from './StarRating.module.css'
import StarIcon from '../../assets/icon-star.svg'

type Rating = {
    title: string
}

const StarRating = ({ title }: Rating) => (
    <div className={styles.ratingContainer}>
        <div className={styles.starsContainer}>
            {[...Array(5)].map((_, index) => (
                <img key={index} src={StarIcon} alt="Star Icon" />
            ))}
        </div>
        <h2 className={styles.ratingTitle}>Rated 5 Stars in {title}</h2>
    </div>
);

export default StarRating