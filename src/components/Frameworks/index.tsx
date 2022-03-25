import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FrameworkItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
};

const FrameworkList: FrameworkItem[] = [
  {
    title: 'Angular',
    Svg: require('@site/static/img/logo-angular-icon.svg').default,
    description: (
      <>
        A complete guide to get you up to speed with the basics of building Stories with Angular.
      </>
    ),
    link: '../angular/overview'
  },
  {
    title: 'React',
    Svg: require('@site/static/img/logo-react-icon.svg').default,
    description: (
      <>
        A complete guide to get you up to speed with the basics of building Stories with React.
      </>
    ),
    link: '../react/overview'
  },
  {
    title: 'Vue',
    Svg: require('@site/static/img/logo-vue-icon.svg').default,
    description: (
      <>
        A complete guide to get you up to speed with the basics of building Stories with Vue.
      </>
    ),
    link: '../vue/overview'
  },
];

function Framework({ title, Svg, description, link }: FrameworkItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={link}>{title}</a></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Frameworks(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FrameworkList.map((props, idx) => (
            <Framework key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
