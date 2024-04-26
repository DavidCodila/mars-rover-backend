export function createGameService(): any {
  return function (req: any, res: any) {
    console.log(req.body);
    res.json({ responce: "New Responce" });
  };
}
