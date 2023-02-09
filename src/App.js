import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { publicRoutes } from "~/routes";
import { MainLayout } from "~/layouts";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((publicRoute, idx) => {
            const Page = publicRoute.compenent;
            return (
              <Route
                key={idx}
                path={publicRoute.path}
                element={
                  <MainLayout>
                    <Page />
                  </MainLayout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
