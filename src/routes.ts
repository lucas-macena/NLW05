import {Router} from "express"
import { SettingsController } from "./controllers/SettingsController"

const routes = Router();

const settingsController = new SettingsController()

/**
 * Tipos de parâmetros
 * Routes Params => Parametros de rotas
 * http://localhost:3333/settings/1
 * 
 * Query params => Filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * 
 * Body Params => {
 * }
 * 
 */

routes.post("/settings", settingsController.create)

export {routes}