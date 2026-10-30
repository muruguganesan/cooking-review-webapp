import { CommonTitle } from '../../CommonTitle'
import LinkButton from './_components/LinkButton'
import PostCard from './_components/PostCard'
import { homeRecentPost } from './_constants'
import styles from './_module_css/recent_posts.module.css'




const RecentPost = () => {
    return (
        <section className='section_padding'>
            <div className="c">
                <div className={`${styles.hme_recent_in}`}>
                    <div className={`${styles.hme_recent_posts}`}>
                        <CommonTitle>Recent Posts</CommonTitle>
                        <LinkButton />
                    </div>
                    <div className={`${styles.recent_post_items}`}>
                        {
                            homeRecentPost.map((ele)=><PostCard item={ele} />)
                        }

                    </div>
                </div>

            </div>
        </section>
    )
}

export default RecentPost