import clsx from "clsx";
import css from "./FriendListItem.module.css";

function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" width="60" />
      <p className={css.name}>{name}</p>
      <p className={clsx({ [css.green]: isOnline === true })}>
        {isOnline === true ? "Online" : "Offline"}
      </p>
    </div>
  );
}
export default FriendListItem;
