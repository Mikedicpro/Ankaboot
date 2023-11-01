import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";

import dataProvider from "./dataProvider";
import { ApiList } from "./components/ApiList";
import { DisallowedApiList } from "./components/DisallowedApiList";
import { ApiCreate } from "./components/ApiCreate";
import { ServiceList } from "./components/ServiceList";
import { ServiceShow } from "./components/ServiceShow";

export const App = () => (
  <Admin dataProvider={dataProvider} >
    <Resource
      name="healthy"
      list={ApiList}
      options={{ label: "Healthy API's" }}
      create={ApiCreate}
    />
    <Resource
      name="unsure"
      options={{ label: "Unsure API's" }}
      list={DisallowedApiList}
    />
    <Resource
      name="services"
      list={ServiceList}
      show={ServiceShow}
    />
  </Admin>
);
