export function createGameService(): any {
  return function (req: any, res: any) {
    console.log(req.body.request);
    res.json({ responce: "New Responce" });
  };
}
