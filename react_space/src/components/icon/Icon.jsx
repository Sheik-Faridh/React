import { IconContext } from 'react-icons';

const Icon = ({ prop, children }) => {
  return (
    <IconContext.Provider value={{ ...prop }}>{children}</IconContext.Provider>
  );
};

export default Icon;
