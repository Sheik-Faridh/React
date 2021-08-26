import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { Spin } from 'antd';
import { AiOutlineLoading } from 'react-icons/ai';
import { VscRocket } from 'react-icons/vsc';
import Icon from '../../../components/icon';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from '../../dashboard';
import Profile from '../../profile';
import EditProfile from '../../editprofile';
import Vacation from '../../vacation';
import DailyStatus from '../../dailystatus';
import Modal from '../../../components/modal';
import NotFound from '../../notfound';

const Loader = () => (
  <Icon prop={{ className: 'animate-spin', color: '#1542a4', size: '50px' }}>
    <AiOutlineLoading />
  </Icon>
);

const Rocket = () => (
  <Icon prop={{ className: 'inline mx-1', color: '#013f6d' }}>
    <VscRocket />
  </Icon>
);

const Content = () => {
  const { path } = useRouteMatch();

  const Message = (
    <>
      Welcome to Space <Rocket />
    </>
  );

  return (
    <Spin
      spinning={false}
      indicator={<Loader />}
      tip={Message}
      wrapperClassName='appLoader'
    >
      <div className='content bg-gray-100 w-full'>
        <Switch>
          <Route exact path={`${path}/`} component={Dashboard} />
          <Route
            exact
            path={`${path}/employee/profile/:id`}
            component={Profile}
          />
          <Route
            exact
            path={`${path}/employee/profile/:id/edit`}
            component={EditProfile}
          />
          <Route exact path={`${path}/vacation`} component={Vacation} />
          <Route exact path={`${path}/daily_status`} component={DailyStatus} />
          <Route path={`${path}/notfound`} component={NotFound} />
          <Route path='*'>
            <Redirect to={`/a/notfound`} />
          </Route>
        </Switch>
      </div>
    </Spin>
  );
};

const Main = () => {
  return (
    <>
      <div className='flex'>
        <Sidebar />
        <div className='w-full h-screen overflow-hidden'>
          <Header />
          <Content />
        </div>
      </div>
      <Modal />
    </>
  );
};

export default Main;
