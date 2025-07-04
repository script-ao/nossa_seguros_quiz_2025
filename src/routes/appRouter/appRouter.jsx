import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Welcome, Intro, Gender, Trivia } from "../../screens";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/start" element={<Gender />} />
        <Route path="/trivia" element={<Trivia />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
