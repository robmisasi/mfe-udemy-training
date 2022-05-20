import { createApp } from "vue";

import Dashboard from "./components/Dashboard";

// Mount function to start app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// Dev & isolation: mount immidiately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}
// Container: export mount func
export { mount };
