interface IChildrenProps {
  children: React.ReactNode | JSX.Element | JSX.Element[];
}

interface IServerError {
  error: string;
  message: string;
  statusCode: number;
}

interface IWalletErrorDto {
  // viem
  cause?: {
    shortMessage?: string;
    code?: string;
  };

  // metamask
  code?: string;
  message?: string;
}
