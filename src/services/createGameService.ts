import { accounts } from "../models/accounts";
import { account } from "../models/account";

export function createGameService(): any {
  return function (req: any, res: any) {
    console.log(req.body);
    console.log("Got to create API call");
    const newAccount = new account(req.body.mapSize);
    saveAccountToMemory(newAccount);
    res.json({ accountId: newAccount.getId() });
  };
}

function saveAccountToMemory(account: account) {
  accounts.push(account);
}
