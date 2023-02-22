import { styled } from "../styles";
import logo from "../assets/rocket.svg";

const HeaderContainer = styled("div", {
  backgroundColor: "$gray700",
  height: "12.5rem",
});

const HeaderTitleContainer = styled("h1", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "12.5rem",
  gap: ".8rem",
});

const HeaderTitle = styled("div", {
    fontSize: "40px"
});

const HeaderPurpleTitle = styled("span", {
    color: "$purple"
});

const HeaderBlueTitle = styled("span", {
    color: "$blue"
});

export function Header() {
  return (
    <HeaderContainer>
      <HeaderTitleContainer>
        <img src={logo} alt="" />
        <HeaderTitle>
          <HeaderBlueTitle>to</HeaderBlueTitle>
          <HeaderPurpleTitle>do</HeaderPurpleTitle>
        </HeaderTitle>
      </HeaderTitleContainer>
    </HeaderContainer>
  );
}
