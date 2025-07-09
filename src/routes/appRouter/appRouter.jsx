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

import { AppLayout } from "../../layouts";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/" element={<Welcome />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/start" element={<Gender />} />
          <Route path="/trivia" element={<Trivia />} />
          <Route path="/win" element={<Win />} />
          <Route path="/lose" element={<Lose />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
