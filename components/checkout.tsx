import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "./ui/card";
import { useState } from "react";
import { DefaultPayment } from "./defaultPayment";
import { RadioPayment } from "./RadioPayment";
import { SelectPayment } from "./selectpayment";
import { useFlags, useLDClient } from "launchdarkly-react-client-sdk";

export function CheckOut() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [completedColor, setCompletedColor] = useState("");

  const LDClient = useLDClient();

  const { newPaymentMethods } = useFlags();

  async function handleClick() {
    LDClient!.track("sign-up-completed", LDClient!.getContext(), 1);
    setIsOpen(false);
    console.log("clicked");
    setIsSignedUp(false);
    setCompleted(false);
    setCompletedColor("");
  }

  async function profileSignUp() {
    LDClient!.track("sign-up-initial-info-entered", LDClient!.getContext(), 1);
    setIsSignedUp(true);
  }

  async function handleCompleted() {
    setCompleted(true);
    LDClient!.track("sign-up-payment-added", LDClient!.getContext(), 1);
    setCompletedColor("bg-green-500/20");
  }

  async function startFlow() {
    LDClient!.track("sign-up-button-clicked", LDClient!.getContext(), 1);
    setIsOpen(true);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger onClick={() => startFlow()} asChild>
        <Button variant={"default"} className="text-xl">
          Sign Up Today!
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <div className="flex gap-4 py-4">
          {!isSignedUp && (
            <Card className="w-full">
              <CardHeader>
                <p className="text-2xl font-bold mx-auto">
                  HealthyU Subscription
                </p>
                <p className="mx-auto font-bold">(Step 1/2)</p>
              </CardHeader>
              <CardContent>
                <div className="py-4">
                  <Label htmlFor="user">Username</Label>
                  <Input
                    className="text-xl text-black"
                    value="cameron.savage"
                    type="text"
                    id="user"
                    placeholder="user"
                  />
                </div>
                <div className="py-4">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    className="text-xl  text-black"
                    value="ToggleTime123"
                    type="password"
                    id="password"
                    placeholder="password"
                  />
                </div>
                <div className="py-4">
                  <Label htmlFor="email">Email</Label>

                  <Input
                    className="text-xl text-black"
                    value="cameron@healthyu.com"
                    type="text"
                    id="email"
                    placeholder="email"
                  />
                </div>
                <p className="mx-auto text-center text-xl pt-8">
                  Enjoy all-you-can use access to our facilities, staff, and
                  programs. Build a healthier life for you and your family
                </p>
                <div
                  className="pt-8"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button onClick={() => profileSignUp()}>Create User</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {isSignedUp && (
            <Card className="w-full p-4">
              <div className="grid items-center justify-center mx-auto">
                <div className="grid">
                  <p className="text-3xl font-bold">Payment Details</p>
                  <p className="mx-auto font-bold">(Step 2/2)</p>
                  <div className={`p-4 ${completedColor}`}>
                    {newPaymentMethods === "sign-up-flow" ? (
                      <DefaultPayment />
                    ) : newPaymentMethods === "sign-up-radio-cards" ? (
                      <RadioPayment />
                    ) : (
                      newPaymentMethods === "sign-up-dropdown-options" && (
                        <SelectPayment />
                      )
                    )}
                    <div className="flex mx-auto justify-center pt-4">
                      <Button
                        disabled={completed}
                        onClick={() => handleCompleted()}
                        variant={"destructive"}
                      >
                        Confirm Payment Method
                      </Button>
                    </div>
                  </div>
                  <p className="pt-4">
                    Total Payment Due:
                    <span className="text-red-500 font-bold"> $299.99</span>
                  </p>
                </div>
                <DialogFooter className="mx-auto pt-8">
                  <Button
                    disabled={!completed}
                    onClick={() => handleClick()}
                    type="submit"
                  >
                    Complete Sign Up
                  </Button>
                </DialogFooter>
              </div>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}