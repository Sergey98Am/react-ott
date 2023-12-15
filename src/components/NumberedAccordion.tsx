import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

// Define a type for the items in the accordion
type AccordionItem = {
  id: number;
  title: string;
  description: string;
};

// Define a type for the props of the NumberedAccordion component
type NumberedAccordionProps = {
  items: AccordionItem[];
};

const NumberedAccordion: React.FC<NumberedAccordionProps> = ({ items }) => {
  return (
    <Accordion type="multiple" className="w-full">
      {items.map((item) => (
        <AccordionItem
          className="px-2.5 py-5 sm:space-y-0 sm:p-6 2xl:p-[30px]"
          key={item.id}
          value={item.title}
        >
          <div className="flex gap-x-4">
            <span className="h-fit gap-2.5 rounded-[10px] bg-dark-black-12 p-3 text-base font-semibold leading-[normal] sm:p-4 2xl:p-5 2xl:text-xl">
              {item.id < 10 ? "0" + item.id : item.id}
            </span>
            <div className="my-auto w-full sm:my-0 2xl:space-y-5">
              <AccordionTrigger className="text-start text-lg sm:pt-4 sm:text-xl sm:data-[state=open]:pt-0 2xl:text-2xl">
                <span>{item.title}</span>
              </AccordionTrigger>
              <AccordionContent className="hidden sm:block sm:text-base 2xl:text-lg">
                {item.description}
              </AccordionContent>
            </div>
          </div>
          <AccordionContent className="pt-3 text-sm sm:hidden">
            {item.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default NumberedAccordion;
