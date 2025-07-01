import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Welcome, Intro, Gender } from "../../screens";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/start" element={<Gender />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
