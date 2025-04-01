import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "@/layouts/public-layout";
import Home from "@/routes/home";
import AuthLayout from "@/layouts/auth-layout";
import SignInPage from "@/routes/sign-in";
import SingUpPage from "@/routes/sign-up";
import { ProtectedLayout } from "./layouts/protected-layout";
import MainLayout from "./layouts/main-layout";
function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
          </Route>

          {/* auth routes */}
          <Route element={<AuthLayout />}>
            {/* <Route path="/signin/*" element={<SignInPage />} /> */}
            <Route path="/signup/*" element={<SingUpPage />} />
          </Route>
          {/* Protected Routes */}
          <Route
            element={
              <ProtectedLayout>
                {" "}
                <MainLayout />
              </ProtectedLayout>
            }
          >
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
