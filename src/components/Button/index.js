import { Button, Menu, MenuItem } from "@material-ui/core";
import { useState } from "react";
import { useCasamento } from "../../providers/casamento";
import { useConfra } from "../../providers/confraternização";
import { useFormatura } from "../../providers/formatura";

function AddButton({ type, props }) {
  const [isOpen, setIsOpen] = useState(null);

  const handleOpen = (e) => {
    setIsOpen(e.currentTarget);
  };

  const handleClose = (e) => {
    setIsOpen(null);
  };

  const { addToCasamento, removeFromCasamento } = useCasamento();
  const { addToConfra, removeFromConfra } = useConfra();
  const { addToFormatura, removeFromFormatura } = useFormatura();

  const handleClickCasamento = () => {
    if (type === "home") {
      addToCasamento(props);
      handleClose();
    } else {
      removeFromCasamento(props);
    }
  };

  const handleClickConfra = () => {
    if (type === "home") {
      addToConfra(props);
      handleClose();
    } else {
      removeFromConfra(props);
    }
  };

  const handleClickFormatura = () => {
    if (type === "home") {
      addToFormatura(props);
      handleClose();
    } else {
      removeFromFormatura(props);
    }
  };

  return (
    <>
      {type === "home" && (
        <>
          <Button
            size="small"
            variant="outlined"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleOpen}
          >
            Adicionar item
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={isOpen}
            keepMounted
            open={Boolean(isOpen)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClickCasamento}>Casamento</MenuItem>
            <MenuItem onClick={handleClickConfra}>Confraternização</MenuItem>
            <MenuItem onClick={handleClickFormatura}>Formatura</MenuItem>
          </Menu>
        </>
      )}
      {type === "casamento" && (
        <Button size="small" variant="outlined" onClick={handleClickCasamento}>
          Remover item
        </Button>
      )}
      {type === "confra" && (
        <Button size="small" variant="outlined" onClick={handleClickConfra}>
          Remover item
        </Button>
      )}
      {type === "formatura" && (
        <Button size="small" variant="outlined" onClick={handleClickFormatura}>
          Remover item
        </Button>
      )}
    </>
  );
}
export default AddButton;
