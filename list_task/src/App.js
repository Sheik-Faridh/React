import { useState,useEffect } from 'react';
import { Avatar, Layout, Card, List, message } from 'antd';
import styled from 'styled-components';
import './App.css';

const { Content } = Layout;
const { Item } = List;
const { Meta } = Item;

const Main = styled(Content)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100wh;
  height: 100vh;
`;

const Container = styled(Card)`
  width: 60%;
  height: 80%;  
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

  & .ant-card-head-title {
    text-align: center;
    font-size: 2em;
    padding: 10px;
  }

  & .ant-card-body {
    padding: 20px;
    height: 85%;
    overflow-y: auto;

    & h4.ant-list-item-meta-title {
      margin: 10px 0 5px 0;
    }
  }
`;

const handleError = (msg,error) => {
  console.error(error);
  message.error(msg);
}

const Post = ({post}) => {
  const color =  `#${Math.floor(Math.random()*16777215).toString(16)}`;
  return (
    <Item>
      <Meta
        avatar={<Avatar style={{ backgroundColor: color, verticalAlign: 'middle' }}>{post.id}</Avatar>}
        title={post.title}
        description={post.body}
      />
    </Item>
  )
}

const App = () => {

  const [list,setList] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setList(data))
    .catch(handleError.bind(null,'Failed to get the posts. Please try again.'))
  },[])

  return (
    <Layout>
      <Main>
        <Container title="Posts">
          <List
            dataSource={list}
            renderItem={item => <Post post={item} /> }
          />
        </Container>
      </Main>
    </Layout>
  );
}

export default App;
