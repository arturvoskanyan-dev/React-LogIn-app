import style from "./UserInfo.module.css"
import React from 'react'

const UserInfo = ({ name, lastName, email }) => {
  return (
    <div className={style.user}>
      <div className={style.user_box}>
        <div className={style.user_item}>
          <figure className={style.user_img}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKcTkARlljahDz7xR5gq-lwY3NSwsYMQdl_AlXfua4Yc2QcQ9QIG38gxtEiMGNAdoEck&usqp=CAU" />
          </figure>
          <h1>Name : {name}</h1>
          <h1>LastName : {lastName}</h1>
          <h1>Email : {email}</h1>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
