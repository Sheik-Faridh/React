import { Typography,Descriptions,Divider,Space,Button } from 'antd';
import { PhoneOutlined,GithubOutlined,MailOutlined,LinkedinOutlined,HomeOutlined } from '@ant-design/icons';
import User from './assets/user.json';
const { Title } = Typography;
const { Item } = Descriptions;

const iconsList = {
    phone: <PhoneOutlined />,
    email: <MailOutlined />,
    location: <HomeOutlined />,
    linkedin: <LinkedinOutlined />,
    github: <GithubOutlined />
}

const Header = () => {
    return (
        <div className="title">
            <Title level={2}>{User.name}</Title>
            <Title level={3}>{User.designation}</Title>
        </div>
    )
}

const Contact = () => {
    return (
        <Descriptions column={1}>
            {
                Object.keys(User.contact_details).map(prop => <Item key={prop} label={iconsList[prop]}>{User.contact_details[prop]}</Item>)
            }
        </Descriptions>
    )
}

const Summary = () => {
    return (
        <div className="summaryDetails">
           <Divider orientation="left">Summary</Divider> 
           <p>{User.summary}</p>
        </div>
    )
}

const Skills = () => {
    return (
        <div className="skillDetails">
            <Divider orientation="left">Skills</Divider>
            {
                Object.keys(User.skills).map(prop => (
                    <div className="skill" key={prop}>
                        <Title level={5}>{prop}</Title>
                        <Space size={[3,0]} wrap split={<Divider type="vertical" />}>
                            { User.skills[prop].map(b => <Button key={b} type="link">{b}</Button>) }
                        </Space>
                    </div>
                ))
            }
        </div>
    )
}

const Profile = () => {
    return (
        <div className="profileContainer">
            <Header />
            <Contact />
            <Summary />
            <Skills />
        </div>
    )
}

export default Profile;