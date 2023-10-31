import { Area } from '@modules/models/area'
import { AreaServices } from '@modules/services/area_services'
import { type Request, type Response } from 'express'

export class AreaController {
    async cadastrarArea (request: Request, response: Response): Promise<Response> {
        const servicesArea = new AreaServices()
        await servicesArea.cadastrar(request.body)
        return response.json().status(201)
    }

    async listarArea (request: Request, response: Response): Promise<Response> {
        const servicesArea = new AreaServices()
        const area = await servicesArea.listar()
        return response.json(Area)
    }

    async buscarAreaId (request: Request, response: Response): Promise<Response> {
        const servicesArea = new AreaServices()
        const area = await servicesArea.buscarAreaId(parseInt(request.params.id))
        return response.json(area)
    }
}