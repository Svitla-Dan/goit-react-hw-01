import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div>
        <img className={css.avatar} src={image} alt="User avatar" width="200" />
        <p className={css.name}>{name}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>
      <ul className={css.like}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.nameItems}>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.nameItems}>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.nameItems}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
