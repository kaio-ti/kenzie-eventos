import { Link } from "react-router-dom";
import BeverageList from "../../components/list";
import { useFormatura } from "../../providers/formatura";
import { Container } from "./styles";

function Formatura() {
  const { formaturaList } = useFormatura();

  return (
    <Container>
      {formaturaList.length > 0 ? (
        <BeverageList type="formatura" />
      ) : (
        <h3>
          Você ainda não escolheu nenhum item para este evento, escolha{" "}
          <Link to="/">aqui</Link>{" "}
        </h3>
      )}
    </Container>
  );
}

export default Formatura;
