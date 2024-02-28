import { faq } from "@/constants";
import { chunkIntoN } from "@/lib/utils";
import Typography from "./ui/Typography";
import Button from "./ui/Button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

const dividedArray = chunkIntoN(faq, 2);

const FAQ = () => {
  return (
    <div className="space-y-10 xl:space-y-[60px] 2xl:space-y-20">
      {/* Heading */}
      <div className="flex flex-col items-start justify-between space-y-5 lg:flex-row lg:items-end lg:space-y-0">
        {/* Title and description */}
        <div className="space-y-2 md:w-10/12 xl:space-y-2.5 2xl:space-y-3.5">
          <Typography variant="h2" className="text-xl xl:text-4xl 2xl:text-5xl">
            Frequently Asked Questions
          </Typography>
          <Typography variant="body">
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </Typography>
        </div>
        <Button variant="primary">Ask a Question</Button>
      </div>

      {/* Questions accordion */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 2xl:gap-x-10">
        {dividedArray.map((part, index) => (
          <Accordion key={`part-${index}`} type="multiple" className="w-full">
            {part.map((item) => (
              // Accordion item
              <AccordionItem
                className="group relative border-none px-2.5 py-5 transition-all sm:space-y-0 sm:p-6 2xl:p-[30px]"
                key={item.id}
                value={item.title}
              >
                {/* Accordion line */}
                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent from-0% via-[#e50000] via-20% to-transparent to-100% group-hover:via-80%"></div>

                <div className="flex space-x-4">
                  {/* Accoordion number */}
                  <span className="h-fit space-x-2.5 rounded-[10px] bg-dark-black-12 p-3 text-base font-semibold leading-[normal] sm:p-4 2xl:p-5 2xl:text-xl">
                    {item.id < 10 ? "0" + item.id : item.id}
                  </span>

                  <div className="my-auto w-full sm:my-0 2xl:space-y-5">
                    {/* Trigger */}
                    <AccordionTrigger className="group relative py-0 text-start text-lg hover:no-underline sm:pt-4 sm:text-xl sm:data-[state=open]:pt-0 2xl:text-2xl [&[data-state=open]>svg]:rotate-0">
                      {/* Title */}
                      <span>{item.title}</span>

                      {/* Plus or Minus icon */}
                      <PlusIcon className="h-6 w-6 shrink-0  transition-transform duration-200 group-data-[state=open]:hidden 2xl:h-[30px] 2xl:w-[30px]" />

                      <MinusIcon className="h-6 w-6 shrink-0  transition-transform duration-200 group-data-[state=closed]:hidden 2xl:h-[30px] 2xl:w-[30px]" />
                    </AccordionTrigger>

                    {/* Desktop content */}
                    <AccordionContent className="hidden pb-0 sm:block sm:text-base 2xl:text-lg">
                      {item.description}
                    </AccordionContent>
                  </div>
                </div>

                {/* Mobile content */}
                <AccordionContent className="pb-0 pt-3 text-sm sm:hidden">
                  <Typography variant="body">{item.description}</Typography>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
