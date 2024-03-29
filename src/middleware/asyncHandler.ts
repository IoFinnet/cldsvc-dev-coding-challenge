// Needed to wrap async routes in express to handle errors properly
// https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016
export const asyncMiddleware = (fn: (...args: any[]) => Promise<any>) => (req: any, res: any, next: any) =>
  Promise.resolve(fn(req, res, next)).catch(next);
