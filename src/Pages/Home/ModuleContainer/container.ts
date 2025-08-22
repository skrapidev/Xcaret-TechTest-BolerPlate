import { types as TYPES } from "./types";
import HomeRepository from "../Infrastructure/HomeRepository";
import { AppContainerModule } from "../../../Shared/AppServiceContainer";
import { Container } from "inversify";
import AvailabilityProductsRepository from "../Infrastructure/AvailabilityProductsRepository";

const container = new Container();
container.load(AppContainerModule);

container.bind(TYPES.HomeRepository).to(HomeRepository).inRequestScope();
container.bind(TYPES.AvailabilityProductsRepository).to(AvailabilityProductsRepository).inRequestScope();

export { container as ModuleHomeContainer };
