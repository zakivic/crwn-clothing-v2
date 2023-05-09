import { useNavigate } from "react-router-dom";

import styles from "./directory-item.module.css";

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();
  const { imageUrl, title, route } = category;

  const navigationHandler = () => navigate(route);

  return (
    <div
      className={styles["directory-item-container"]}
      onClick={navigationHandler}
    >
      <div
        className={styles["background-image"]}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className={styles["body"]}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
