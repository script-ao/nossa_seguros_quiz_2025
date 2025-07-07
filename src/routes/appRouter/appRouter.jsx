import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Welcome,
  Intro,
  Gender,
  Trivia,
  Lose,
  Win,
  Register,
} from "../../screens";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Welcome />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/start" element={<Gender />} />
        <Route path="/trivia" element={<Trivia />} />
        <Route path="/win" element={<Lose />} />
        <Route path="/lose" element={<Win />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
