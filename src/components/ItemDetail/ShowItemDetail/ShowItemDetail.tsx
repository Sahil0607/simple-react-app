import styles from "./ShowItemDetail.module.css";

type ItemDetail = {
  id?: number | string;
  title?: string;
  body?: string;
  userId?: number | string;
};

const ShowItemDetail = ({ itemDetail }: { itemDetail?: ItemDetail }) => {
  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <h3>Show Item Detail</h3>
      </header>

      <div className={styles.content}>
        <div className={styles.row}>
          <span className={styles.label}>Title</span>
          <span className={styles.value}>{itemDetail?.title}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Body</span>
          <span className={styles.value}>{itemDetail?.body}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>User ID</span>
          <span className={styles.value}>{itemDetail?.userId}</span>
        </div>
      </div>
    </div>
  );
};

export default ShowItemDetail;
