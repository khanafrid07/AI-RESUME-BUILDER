import { Response, NextFunction } from "express";
import { AuthRequest } from "../types/express.d";

type AsyncFn = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => Promise<any> | void;

const wrapAsync = (fn: AsyncFn) => {
    return (req: AuthRequest, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

export default wrapAsync;