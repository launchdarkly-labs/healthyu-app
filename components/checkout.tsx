import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShoppingCart } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { useState } from "react";
import { DefaultPayment } from "./defaultPayment";
import { RadioPayment } from "./RadioPayment";
import { SelectPayment } from "./selectpayment";
import { useFlags } from "launchdarkly-react-client-sdk";

export function CheckOut() {
  const { newPaymentMethods } = useFlags();

  function handleClick() {
    console.log("clicked");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"default"} className="bg-blue-500 text-xl">
          Sign Up Today!
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl w-2/3 h-2/3">
        <div className="flex gap-4 py-4">
          <Card className="h-full w-1/2 overflow-y-auto">
            <CardHeader>
              <p className="text-2xl font-bold mx-auto">
                HealthyYou Subscription
              </p>
              {/* <Card>
                <CardHeader className="flex flex-row items-center gap-4 justify-between">
                  <p>Healthy You Starter Pack</p>
                  <p className="font-bold">$295.00</p>
                </CardHeader>
              </Card> */}
              {/* <Card>
                <CardHeader className="flex flex-row items-center gap-4 justify-between">
                  <p>Wellness O2 Test Pack</p>
                  <p className="font-bold">$152.00</p>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 justify-between">
                  <p>Limited Edition Healthy You Jumpsuit</p>
                  <p className="font-bold">$75.00</p>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 justify-between">
                  <p>Galaxy Themed Trailmix</p>
                  <p className="font-bold">$12.50</p>
                </CardHeader>
              </Card> */}
            </CardHeader>
            <CardContent>
              <Label className="font-bold" htmlFor="email">
                Username
              </Label>
              <Input
                className="text-xl font-bold text-black"
                value="CoolNameSavage23"
                type="text"
                id="email"
                placeholder="email"
              />
              <Label className="font-bold" htmlFor="email">
                Password
              </Label>
              <Input
                className="text-xl font-bold text-black"
                value="ToggleTime123"
                type="password"
                id="password"
                placeholder="password"
              />
              <Label className="font-bold" htmlFor="email">
                Email
              </Label>
              <Input
                className="text-xl font-bold text-black"
                value="cameron@healthyyou.com"
                type="text"
                id="email"
                placeholder="email"
              />
              {/* <img src="running.png" className="w-full shadow-xl" /> */}
              <p className="mx-auto text-center text-xl pt-8">
                Enjoy all-you-can use access to our facilities, staff, and
                programs. Build a healthier life for you and your family
              </p>
              <div className="pt-8" style={{ display: 'flex', justifyContent: 'center' }}>
                <Button className="bg-blue-500">Create User</Button>
              </div>
            </CardContent>
          </Card>
          <div className="flex items-center justify-center h-full">
            <div className="grid">
              <p className="text-3xl font-bold">Payment Details</p>
              <div className="p-4">
                {newPaymentMethods === "default" ? (
                  <DefaultPayment />
                ) : newPaymentMethods === "radio" ? (
                  <RadioPayment />
                ) : (
                  newPaymentMethods === "dropdown" && <SelectPayment />
                )}
              </div>
              <p className="pt-4">
                Total Payment Due:
                <span className="text-red-500 font-bold"> $299.99</span>
              </p>
            </div>
          </div>
        </div>
        <DialogFooter className="absolute bottom-5 right-5">
          <Button onClick={() => handleClick()} type="submit">
            Submit Payment
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Insert CartDialog into your navbar where you want the icon to appear.
