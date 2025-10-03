import { BrowserRouter, Routes, Route } from "react-router-dom";

import PlaygroundPage from "@pages/Playground";
import HomePage from "@pages/Home";
import QueryClientProvider from "./contexts/QueryClientProvider";
import SigninPage from "@pages/Signin";

// server component
function App() {
  return (
    <QueryClientProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
