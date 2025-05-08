import { Request, Response } from "express"

class UploadsController {
    async create(request: Request, response: Response) {
        response.json({message: "OK"})
    }
}

export { UploadsController }