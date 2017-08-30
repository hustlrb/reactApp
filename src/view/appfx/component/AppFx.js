import React from 'react';
import { Layout } from 'antd';

import AppHeader from './AppHeader';
import AppMenu from './AppMenu';
import AppBreadcrumb from './AppBreadcrumb';
import AppContent from './AppContent';
import AppFooter from './AppFooter';

const AppFx = () => {
  return (
    <Layout style={{ height: "100%" }}>
      <AppHeader />
      <Layout>
        <AppMenu />
        <Layout>
          <AppBreadcrumb />
          <AppContent />
          <AppFooter />
        </Layout>
      </Layout>
    </Layout>
  )
};

export default AppFx;
