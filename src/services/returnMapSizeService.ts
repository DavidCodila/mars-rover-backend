import { getAccountByIdService } from "./getAccountByIdService";

export function returnMapSizeService(): any {
  return function (req: any, res: any) {
    console.log(req.body);
    const accountId = req.params.accountID;
    const account = getAccountByIdService(accountId);
    console.log(accountId);
    console.log(accountId.getMapSize);
    console.log(req.params.accountID);
    if (account != null) {
      res.json({ mapSize: account.getMapSize() });
    } else res.json({ mapSize: null });
  };
}
