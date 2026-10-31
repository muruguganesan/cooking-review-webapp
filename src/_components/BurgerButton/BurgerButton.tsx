import React from 'react'
import styles from "./module-css/burger.module.css"

const BurgerButton = () => {
  return (
    <div className={`${styles.burger_btn}`}>
        <span className={`${styles.burger_line} burger_line_top`}></span>
        <span className={`${styles.burger_line} burger_line_middle`}></span>
        <span className={`${styles.burger_line} burger_line_btm`}></span>
    </div>
  )
}

export default BurgerButton