import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// serviceWorkerRegistration.register() // => esto es para usar con o sin internet pero tiene pros y contras.

serviceWorkerRegistration.register({
  onUpdate: async (registration) => {
    // Corremos este código si hay una nueva versión de nuestra app
    // Detalles en: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle
    if (registration && registration.waiting) {
      await registration.unregister();
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
      // Des-registramos el SW para recargar la página y obtener la nueva versión. Lo cual permite que el navegador descargue lo nuevo y que invalida la cache que tenía previamente.
      window.location.reload();
    }
  },
});
