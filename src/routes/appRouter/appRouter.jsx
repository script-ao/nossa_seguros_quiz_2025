import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Welcome } from "../../screens";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
