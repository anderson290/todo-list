import { styled } from "../styles";
const StyledButton = styled("button", {
  height: "54px",
  width: "100%",
  border: 0,
  borderRadius: 8,
  outline: 0,
  cursor: "pointer",
  backgroundColor: "$blueDark",
  color: "$gray100",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 5,
});

interface IProps {
    children: string | JSX.Element | JSX.Element[],
    onClick: () => void
}

const Button = ({children, onClick}: IProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
