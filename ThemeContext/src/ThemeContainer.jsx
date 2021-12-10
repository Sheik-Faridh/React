import styled from "styled-components";
import useTheme from "./hooks/useTheme";

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const DarkTheme = styled.div`
  width: 100px;
  height: 100px;
  background-color: #000;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const BlueTheme = styled.div`
  width: 100px;
  height: 100px;
  background-color: #002540;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const RedTheme = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f00;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const ThemeButton = styled.button`
  background-color: var(--btnBg);
  color: var(--btnColor);
  border-radius: 5px;
  padding: 6px 12px;
  outline: none;
  border-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: var(--btnColor);
    color: var(--btnBg);
    border: 1px solid var(--btnBg);
  }
`;

const ThemeHeading = styled.h1`
  color: var(--color);
  text-align: center;
`;

const AlignCenter = styled.div`
  text-align: center;
`;

const ThemeContainer = () => {
  const { setTheme } = useTheme();

  return (
    <>
      <FlexContainer>
        <DarkTheme onClick={() => setTheme("dark")} />
        <BlueTheme onClick={() => setTheme("blue")} />
        <RedTheme onClick={() => setTheme("red")} />
      </FlexContainer>
      <ThemeHeading>Theme Heading</ThemeHeading>
      <AlignCenter>
        <ThemeButton>Theme Button</ThemeButton>
      </AlignCenter>
    </>
  );
};

export default ThemeContainer;
