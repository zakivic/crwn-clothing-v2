import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

import styles from "./category-preview.module.css";

const CategoryPreview = ({ title, products }) => (
  <div className={styles["category-preview-container"]}>
    <h2>
      <Link className={styles["title"]} to={title}>
        {title.toUpperCase()}
      </Link>
    </h2>
    <div className={styles["preview"]}>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
);

export default CategoryPreview;
