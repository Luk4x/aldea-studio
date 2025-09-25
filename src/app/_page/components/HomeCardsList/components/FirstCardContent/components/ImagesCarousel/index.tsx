import Image from 'next/image';

import { Icon } from '@/ui/Icon';
import { List } from '@/ui/List';

import { imagesCarouselStyles } from './styles';
import { images } from './utils';

export function ImagesCarousel() {
  const styles = imagesCarouselStyles();

  return (
    <div className={styles.container()}>
      <List items={images} className={styles.list()}>
        {image => (
          <List.Item key={image.src} className={styles.listItem()}>
            <Image
              src={image.src}
              alt={image.alt}
              height={128}
              width={0}
              sizes="(max-width: 768px) 100vw, 200px"
              className={styles.image()}
            />
          </List.Item>
        )}
      </List>
      <button type="button" className={styles.button()}>
        <Icon.Caret
          direction="right"
          color="neutral-900"
          width={20}
          height={20}
          className={styles.icon()}
        />
      </button>
    </div>
  );
}
