
'use client';

import { useCurrency } from '@/lib/currency-context';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Currency = 'USD' | 'EUR' | 'GBP' | 'INR';

export default function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();

  const handleValueChange = (value: string) => {
    setCurrency(value as Currency);
  }

  return (
    <Select value={currency} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[80px]">
        <SelectValue placeholder="Currency" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="USD">USD</SelectItem>
        <SelectItem value="EUR">EUR</SelectItem>
        <SelectItem value="GBP">GBP</SelectItem>
        <SelectItem value="INR">INR</SelectItem>
      </SelectContent>
    </Select>
  );
}
