import styles from "./masonry.module.css";

interface MasonryGalleryProps {
  items: Array<{
    id: string;
    image: string;
  }>;
  title: string;
}

export const MasonryGallery = ({ items, title }: MasonryGalleryProps) => {
  return (
    <div className={styles.masonry}>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.masonryContainer}>
          <div className={styles.masonryItemBig}>
            <img className={styles.bigItem} src={items[0].image} alt="img" />
          </div>
          <div className={styles.masonryItemSmalls}>
            {items.slice(1, 5).map((item, index) => {
              return (
                <div className={styles.masonryItemSmall} key={index}>
                  <img className={styles.img} src={item.image} alt="img" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
