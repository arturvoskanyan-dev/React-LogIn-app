import style from "./UserInfo.module.css"
import React from 'react'

const UserInfo = ({ data }) => {
  return (
    <div className={style.user}>
      <div className={style.user_box}>
        <div className={style.user_item}>
          <figure className={style.user_img}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKcTkARlljahDz7xR5gq-lwY3NSwsYMQdl_AlXfua4Yc2QcQ9QIG38gxtEiMGNAdoEck&usqp=CAU" />
          </figure>
          <h1>ID : {data.id}</h1>
          <h1>Name : {data.name}</h1>
          <h1>LastName : {data.lastName}</h1>
          <h1>Email : {data.email}</h1>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
