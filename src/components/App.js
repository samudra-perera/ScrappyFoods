import { Container } from "react-bootstrap";
import Signup from "./Signup";
import { AuthProvider } from "../context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          This is the default Path
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
