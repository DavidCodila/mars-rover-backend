export function returnMapSizeService(): any {
  return function (req: any, res: any) {
    console.log(req.body);
    res.json({ mapSize: "100" });
  };
}
