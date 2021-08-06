import { Card, CardContent, Typography } from "@material-ui/core";
import "./styles.css";
import AddButton from "../Button";
import { makeStyles } from "@material-ui/core";
// import { Container } from './styles';

function BeverageCard({ props, type }) {
  const useStyles = makeStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      padding: "10px",
      "&:last-child": { paddingBottom: "10px" },
    },
  });

  const classes = useStyles();
  // se tiver no home, renderiza o botão normal, caso contrario, renderiza pra remover

  return (
    <Card className="card">
      <img src={props.image_url} alt={props.name} />
      <CardContent classes={{ root: classes.root }}>
        <Typography variant="h5">{props.name}</Typography>
        <Typography variant="body1">
          Inicio da fabricação: {props.first_brewed}
        </Typography>
        <Typography variant="body1">
          Volume: {props.volume.value} lts
        </Typography>
        <Typography variant="h6">Sobre a cerveja</Typography>
        <Typography variant="body2">{props.description}</Typography>
        <Typography variant="h6">Vai bem com:</Typography>
        <Typography variant="body1">
          {props.food_pairing[0]}, {props.food_pairing[1]}
        </Typography>
        <AddButton type={type} props={props} />
      </CardContent>
    </Card>
  );
}

export default BeverageCard;
