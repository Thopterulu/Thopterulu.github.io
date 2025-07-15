import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import AppLauncher from '@site/src/components/AppLauncher';

import Heading from '@theme/Heading';
import styles from './index.module.css';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - App Launcher`}
      description="Quick access to your favorite tools and websites">
      <main>
        <AppLauncher />
      </main>
    </Layout>
  );
}
