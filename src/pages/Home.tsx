import Header from "../components/Header";
import { styled } from "../styles";
import List from "../components/List";

const Container = styled("div", {
  maxWidth: "736px",
  margin: "auto",
  position: "relative",
  top: "-1.75rem",
});


const Home = () => {
  return (
    <>
      <Header />
      <Container>
     
        <List />
      </Container>
    </>
  );
};

export default Home;
