import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from '../_module_css/recent_posts.module.css'


const LinkButton = ({link="/", text="View All"}) => {
  return (
    <Link to={link} className={styles.link_btn}><span>{text}</span> <ArrowRight color="#e67e22" width={16} height={16} /></Link>
  )
}

export default LinkButton