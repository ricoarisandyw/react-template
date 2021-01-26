import React from "react";
import "./App.scss";
import { hot } from "react-hot-loader/root";

import AppRoute from "./components/routes";

const App: React.FC = () => {
  return ( 
    <div>
      <AppRoute />
    </div>
  );
};
export default hot(App);
