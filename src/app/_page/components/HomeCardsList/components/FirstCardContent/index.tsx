import Image from 'next/image';

import { ImagesCarousel } from './components/ImagesCarousel';
import { firstCardContentStyles } from './styles';

export function FirstCardContent() {
  const styles = firstCardContentStyles();

  return (
    <div className={styles.container()}>
      <ImagesCarousel />
      <p className={styles.intro()}>
        Based on your recent conversation with{' '}
        <span className={styles.highlight()}>Monica</span> and your past listens
        on Spotify, this concert might be something you&apos;d enjoy attending.
      </p>
      <div className={styles.descriptionContainer()}>
        <Image
          src="/logos/generic.svg"
          alt="Generic Logo"
          width={20}
          height={20}
          className={styles.image()}
        />
        <p className={styles.description()}>
          The director is{' '}
          <span className={styles.bold()}>Kakhi Solomnishvili</span> from
          Georgian origin, who is Principle Conductor of Slovenian Philharmonic
          Orchestra, Conductor of Georgian Philharmonic Orchestra and Tbilisi
          Opera and Ballet Theatre.
        </p>
      </div>
      <div className={styles.descriptionContainer()}>
        <Image
          src="/logos/spotify.svg"
          alt="Generic Logo"
          width={20}
          height={20}
          className={styles.image()}
        />
        <p className={styles.description()}>
          <span className={styles.bold()}>Herbert von Karajan’s</span> version
          is widely regarded as the best recording of his Mahler’s Ninth:
          praised for its taut, luminous orchestral textures, monumental
          climaxes, and a deeply introspective final adagio that balances
          rigorous structural control with profound emotional depth.
        </p>
      </div>
    </div>
  );
}
