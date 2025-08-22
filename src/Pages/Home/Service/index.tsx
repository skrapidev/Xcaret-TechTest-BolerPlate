import HomeRequest from "../Domain/Dto/HomeRequest";
import HomeRepository from "../Infrastructure/HomeRepository";
import {ModuleHomeContainer, types as TYPES} from"../ModuleContainer" 

//Funciones dedicadas a consumir el contenedor de inversion de dependencias, 
// ya sean repositorios si no hay reglas de aplicación o casos de usos si existen reglas de aplicacion

export async function getById(id: number) {
    const homeRepository = ModuleHomeContainer.get<HomeRepository>(TYPES.HomeRepository);
    return await homeRepository.getById({id} as HomeRequest)
}
export async function createHomeData(name: string) {
    const homeRepository = ModuleHomeContainer.get<HomeRepository>(TYPES.HomeRepository);
    return await homeRepository.create({name} as HomeRequest)
}
export async function updateHomeData(id: number, name: string) {
    const homeRepository = ModuleHomeContainer.get<HomeRepository>(TYPES.HomeRepository);
    return await homeRepository.update({id, name} as HomeRequest)
}
export async function deleteHomeData(id: number) {
    const homeRepository = ModuleHomeContainer.get<HomeRepository>(TYPES.HomeRepository);
    return await homeRepository.delete({id} as HomeRequest)
}