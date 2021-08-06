import { Container } from "./styles";

import BeverageList from "../../components/list";

function Home() {
  return (
    <Container>
      <BeverageList type="home" />
    </Container>
  );
}

export default Home;
