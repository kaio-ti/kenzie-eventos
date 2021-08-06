import { Link } from "react-router-dom";
import BeverageList from "../../components/list";
import { useCasamento } from "../../providers/casamento";
import { Container } from "./styles";

function Casamento() {
  const { casamentoList } = useCasamento();

  return (
    <Container>
      {casamentoList.length > 0 ? (
        <BeverageList type="casamento" />
      ) : (
        <h3>
          Você ainda não escolheu nenhum item para este evento, escolha{" "}
          <Link to="/">aqui</Link>{" "}
        </h3>
      )}
    </Container>
  );
}

export default Casamento;
