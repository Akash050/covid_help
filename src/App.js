import React from "react";
import "./App.css";
import "./assests/css/custom.css"
import "./assests/css/style.scss"
import "./assests/css/responsive.css"
import "./assests/css/style.css.map"
import "./assests/libs/line-awesome/css/line-awesome.min.css"
import "./assests/libs/fontawesome-pro/css/fontawesome.css"
import "./assests/libs/bootstrap/css/bootstrap.min.css"
import "./assests/libs/slick/slick-theme.css"
import "./assests/libs/quilljs/css/quill.bubble.css"
import "./assests/libs/quilljs/css/quill.core.css"
import "./assests/fonts/jost/stylesheet.css"
// import "./assests/libs/chosen/chosen.min.css"
import "./assests/libs/venobox/venobox.css"
import "./assests/libs/venobox/venobox.css"
import { Provider } from "react-redux";
import Routes from './Routes'
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
