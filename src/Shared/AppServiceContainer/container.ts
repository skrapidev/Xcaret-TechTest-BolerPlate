import { Container } from "inversify";
import { IHttpAdapter } from "./Axios/IHttpAdapter";
import { AxiosHttpAdapter } from "./Axios/AxiosHttpAdapter";
import { TYPES } from "./types";

const container = new Container();
//AXIOS
container
  .bind<IHttpAdapter>(TYPES.IHttpAdapter)
  .to(AxiosHttpAdapter)
  .inSingletonScope();

export { container };