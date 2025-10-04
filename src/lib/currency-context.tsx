
'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Currency = 'USD' | 'EUR' | 'GBP' | 'INR';

interface ExchangeRates {
    [key: string]: number;
}

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (price: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Mock exchange rates - in a real app, you'd fetch these from an API
const MOCK_RATES: ExchangeRates = {
  'USD': 1,
  'EUR': 0.92,
  'GBP': 0.79,
  'INR': 83.45,
};

const currencySymbols: { [key in Currency]: string } = {
    'USD': '$',
    'EUR': '€',
    'GBP': '£',
    'INR': '₹',
};

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [rates, setRates] = useState<ExchangeRates>(MOCK_RATES);

  // In a real app, you might fetch rates and detect user location here
  useEffect(() => {
    // For now, we just use mock data
    setRates(MOCK_RATES);
  }, []);

  const formatPrice = (price: number) => {
    const rate = rates[currency] || 1;
    const convertedPrice = price * rate;
    const symbol = currencySymbols[currency] || '$';
    return `${symbol}${convertedPrice.toFixed(2)}`;
  };
  

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
