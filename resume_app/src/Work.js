import { Divider,Steps,List,Tag } from 'antd';
import { BankOutlined,LaptopOutlined } from '@ant-design/icons';
import parse from 'html-react-parser';
import User from './assets/user.json';
const { Item } = List;
const { Meta } = Item;
const { Step } = Steps;

const getFormatedDate = date => {
    if(!date) return 'Present';
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${new Date(date).getFullYear()} ${monthNames[new Date(date).getMonth()]}`;
}

const History = ({history}) => {
    return (
        <>
            <List
                size="small"
                split={false}
                itemLayout="vertical"
                dataSource={history.description}
                renderItem={item => <Item>{parse(item)}</Item>}
            />
            <div className="environment">
                <span>Environments: </span>
                { history.environments.map(env => <Tag key={env} color="#55acee">{env}</Tag>) }
            </div>
        </>
    )
}

const Duration = ({history}) => {
    return (
        <div className="duration">
            <span>{getFormatedDate(history.started_at)}</span> -
            <span>{getFormatedDate(history.ended_at)}</span>
        </div>
    )
}

const Company = ({history}) => {
    return (
        <div className="company">
            <span className="name">{history.company}</span>
            <span className="position">{history.designation}</span>
        </div>
    )
}

const Experiences = () => {
    return (
        <div className="workExperience">
            <Divider orientation="left">Work Experience</Divider>
            <Steps direction="vertical" status="finish">
                {   User.experience.map(history => <Step
                                                        key={history.company}
                                                        icon={<LaptopOutlined />}
                                                        status="finish"
                                                        direction="vertical"
                                                        title={<Company history={history} />}
                                                        subTitle={<Duration history={history} />}
                                                        description={<History history={history} />}
                                                    />)   
                }
            </Steps>
        </div>
    )
}

const Achievements = () => {
    return (
        <div className="achievements">
            <Divider orientation="left">Achievements</Divider>
            <List
                size="small"
                split={false}
                itemLayout="vertical"
                dataSource={User.achievements}
                renderItem={item => <Item>{parse(item)}</Item>}
            />
        </div>
    )
}

const renderCollege = college => {
    return (
        <Item key={college.college}>
            <Meta
                avatar={<BankOutlined style={{ fontSize: '20px'}} />}
                title={`${college.degree} ${college.department}`}
                description={college.college}
            />
            <div>{college.year}</div>
        </Item>
    )
}

const Education = () => {
    return (
        <div className="educationContainer">
            <Divider orientation="left">Education</Divider>   
            <List
                size="small"
                split={false}
                itemLayout="vertical"
                dataSource={User.education}
                renderItem={renderCollege}
            />
        </div>
    )
}

const Work = () => {

    return (
        <div className="workContainer">
            <Experiences />
            <Achievements />
            <Education />
        </div>
    )

}

export default Work;