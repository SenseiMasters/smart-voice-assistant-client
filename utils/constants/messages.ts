const systemMessagesFunc = {
  copyFailed: (str: string) => `Copy to clipboard failed, content: ${str}`,
};

export const systemErrors = {
  emptySelect: "You should select some items",
  announcementBody: "Announcement body is empty",
  priceFilter: "Min price should be lower then max price",
  updateNonRentalCollection:
    "Non-rental (real) collection can update by marketplace",
  emptyCart:
    "Your cart is empty, please add some NFTs to it then try to buy them.",
};

export const systemMessages = {
  stake: "Staked successfully",
  updated: "Updated successfully",
  copyTx: "Transaction hash copied",
  newReferral: "New referral created",
  transfer: "Transferred successfully",
  addProfit: "Profit added successfully",
  buyout: "All assets bought successfully",
  priceUpdate: "Price updated successfully",
  assetCreated: "Asset created successfully",
  assetUpdated: "Asset updated successfully",
  assetRemoved: "Asset removed successfully",
  addObstacle: "Obstacle added successfully",
  removeProfit: "Remove profit successfully",
  prizeUpdated: "Prizes updated successfully",
  loggedIn: "You have successfully logged in",
  cancelStake: "Stake cancelled successfully",
  toggleSuspend: "Toggle suspend successfully",
  removeObstacle: "Obstacle added successfully",
  deposit: "Deposit transaction was successful",
  removeCurrency: "Remove currency successfully",
  disconnect: "Wallet disconnected, login again",
  collectionSync: "Collection synced successfully",
  withdrawal: "Withdrawal transaction was successful",
  collectionRemoved: "Collection removed successfully",
  collectionCreated: "Collection created successfully",
  changeAssetBalance: "Asset balance changed successfully",
  announcementCreated: "Announcement created successfully",
  announcementRemoved: "Announcement removed successfully",
  assetWithdrawalSetting: "Asset withdraw currency updated",
  claimRewards: "Rewards claimed and wallet balance charged",
  depositRecovery: "Deposit transaction recovery was successful",
  withdrawRecovery: "Withdraw transaction recovery was successful",
  ...systemMessagesFunc,
};

export const walletErrors: { [key: string]: string } = {
  "4001": "User rejected the request.",
  "4100":
    "The requested account and/or method has not been authorized by the user.",
  "4200": "The requested method is not supported by this Ethereum provider.",
  "4900": "The provider is disconnected from all chains.",
  "4901": "The provider is disconnected from the specified chain.",
  "-32700":
    "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
  "-32600": "The JSON sent is not a valid Request object.",
  "-32601": "The method does not exist / is not available.",
  "-32602": "Invalid method parameter(s).",
  "-32603": "Internal JSON-RPC error.",
  "-32000": "Invalid input.",
  "-32001": "Resource not found.",
  "-32002": "Resource unavailable.",
  "-32003": "Transaction rejected.",
  "-32004": "Method not supported.",
  "-32005": "Request limit exceeded.",
};

export const serverErrors: { [key: string]: string } = {
  "404": "Not found.",
  "409": "Conflict.",
  "403": "Forbidden from accessing.",
  "401": "Session expired or invalid.",
  "400": "Bad request.",
  "406": "Not acceptable.",
  "500": "Server error.",
};
