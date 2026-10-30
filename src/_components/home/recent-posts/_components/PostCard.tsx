import { Heart, MessageCircle } from 'lucide-react'
import type { RecentPostCardType } from '../_types'
import styles from '../_module_css/recent_posts.module.css'


const PostCard = ({ item }: { item: RecentPostCardType }) => {
    return (
        <div className={`${styles.post_card_wrap}`}>
            <div className={`${styles.post_card_img}`}>
                <img src={item.img} alt="" />
            </div>

            <div className={styles.post_card_cont}>
                <div className={styles.post_card_title}>
                    {item.title}
                </div>
                <div className={styles.post_card_by}>
                    by {item.name}
                </div>
                <div className={styles.post_interactions}>
                    <div className={styles.post_likes}>
                        <Heart color="#e67e22" />
                        <span>{item.likes}</span>
                    </div>
                    <div className={styles.post_comments}>
                        <MessageCircle color="#e67e22" />
                        <span>{item.comments}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard