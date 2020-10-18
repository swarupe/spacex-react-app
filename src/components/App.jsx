import React, { Component, Fragment } from "react";
import Filter from "./Filter/Filter";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ProgramList from "./ProgramList/ProgramList";
import SpaceXLaunch from "../apis/SpaceXLaunch";

class App extends Component {
  state = {
    programs: [],
    launchYear: [],
    successfulLaunch: [],
    sucessfulLanding: [],
  };

  componentDidMount() {
    (async () => {
      const { data } = await SpaceXLaunch.get("v3/launches", {
        params: {
          limit: 4,
        },
      });
      if (data && data.length > 0) {
        this.setState({ programs: data });
      }
    })();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Filter />
        <ProgramList programs={this.state.programs} />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
