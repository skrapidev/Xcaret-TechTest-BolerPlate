import { ContainerModule, ContainerModuleLoadOptions,  } from "inversify";
import { IHttpAdapter } from "./Axios/IHttpAdapter";
import { AxiosHttpAdapter } from "./Axios/AxiosHttpAdapter";
import { TYPES } from "./types";

const appContainerModule: ContainerModule = new ContainerModule((options: ContainerModuleLoadOptions) => {
  //AXIOS
  options.bind<IHttpAdapter>(TYPES.IHttpAdapter)
  .to(AxiosHttpAdapter)
  .inSingletonScope();
});

export { appContainerModule as AppContainerModule };