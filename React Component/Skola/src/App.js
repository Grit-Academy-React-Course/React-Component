import React, { Fragment } from "react";
// You have to import the component you created in order to be able to render it. 
//Don't forget that you should import the component in uppercase format.
import Welcome from "./components/welcome/Welcome"; 

class App extends React.Component {
  render() {
    return (
      <Fragment>
        { /* You call the component by choosing between either ways */}
        <Welcome></Welcome>
        <Welcome />
      </Fragment>
    )
  }
}
export default App;