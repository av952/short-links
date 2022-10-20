import style from "./item.module.css";

export default function Item({ el }) {
  return (
    <div className={style.itemContainer}>
      <div className={style.itemInfoContainer}>
        <span className={style.itemInfoTag}>URL: </span>
        <span>{el.url}</span>
      </div>

      <div className={style.itemInfoContainer}>
        <span className={style.itemInfoTag}>short-URL: </span>
        <span>
            <a href={`http://localhost:5173/u/${el.shortUrl}`} target='_blank'>
            http://localhost:5173/u/${el.shortUrl}
            </a>
        </span>
      </div>

      <div className={style.itemInfoContainer}>
        <span className={style.itemInfoTag}>Views: </span>
        <span>{el.views} views</span>
      </div>
    </div>
  );
}
