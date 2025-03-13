import style from "./intro.module.css"
import React from 'react'

function Intro() {
  return (
    <section className={style.intro}>
        <div className={style.container}>
            <figure className={style.logo}>
                <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Logo" />
            </figure>
            <article className={style.info}>
                <p>Connect with friends and the world around you on Facebook.</p>
            </article>
        </div>
    </section>
  )
}

export default Intro
