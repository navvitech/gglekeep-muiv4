import { BrowserRouter, Route, Switch } from "react-router-dom";
import Demo from "./Components/Drawer/Demo";
import CustomCard from "./Components/CustomCard";
import "./App.css";
import { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Bin from "./Bin";
import Reminders from "./Reminders";
import Archieve from "./Archieve";
import Lables from "./Lables";

function App() {
  const [numSelected, setNumSelected] = useState(0);
  const [open, setOpen] = useState(true);
  const theme = createMuiTheme();

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ThemeProvider theme={theme}>
              <Demo open={open} setOpen={setOpen} numSelected={numSelected}>
                <CustomCard
                  open={open}
                  numSelected={numSelected}
                  setNumSelected={setNumSelected}
                />
              </Demo>
            </ThemeProvider>
          </Route>
          <Route exact path="/reminders">
            <Demo open={open} setOpen={setOpen}>
              <Reminders />
            </Demo>
          </Route>
          <Route exact path="/editLables">
            <Demo open={open} setOpen={setOpen}>
              <Lables />
            </Demo>
          </Route>
          <Route exact path="/archieve">
            <Demo open={open} setOpen={setOpen}>
              <Archieve />
            </Demo>
          </Route>
          <Route exact path="/bin">
            <Demo open={open} setOpen={setOpen}>
              <Bin />
            </Demo>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
