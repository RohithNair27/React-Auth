import "./App.css";
import { signUpAuthService } from "./services/Auth";
import PrimaryRouter from "./router/PrimaryRouter";

signUpAuthService();

function App() {
  return (
    <>
      <PrimaryRouter />
    </>
  );
}

export default App;
