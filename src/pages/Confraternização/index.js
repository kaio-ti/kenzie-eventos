import { Link } from "react-router-dom";
import BeverageList from "../../components/list";
import { useConfra } from "../../providers/confraternização";
import { Container } from "./styles";

function Confraternização() {
  const { confraList } = useConfra();

  return (
    <Container>
      {confraList.length > 0 ? (
        <BeverageList type="confra" />
      ) : (
        <h3>
          Você ainda não escolheu nenhum item para este evento, escolha{" "}
          <Link to="/">aqui</Link>{" "}
        </h3>
      )}
    </Container>
  );
}

export default Confraternização;
