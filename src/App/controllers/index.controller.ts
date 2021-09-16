import { Request, Response } from 'express'
import { BaseHttpController, controller, httpGet } from 'inversify-express-utils'

@controller('/')
class IndexController extends BaseHttpController {
    @httpGet('/')
    public index(req: Request, res: Response) {
        // lines to test debug
        let resultado = 0
        let n1 = 2
        let n2 = 3
        resultado += n1
        resultado += n2

        res.status(200).json({
            msg: 'Welcome to Minimal TS - Inversify - Docker - Debugger App'
        })
    }
}

export default IndexController