import React from "react";
import Routes from './navigation/Routes'
import { AuthProvider } from "./view/auth/AuthService";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
