import React from "react";
import { Switch, Route } from "react-router-dom";

import EventDetail from "./pages/EventDetail";
import Home from "./pages/Home";
import EventForm from "./components/EventForm"

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/event/:id/" component={EventDetail} />
      <Route path="/event" component={EventForm} />
    </Switch>
  );
}
