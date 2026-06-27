import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';

type FeatureItem = {
  title: string;
  LightSvg: React.ComponentType<React.ComponentProps<'svg'>>;
  DarkSvg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    LightSvg: require('@site/static/img/qph-logo.svg').default,
    DarkSvg: require('@site/static/img/qph-logo-dark.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    LightSvg: require('@site/static/img/qph-logo.svg').default,
    DarkSvg: require('@site/static/img/qph-logo-dark.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    LightSvg: require('@site/static/img/qph-logo.svg').default,
    DarkSvg: require('@site/static/img/qph-logo-dark.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ title, LightSvg, DarkSvg, description }: FeatureItem) {
  const { colorMode } = useColorMode();
  const Svg = colorMode === 'dark' ? DarkSvg : LightSvg;
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
