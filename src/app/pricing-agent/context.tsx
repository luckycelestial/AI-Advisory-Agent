"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface BusinessDataContextProps {
  businessData: any;
  setBusinessData: (data: any) => void;
}

const BusinessDataContext = createContext<BusinessDataContextProps | undefined>(undefined);

export function BusinessDataProvider({ children }: { children: ReactNode }) {
  const [businessData, setBusinessData] = useState<any>(null);
  return (
    <BusinessDataContext.Provider value={{ businessData, setBusinessData }}>
      {children}
    </BusinessDataContext.Provider>
  );
}

export function useBusinessData() {
  const context = useContext(BusinessDataContext);
  if (!context) {
    throw new Error("useBusinessData must be used within a BusinessDataProvider");
  }
  return context;
}
