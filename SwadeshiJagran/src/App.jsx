import { LenisProvider } from "./context/LenisContext";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div>
    <LenisProvider>
      <AppRoutes />
    </LenisProvider>
    </div>
  );
};

export default App;
