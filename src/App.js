import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Layout from "./Pages/Layout";
import Mobo from "./Pages/Mobo";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobo" element={<Mobo />} />
        <Route path="*" element={<Error />} />
      </Routes>{" "}
    </Layout>
  );
}

export default App;
