import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../css/app.css";
import "../css/google.css";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
