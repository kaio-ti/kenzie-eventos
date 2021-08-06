import { useCasamento } from "../../providers/casamento";
import { useConfra } from "../../providers/confraternização";
import { useFormatura } from "../../providers/formatura";
import { useBevarage } from "../../providers/Lista de bebidas";
import BeverageCard from "../card";
import { Container } from "./styles";

function BeverageList({ type }) {
  const { list } = useBevarage();
  const { casamentoList } = useCasamento();
  const { confraList } = useConfra();
  const { formaturaList } = useFormatura();

  return (
    <>
      {type === "home" && (
        <Container>
          {list.map((beverage) => (
            <BeverageCard key={beverage.id} props={beverage} type={type} />
          ))}
        </Container>
      )}
      {type === "casamento" && (
        <Container>
          {casamentoList.map((beverage) => (
            <BeverageCard key={beverage.id} props={beverage} type={type} />
          ))}
        </Container>
      )}
      {type === "confra" && (
        <Container>
          {confraList.map((beverage) => (
            <BeverageCard key={beverage.id} props={beverage} type={type} />
          ))}
        </Container>
      )}
      {type === "formatura" && (
        <Container>
          {formaturaList.map((beverage) => (
            <BeverageCard key={beverage.id} props={beverage} type={type} />
          ))}
        </Container>
      )}
    </>
  );
}
export default BeverageList;
