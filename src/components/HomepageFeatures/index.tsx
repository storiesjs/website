import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Stories was designed from the ground up to be easily installed and used to start writing your stories quickly.
        Stories lets you focus on your components, and we&apos;ll do the chores.
      </>
    ),
  },
  {
    title: 'Build with your tech',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Choise of the frontend framework is yours. 
        Stories is developed to start writing stories locally or in cloud with all best frontend frameworks, 
        including Angular, React, Vue, or with vanilla JavaScript.
      </>
    ),
  },
  {
    title: 'Powered by Web Components',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Extend or customize look and feel of your stories with power of Web Components. 
        Start from default layout or completely replace it with your own. 
        You can precisely control all aspect of your work.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
