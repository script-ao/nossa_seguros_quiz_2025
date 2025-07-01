import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Welcome, Intro } from "../../screens";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/intro" element={<Intro />}/>
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
