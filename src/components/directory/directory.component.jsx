import DirectoryItem from "../directory-item/directory-item.component";

import styles from "./directory.module.css";

const Directory = ({ categories }) => {
  return (
    <div className={styles["directory-container"]}>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
