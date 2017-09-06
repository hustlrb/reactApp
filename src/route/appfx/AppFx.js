import React from 'react';
import {connect} from 'react-redux';
import {Route, Link, withRouter} from 'react-router-dom';
import {Layout, Breadcrumb} from 'antd';
import AppHeaderMenu from './AppHeaderMenu';
import AppSiderMenu from './AppSiderMenu';
import Dashboard from '../dashboard/Dashboard';
import {actionRequestLogin, actionRequestLogout} from "./redux";
import {selectLoading, selectLoggedIn} from './redux';
import Example from '../example/Example';
import CabinetList from "../cabinet/CabinetList";

import logo from '../example/ExampleLogo.svg';

const Other = () => (
  <div>
    <h2>Other</h2>
  </div>
);

const Another = () => (
  <div>
    <h2>Another</h2>
  </div>
);

const Xxx = () => (
  <div>
    <h2>xxx</h2>
  </div>
);

const itemRender = (route, params, routes, paths) => {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ?
    <span>{route.breadcrumbName}</span> :
    <Link to={"/" + paths.join("/")}>{route.breadcrumbName}</Link>;
};

const AppFx = (props) => {
  console.log('[DEBUG] ---> AppFx props: ', props);

  const {match} = props;
  return (
    <Layout style={{height: "100%"}}>
      <Layout.Header>
        <Link to="/"><img src={logo} className="app-logo" alt="logo" /></Link>
        <div className="app-header-title">共享干衣柜后台管理系统</div>
        <AppHeaderMenu user={{name: "admin"}} logout={props.logout} />
      </Layout.Header>
      <Layout>
        <Layout.Sider>
          <AppSiderMenu />
        </Layout.Sider>
        <Layout>
          <Breadcrumb itemRender={itemRender} />
          <Layout.Content>
            <div className="app-content">
              <Route exact path={match.url} component={Dashboard}/>
              <Route path="/cabinet" component={CabinetList}/>
              <Route path="/other" component={Other} />
              <Route path="/another" component={Another} />
              <Route path="/example" component={Example}/>
              <Route path="/xxx" component={Xxx}/>
            </div>
          </Layout.Content>
          <Layout.Footer>
            衣家宝 版权所有 © 2017 由 绿蚁科技 提供技术支持
          </Layout.Footer>
        </Layout>
      </Layout>
    </Layout>
  )
};

const mapStateToProps = (appState, ownProps) => {
  return {
    loading: selectLoading(appState),
    loggedIn: selectLoggedIn(appState)
  };
};

const mapDispatchToProps = {
  login: actionRequestLogin,
  logout: actionRequestLogout
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppFx));
