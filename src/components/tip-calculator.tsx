"use client";

// Import necessary hooks from react

import { useState, ChangeEvent } from "react";

// import custom UI components form the UI directory
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

// Default export of the TipCalculatorComponent function

export default function TipCalculatorComponent() {
  // state hooks for managing the bill amout, tip percentage, tip amount, and total amount
  const [billAmount, setBillAmount] = useState<number | null>(null);
  const [tipPercentage, setTipPercentage] = useState<number | null>(null);
  const [tipAmpunt, setTipAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  //   handler for updating the bill amount state on input change
  const handleBillAmtChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setBillAmount(parseFloat(e.target.value));
  };

  //   handler for updating the tip percentage state on input change
  const handleTipPercentage = (e: ChangeEvent<HTMLInputElement>): void => {
    setTipPercentage(parseFloat(e.target.value));
  };
  // Function to calculate the tip and total amounts
  const calculateTip = (): void => {
    if (billAmount !== null && tipPercentage !== null) {
      const tip = billAmount * (tipPercentage / 100); // calculate the tip amount
      setTipAmount(tip); // set the tip amount state
      setTotalAmount(billAmount + tip); // set the total amount state
    }
  };

  //   JSX return statement rendering the tip calculator UI
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen">
      <Image
        className="relative h-screen w-full "
        src={"/bg.gif"}
        width={500}
        height={500}
        alt="background"
      />

      {/* Center the tip calculator card within the screen */}
      <Card className="absolute bg-gray-800 bg-opacity-70    ">
        <CardHeader>
          {/* Header with the title and description */}
          <CardTitle className="uppercase text-white text-center text-3xl">
            tip calculator
          </CardTitle>
          <CardDescription className="text-white text-center">
            Enter the bill amount and tip percentage to calculate the the tip
            and total amount.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Input for bill amount */}
          <Label htmlFor="bill-amount" className="text-white">
            Bill Amount
          </Label>
          <Input
            id="bill-amount"
            type="number"
            placeholder="Enter bill amount"
            value={billAmount !== null ? billAmount : ""}
            onChange={handleBillAmtChange}
          />
          {/* Input for tip percentage */}
          <div className="grid gap-2">
            <Label htmlFor="tip-percentage" className="text-white">
              TIP PERCENTAGE
            </Label>
            <Input

              id="tip-percentage"
              type="number"
              placeholder="Enter tip percentage"
              value={tipPercentage !== null ? tipPercentage : ""}
              onChange={handleTipPercentage}
            />
          </div>
          {/* button to calculate tip */}
          <Button className="bg-white text-black hover:text-white hover:bg-blue-800" onClick={calculateTip}>Calculate</Button>
        </CardContent>
        <CardFooter className="grid gap-2">
          {/* display the calculated tip amount */}
          <div className="flex items-center justify-between text-white">
            <span>Tip Amount</span>
            <span className="font-bold">{tipAmpunt.toFixed(2)}</span>
          </div>
          {/* Display the calculated total amount */}
          <div className="flex items-center justify-between text-white">
            <span>Total Amount</span>
            <span className="font-bold">{totalAmount.toFixed(2)}</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
