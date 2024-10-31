import React, { MouseEvent, useState } from "react";
import { cn } from "~/lib/utils";
import { IconButton, Input } from "./tredici";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";

type NumberInputProps = {
  value?: number;
  onChange?: (value: number) => void;
  className?: string;
  min?: number;
  max?: number;
};

const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChange,
  className,
  min = 1,
  max = 100
}) => {
  const [val, setVal] = useState<number>(value ?? 1);

  const onClick = (inc: boolean) => (e: MouseEvent) => {
    let n = 1;

    if (e.shiftKey) {
      n = 10;
    }

    const newValue = inc ? val + n : val - n;

    internalOnChange(newValue);
  };

  const internalOnChange = (value: number) => {
    if (!Number.isInteger(value)) {
      return;
    }

    if (value < min || value > max) {
      return;
    }

    setVal(value);
    onChange?.(value);
  };

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <IconButton icon={<ChevronUpIcon />} onClick={onClick(true)} />
      <Input
        className={cn("!w-8 !h-8", "inline-flex items-center justify-center")}
        value={val}
        onValueChange={s => internalOnChange(+s)}
      />
      <IconButton icon={<ChevronDownIcon />} onClick={onClick(false)} />
    </div>
  );
};

export { NumberInput };
