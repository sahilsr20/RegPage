import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Layout from "./Pages/Layout";
import Test from "./Pages/Test";
import Darkmode from "darkmode-js";

// new Darkmode().showWidget();

function App() {
  // const options = {
  //   bottom: "64px", // default: '32px'
  //   right: "unset", // default: '32px'
  //   left: "32px", // default: 'unset'
  //   time: "0.5s", // default: '0.3s'
  //   mixColor: "#fff", // default: '#fff'
  //   backgroundColor: "#fff", // default: '#fff'
  //   buttonColorDark: "#100f2c", // default: '#100f2c'
  //   buttonColorLight: "#fff", // default: '#fff'
  //   saveInCookies: false, // default: true,
  //   label: "🌓", // default: ''
  //   autoMatchOsTheme: true, // default: true
  // };

  // const darkmode = new Darkmode(options);
  // darkmode.showWidget();
  // darkmode.toggle();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Error />} />
      </Routes>{" "}
    </Layout>
  );
}

export default App;
