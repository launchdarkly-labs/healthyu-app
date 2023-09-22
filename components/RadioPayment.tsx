import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card } from "./ui/card"
 
export function RadioPayment() {
  return (
    <Card className="p-4">
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Stored Credit Card</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Stored ACH Account</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="paypal" id="r3" />
        <Label htmlFor="r3">Paypal</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="toglepay" id="r3" />
        <Label htmlFor="r3">TogglePay</Label>
      </div>
    </RadioGroup>
    </Card>
  )
}
