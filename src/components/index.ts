import SvgIcon from "./SvgIcon/index.vue";
import Collapse from "./Collapse/index.vue";

import CSelect from "./CElement/CSelect/index.vue";
import CButton from "./CElement/CButton/index.vue";
import CTable from "./CElement/CTable/index.vue";
import CPage from "./CElement/CPage/index.vue";
import CSchema from "./CElement/CSchema/index.vue";

function setupComponents(app: any) {
  app.component("SvgIcon", SvgIcon);
  app.component("Collapse", Collapse);

  app.component("CSelect", CSelect);
  app.component("CButton", CButton);
  app.component("CTable", CTable);
  app.component("CPage", CPage);
  app.component("CSchema", CSchema);

  return app;
}

export default setupComponents;
