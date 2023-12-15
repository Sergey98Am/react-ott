import { faq } from "@/constants";
import NumberedAccordion from "./NumberedAccordion";
import { chunkIntoN } from "@/lib/utils";
import Typography from "./ui/Typography";
import ctl from "@netlify/classnames-template-literals";
import Button from "./ui/Button";

const dividedArray = chunkIntoN(faq, 2);

const sectionContainer = ctl(
  `section-container
  flex 
  flex-col 
  gap-y-10
  xl:gap-y-[60px]
  2xl:gap-y-20`,
);

const headingClasses = ctl(
  `heading 
  flex 
  flex-col
  justify-between
  items-start
  gap-y-5
  lg:items-end 
  lg:flex-row
  lg:gap-y-0`,
);

const infoClasses = ctl(
  `info 
  flex 
  flex-col 
  gap-y-2
  md:w-10/12
  xl:gap-y-2.5
  2xl:gap-y-3.5`,
);

const FAQ = () => {
  return (
    <div className={sectionContainer}>
      {/* Heading */}
      <div className={headingClasses}>
        {/* Title and description */}
        <div className={infoClasses}>
          <Typography
            variant="h2"
            className="text-xl font-bold xl:text-4xl 2xl:text-5xl"
          >
            Frequently Asked Questions
          </Typography>
          <Typography variant="body">
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </Typography>
        </div>
        <Button variant="primary">Ask a Question</Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 2xl:gap-x-10">
        {dividedArray.map((part, index) => (
          <NumberedAccordion key={`part-${index}`} items={part} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
