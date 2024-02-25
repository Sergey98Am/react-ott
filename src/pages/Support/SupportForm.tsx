import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";

import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Checkbox } from "@/components/ui/Checkbox";
import { PhoneInput } from "@/components/ui/PhoneInput";
import ctl from "@netlify/classnames-template-literals";
import { supportSchema } from "@/ValidationSchemas";

const inputWrapperClasses = ctl(
  `grid
  grid-cols-1
  gap-5 
  xl:grid-cols-2 
  2xl:gap-12`,
);

const labelAndInputSpacingClasses = ctl(
  `space-y-3 
  2xl:space-y-4`,
);

const labelClasses = ctl(
  `font-semibold 
  2xl:text-lg`,
);

const formControlClasses = ctl(
  `text-sm 
  2xl:text-lg`,
);

const inputClasses = ctl(
  `rounded-md 
  p-4 
  2xl:rounded-lg 
  2xl:p-5`,
);

const SupportForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof supportSchema>>({
    resolver: zodResolver(supportSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof supportSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 rounded-md border border-dark-black-15 bg-dark-black-06 p-6 xl:space-y-10 xl:rounded-xl xl:p-10 2xl:space-y-12 2xl:p-12"
      >
        {/* Input wrapper */}
        <div className={inputWrapperClasses}>
          {/* First name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className={labelAndInputSpacingClasses}>
                <FormLabel className={labelClasses}>First Name</FormLabel>
                <FormControl className={formControlClasses}>
                  <Input
                    placeholder="Enter First Name"
                    className={inputClasses}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className={labelAndInputSpacingClasses}>
                <FormLabel className={labelClasses}>Last Name</FormLabel>
                <FormControl className={formControlClasses}>
                  <Input
                    placeholder="Enter Last Name"
                    className={inputClasses}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Input wrapper */}
        <div className={inputWrapperClasses}>
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className={labelAndInputSpacingClasses}>
                <FormLabel className={labelClasses}>Email</FormLabel>
                <FormControl className={formControlClasses}>
                  <Input
                    placeholder="Enter your Email"
                    className={inputClasses}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone number */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className={labelAndInputSpacingClasses}>
                <FormLabel className={labelClasses}>Phone Number</FormLabel>
                <FormControl className={formControlClasses}>
                  <PhoneInput {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Input wrapper */}

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className={labelAndInputSpacingClasses}>
              <FormLabel className={labelClasses}>Message</FormLabel>
              <FormControl className={formControlClasses}>
                <Textarea
                  placeholder="Enter your Message"
                  className="h-32 resize-none rounded-md p-4 2xl:h-40 2xl:rounded-lg 2xl:p-5"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Input wrapper */}
        <div className="flex flex-col space-y-5 xl:flex-row xl:items-center xl:justify-between xl:space-x-5 xl:space-y-0">
          {/* Agreement checkbox */}
          <FormField
            control={form.control}
            name="agreement"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-row items-center space-x-2 space-y-0 2xl:space-x-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="h-6 w-6 2xl:h-7 2xl:w-7"
                    />
                  </FormControl>
                  <div>
                    <FormLabel className="font-normal text-grey-grey-60 2xl:text-lg">
                      I agree with Terms of Use and Privacy Policy
                    </FormLabel>
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Send button */}
          <Button type="submit">Send Message</Button>
        </div>
      </form>
    </Form>
  );
};

export default SupportForm;
