import logo from '../share/avarares/UserAvatar.jpg';
import style from "./ChatScreen.module.css"
export default function ChatScreen() {
    return (
      <div className={style.wrapper}>
        <h2 className={style.header}>Chats</h2>
        <ul>
          <li className={style.item}>
            <div className={style.div}>
            <img src={logo} alt="firsst user" className={style.img}></img>
            <div className={style.nameAndText}>  <p>Name Surname</p>
            <p>lor</p></div></div>
            <p>01.10.2000</p>
            
          </li>
          <li className={style.item}>
            <div className={style.div}>
            <img src={logo} alt="firsst user" className={style.img}></img>
            <div className={style.nameAndText}>  <p>Name Surname</p>
            <p>lor</p></div></div>
            <p>01.10.2000</p>
            
          </li>
          <li className={style.item}>
            <div className={style.div}>
            <img src={logo} alt="firsst user" className={style.img}></img>
            <div className={style.nameAndText}><p>Name Surname</p>
            <p>lor</p></div></div>
            <p>01.10.2000</p>
            
          </li>
          <li className={style.item}>
            <div className={style.div}>
            <img src={logo} alt="firsst user" className={style.img}></img>
            <div className={style.nameAndText}>  <p>Name Surname</p>
            <p>lor</p></div></div>
            <p>01.10.2000</p>
            
          </li>
        </ul>
      </div>
    );
  }
  
