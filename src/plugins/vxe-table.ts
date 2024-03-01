import VXETable from "vxe-table";
import "vxe-table/lib/style.css";
import type { App } from "vue";

function useTable(app: App) {
  app.use(VXETable);
}

export default useTable;
