import { Empty } from 'antd';

const NoData = ({ message }) => {
  return (
    <div className='flex justify-center items-center w-full h-auto'>
      <Empty description={message} />
    </div>
  );
};

export default NoData;
