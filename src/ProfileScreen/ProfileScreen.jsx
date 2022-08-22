import logo from '../share/avarares/UserAvatar.jpg';
import style from "./ProfileScreen.module.css"
export default function ProfileScreen() {
    return (
      <div className={style.wrapper}>
        <img src={logo} alt="userAvatar" className={style.img}></img>
        <input placeholder="search or start new chat" className={style.input}></input>
      </div>
    );
  }
  
