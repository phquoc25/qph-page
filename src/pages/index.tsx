import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CvPage from '../components/CvPage';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Quoc Phan - Technical leader.">
      <main>
        <CvPage />
      </main>
    </Layout>
  );
}
