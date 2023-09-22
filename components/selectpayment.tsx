import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectPayment() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a Payment Method" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Payment Methods</SelectLabel>
          <SelectItem value="credit">Stored Credit Card</SelectItem>
          <SelectItem value="bank">Stored Bank Account</SelectItem>
          <SelectItem value="paypal">Paypal</SelectItem>
          <SelectItem value="toggle">TogglePay</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
