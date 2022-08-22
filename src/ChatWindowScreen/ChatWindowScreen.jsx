import logo from "../share/avarares/UserAvatar.jpg";
import style from "./ChatWindowScreen.module.css";

export default function ChatWindowScreen() {
  return (
    <div className={style.wrapper}>
      <div className={style.userInfo}>
        <img src={logo} alt="" className={style.userImg} />
        <h2>name Surname</h2>
      </div>
      <div>
        <ul>
          <li className={style.textMessage}>
            <img src={logo} alt="" />
            <div>
              <p>date</p>
            </div>
            <p>message</p>
          </li>
          <li className={style.myTextMessage}>
            <p>message</p>
            <p>date</p>
          </li>
          <li className={style.textMessage}>
            <img src={logo} alt="" />
            <div>
              <p>name surname</p>
              <p>date</p>
            </div>
            <p>message</p>
          </li>
        </ul>
      </div>
      <div className={style.message}>
        <input
          type="text"
          className={style.input}
          placeholder="Type your message"
        />
        <button></button>
      </div>
    </div>
  );
}
