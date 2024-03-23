import ColtonAvatar from '../../assets/image-colton.jpg';
import IreneAvatar from '../../assets/image-irene.jpg';
import AnneAvatar from '../../assets/image-anne.jpg';
import FeedBackItem from '../FeedbackItem/FeedBackItem';
import styles from './MainBottom.module.css'

const MainBottomSection = () => {
    return (
        <section className={styles.feedbackSection}>
            <FeedBackItem
                avatar={ColtonAvatar}
                name="Colton Smith"
                status="Verified Buyer"
                feedback="“We needed the same printed design as the one we had 
                ordered a week prior. Not only did they find the original order, 
                but we also received it in time. Excellent!”" />
            <FeedBackItem
                avatar={IreneAvatar}
                name="Irene Roberts"
                status="Verified Buyer"
                feedback="“Customer service is always excellent and very quick turn around. 
                Completely delighted with the simplicity of the purchase and the speed of delivery.”"/>
            <FeedBackItem
                avatar={AnneAvatar}
                name="Anne Wallace"
                status="Verified Buyer"
                feedback="“ Put an order with this company and can only praise them for the very 
                high standard. Will definitely use them again and recommend them to everyone! ”" />
        </section>
    );
};

export default MainBottomSection;
