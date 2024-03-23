import styles from './MainTopSection.module.css'
import MainBottom from '../MainBottom/MainBottomSection'
import StarRating from '../StarRating/StarRating';

const MainTopSection = () => {
    return (
        <main>
            <section className={styles.mainTopSection}>
                <div className={styles.textContainer}>
                    <h1 className={styles.heading}>10,000+ of our users love our products.</h1>
                    <p className={styles.paragraph}>
                        We only provide great products combined with excellent
                        customer service. See what our satisfied customers are
                        saying about our services.
                    </p>
                </div>

                <div className={styles.ratingSection}>
                    <StarRating title="Reviews" />
                    <StarRating title="Report Guru" />
                    <StarRating title="BestTech" />
                </div>
            </section>
            <MainBottom />
        </main>
    );
};

export default MainTopSection;
