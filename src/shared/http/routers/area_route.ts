import { Router } from 'express'
import { AreaController } from '@modules/controllers/area_controller'

const areaController = new AreaController()

export default async (router: Router): Promise<void> => {
    router.post('/area', areaController.cadastrarArea)
    router.get('/area', areaController.listarArea)
    router.get('/area/:id', areaController.buscarAreaId)
}