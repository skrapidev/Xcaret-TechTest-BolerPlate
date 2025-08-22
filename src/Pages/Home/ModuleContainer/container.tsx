import { types as TYPES } from "./types";
import HomeRepository from "../Infrastructure/HomeRepository";
import {container as AppContainer} from "../../../Shared/AppServiceContainer"

//AXIOS
AppContainer
  .bind(TYPES.HomeRepository)
  .to(HomeRepository)
  .inRequestScope();

export { AppContainer as ModuleHomeContainer };