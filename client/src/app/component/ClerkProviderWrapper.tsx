"use client"

import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

const ClerkProviderWrapper = ({ children }: { children: ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default ClerkProviderWrapper;
