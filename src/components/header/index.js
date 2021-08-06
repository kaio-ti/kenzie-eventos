import {
  AppBar,
  CssBaseline,
  Slide,
  Tab,
  Tabs,
  useScrollTrigger,
} from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function HideAppBar(props) {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const history = useHistory();

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Tabs value={selectedTab} onChange={handleChange}>
            <Tab label="Home" onClick={() => history.push("/")} />
            <Tab label="Casamento" onClick={() => history.push("/casamento")} />
            <Tab
              label="Confraternização"
              onClick={() => history.push("/confraternizacao")}
            />
            <Tab label="Formatura" onClick={() => history.push("/formatura")} />
          </Tabs>
        </AppBar>
      </HideOnScroll>
    </>
  );
}
export default HideAppBar;
