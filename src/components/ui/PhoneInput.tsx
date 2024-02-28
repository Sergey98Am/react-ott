import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

import * as React from "react";

import * as RPNInput from "react-phone-number-input";

import flags from "react-phone-number-input/flags";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/Command";
import { Input, InputProps } from "@/components/ui/Input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";

import { cn } from "@/lib/utils";

export type PhoneInputValue = RPNInput.Value;

type PhoneInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> &
  RPNInput.Props<typeof RPNInput.default>;

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> =
  React.forwardRef<React.ElementRef<typeof RPNInput.default>, PhoneInputProps>(
    ({ className, ...props }, ref) => (
      <RPNInput.default
        ref={ref}
        placeholder={"Enter a phone number"}
        className={cn("flex", className)}
        flagComponent={FlagComponent}
        countrySelectComponent={CountrySelect}
        inputComponent={InputComponent}
        {...props}
      />
    ),
  );

PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <Input
      className={cn(
        "ml-3 rounded-md py-4 2xl:ml-4 2xl:rounded-lg 2xl:py-5",
        className,
      )}
      {...props}
      ref={ref}
    />
  ),
);

type CountrySelectOption = { label: string; value: RPNInput.Country };

type CountrySelectProps = {
  disabled?: boolean;
  value: RPNInput.Country;
  onChange: (value: RPNInput.Country) => void;
  options: CountrySelectOption[];
};

const CountrySelect = ({
  disabled,
  value,
  onChange,
  options,
}: CountrySelectProps) => {
  const handleSelect = React.useCallback(
    (country: RPNInput.Country) => {
      onChange(country);
    },
    [onChange],
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex items-center space-x-1 space-y-1 rounded-md border border-dark-black-15 bg-dark-black-08 px-2 py-4 transition-colors hover:bg-dark-black-06 2xl:rounded-lg 2xl:px-3 2xl:py-5",
          )}
          disabled={disabled}
        >
          <span className="flex items-center truncate">
            <div className="flex h-6 w-9 space-x-1 space-y-1 rounded-sm bg-grey-grey-60">
              {value && <FlagComponent country={value} countryName={value} />}
            </div>
          </span>
          <ChevronDownIcon
            className={`h-5 w-5 2xl:h-6 2xl:w-6 ${disabled ? "hidden" : ""}`}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search country..." />
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {options
                .filter((x) => x.value)
                .map((option) => (
                  <CommandItem
                    className={"space-x-2 text-sm"}
                    key={option.value}
                    onSelect={() => handleSelect(option.value)}
                  >
                    <FlagComponent
                      country={option.value}
                      countryName={option.label}
                    />
                    <span>{option.label}</span>
                    <span className="text-grey-grey-60">
                      {`+${RPNInput.getCountryCallingCode(option.value)}`}
                    </span>
                    <CheckIcon
                      className={`ml-auto h-4 w-4 ${
                        option.value === value ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span className={"inline w-9 overflow-hidden rounded-sm object-contain"}>
      {Flag && <Flag title={countryName} />}
    </span>
  );
};

export { PhoneInput };
