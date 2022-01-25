import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Layout from "./Pages/Layout";
import Construct from "./Pages/Construct";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/construct" element={<Construct />} />
        <Route path="*" element={<Error />} />
      </Routes>{" "}
    </Layout>
  );
}

export default App;
