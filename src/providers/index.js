import { CasamentoProvider } from "./casamento";
import { ConfraProvider } from "./confraternização";
import { FormaturaProvider } from "./formatura";
import { BeveragesProvider } from "./Lista de bebidas";

const Providers = ({ children }) => {
  return (
    <BeveragesProvider>
      <CasamentoProvider>
        <ConfraProvider>
          <FormaturaProvider>{children}</FormaturaProvider>
        </ConfraProvider>
      </CasamentoProvider>
    </BeveragesProvider>
  );
};

export default Providers;
