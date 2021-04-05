import { Layout,Row,Col } from 'antd';
import Profile from './Profile';
import Work from './Work';
import './App.css';

const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Content>
        <div id='resume'>
          <Row>
            <Col span={8}>
              <Profile />
            </Col>
            <Col span={16}>
              <Work />
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  )
}

export default App;
