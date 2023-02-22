import Header from "../components/Header";
import { styled } from "../styles";
import { PlusCircle } from "phosphor-react";

const Container = styled("div", {
  maxWidth: "736px",
  margin: "auto",
  position: "relative",
  top: "-1.75rem",
});

const InputContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "6fr 1fr",
  gap: 10,
});

const Button = styled("button", {
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

const Input = styled("input", {
  height: "54px",
  width: "100%",
  backgroundColor: "$gray500",
  color: "$gray300",
  border: 0,
  borderRadius: 8,
  outline: 0,
  padding: "1rem",
});

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <InputContainer>
          <Input type={"text"} />
          <Button>
            <span>Criar</span> <PlusCircle size={22} />{" "}
          </Button>
        </InputContainer>
      </Container>
    </>
  );
};

export default Home;
