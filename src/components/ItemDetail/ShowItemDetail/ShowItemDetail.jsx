import styles from "./ShowItemDetail.module.css";

const ShowItemDetail = ({ itemDetail }) => {
  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <h3>Show Item Detail</h3>
      </header>

      <div className={styles.content}>
        <div className={styles.row}>
          <span className={styles.label}>Name</span>
          <span className={styles.value}>{itemDetail?.name}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Email</span>
          <span className={styles.value}>{itemDetail?.email}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Phone</span>
          <span className={styles.value}>{itemDetail?.phone}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Website</span>
          <span className={styles.value}>{itemDetail?.website}</span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Address</span>
          <span className={styles.value}>
            {itemDetail?.address
              ? `${itemDetail.address.suite}, ${itemDetail.address.street}, ${itemDetail.address.city} - ${itemDetail.address.zipcode}`
              : ""}
          </span>
        </div>

        <div className={styles.row}>
          <span className={styles.label}>Company</span>
          <span className={styles.value}>
            {itemDetail?.company
              ? `${itemDetail.company.name} — ${itemDetail.company.catchPhrase}`
              : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShowItemDetail;
