import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Layout from "./Pages/Layout";
import Form from "./Pages/FormTwo";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Layout>
  );
}

export default App;
