import styled from "styled-components";

import { Route, Routes, useLocation } from "react-router";
import Input from "antd/lib/input/Input";

const Content = styled.h1`
  color: white;
  font-size: 40px;
`;

function App() {
  return (
    <Routes>
      <Route path="*" element={<Clippy></Clippy>}></Route>
    </Routes>
  );
}
function Clippy() {
  const location = useLocation();
  return (
    <div>
      <Content>{location.pathname}</Content>
      <Input></Input>
    </div>
  );
}

export default App;
