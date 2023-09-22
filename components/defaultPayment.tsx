import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function DefaultPayment() {
    return (
<div className="grid w-full items-center gap-1.5">
                <Label className="pt-4 font-bold text-xl" htmlFor="email">
                Payment Method: ACH Transfer
                </Label>
                <Label className="font-bold" htmlFor="email">
                  Account Number
                </Label>
                <Input
                  className="text-xl font-bold text-black"
                  value="338472***"
                  disabled
                  type="text"
                  id="account"
                  placeholder="Email"
                />
              </div>
            
    )
}