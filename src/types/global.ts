declare global {
    interface Window {
      phantom?: {
        ethereum?: {
          isPhantom?: boolean;
        };
        solana?: {
          isPhantom?: boolean;
        };
      };
    }
  }
  
export {};
  