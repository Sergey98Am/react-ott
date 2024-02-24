import { Badge } from "@/components/ui/Badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import ctl from "@netlify/classnames-template-literals";

const elementPaddingClasses = ctl(`p-6 2xl:p-7`);

const tableHeaderClasses = ctl(
  `[&_th:first-child]:rounded-tl-lg 
    [&_th:first-child]:border-l 
    [&_th:last-child]:rounded-tr-lg 
    [&_th]:border 
    [&_th]:border-l-0 
    [&_th]:border-dark-black-15 
    [&_tr]:border-b-0
    2xl:[&_th:first-child]:rounded-tl-xl
    2xl:[&_th:last-child]:rounded-tr-xl `,
);

const tableBodyRowClasses = ctl(
  `border-b-none 
  border-b-0 
  [&_td:first-child]:border-l 
  [&_td]:border-0 
  [&_td]:border-b 
  [&_td]:border-r 
  [&_td]:border-dark-black-15`,
);

const tableBodyLastRowClasses = ctl(
  `${tableBodyRowClasses} 
    [&_td:first-child]:rounded-bl-lg 
    2xl:[&_td:first-child]:rounded-bl-xl 
    [&_td:last-child]:rounded-br-lg 
    2xl:[&_td:last-child]:rounded-br-xl`,
);

interface Plan {
  price: string;
  content: string;
  devices: string;
  free_trial: string;
  cancel_anytime: string;
  hdr: string;
  dolby_atmos: string;
  ad_free: string;
  offline_viewing: string;
  family_sharing: string;
}

interface PlansTableProps {
  basicPlan: Plan;
  standardPlan: Plan;
  premiumPlan: Plan;
}

const PlansTable: React.FC<PlansTableProps> = ({
  basicPlan,
  standardPlan,
  premiumPlan,
}) => {
  return (
    <Table className="hidden table-fixed border-separate border-spacing-0 text-lg md:table 2xl:text-xl">
      <TableHeader className={tableHeaderClasses}>
        <TableRow className="border-b-0">
          <TableHead className={elementPaddingClasses}>Features</TableHead>
          <TableHead className={elementPaddingClasses}>Basic</TableHead>
          <TableHead className={`${elementPaddingClasses} space-x-2`}>
            <span>Standard</span>
            <Badge className="inline !rounded-sm !p-1 !text-xs !font-medium lg:!text-sm 2xl:!px-3">
              Popular
            </Badge>
          </TableHead>
          <TableHead className={elementPaddingClasses}>Premium</TableHead>
        </TableRow>
      </TableHeader>

      {/* Plans info */}
      <TableBody className="text-base 2xl:text-lg">
        {/* Price */}
        <TableRow className={tableBodyRowClasses}>
          <TableCell className={elementPaddingClasses}>Price</TableCell>
          <TableCell className={elementPaddingClasses}>
            {basicPlan.price}
          </TableCell>
          <TableCell className={elementPaddingClasses}>
            {standardPlan.price}
          </TableCell>
          <TableCell className={elementPaddingClasses}>
            {premiumPlan.price}
          </TableCell>
        </TableRow>

        {/* Content  */}
        <TableRow className={tableBodyRowClasses}>
          <TableCell className={elementPaddingClasses}>Content</TableCell>
          <TableCell className={elementPaddingClasses}>
            {basicPlan.content}
          </TableCell>
          <TableCell className={elementPaddingClasses}>
            {standardPlan.content}
          </TableCell>
          <TableCell className={elementPaddingClasses}>
            {premiumPlan.content}
          </TableCell>
        </TableRow>

        {/* Devices  */}
        <TableRow className={tableBodyRowClasses}>
          <TableCell className={elementPaddingClasses}>Devices</TableCell>
          <TableCell className={elementPaddingClasses}>
            {basicPlan.devices}
          </TableCell>
          <TableCell className={elementPaddingClasses}>
            {standardPlan.devices}
          </TableCell>
          <TableCell className={elementPaddingClasses}>
            {premiumPlan.devices}
          </TableCell>
        </TableRow>

        {/* Free trial  */}
        <TableRow className={tableBodyRowClasses}>
          <TableCell className={elementPaddingClasses}>Free Trial</TableCell>
          <TableCell className={elementPaddingClasses}>
            {basicPlan.free_trial}
          </TableCell>
          <TableCell className={elementPaddingClasses}>
            {standardPlan.free_trial}
          </TableCell>
          <TableCell className={elementPaddingClasses}>
            {premiumPlan.free_trial}
          </TableCell>
        </TableRow>

        {/* Cancel Anytime  */}
        <TableRow className={tableBodyRowClasses}>
          <TableCell className={elementPaddingClasses}>
            Cancel Anytime
          </TableCell>
          <TableCell className={elementPaddingClasses}>
            {basicPlan.cancel_anytime}
          </TableCell>
          <TableCell className={elementPaddingClasses}>
            {standardPlan.cancel_anytime}
          </TableCell>
          <TableCell className={elementPaddingClasses}>
            {premiumPlan.cancel_anytime}
          </TableCell>
        </TableRow>

        {/* HDR  */}
        <TableRow className={tableBodyRowClasses}>
          <TableCell className={elementPaddingClasses}>HDR</TableCell>
          <TableCell className={elementPaddingClasses}>
            {basicPlan.hdr}
          </TableCell>
          <TableCell className={elementPaddingClasses}>
            {standardPlan.hdr}
          </TableCell>
          <TableCell className={elementPaddingClasses}>
            {premiumPlan.hdr}
          </TableCell>
        </TableRow>

        {/* Dolby Atmos  */}
        <TableRow className={tableBodyRowClasses}>
          <TableCell className={elementPaddingClasses}>Dolby Atmos</TableCell>
          <TableCell className={elementPaddingClasses}>
            {basicPlan.dolby_atmos}
          </TableCell>
          <TableCell className={elementPaddingClasses}>
            {standardPlan.dolby_atmos}
          </TableCell>
          <TableCell className={elementPaddingClasses}>
            {premiumPlan.dolby_atmos}
          </TableCell>
        </TableRow>

        {/* Ad-Free  */}
        <TableRow className={tableBodyRowClasses}>
          <TableCell className={elementPaddingClasses}>Ad-Free</TableCell>
          <TableCell className={elementPaddingClasses}>
            {basicPlan.ad_free}
          </TableCell>
          <TableCell className={elementPaddingClasses}>
            {standardPlan.ad_free}
          </TableCell>
          <TableCell className={elementPaddingClasses}>
            {premiumPlan.ad_free}
          </TableCell>
        </TableRow>

        {/* Offline Viewing  */}
        <TableRow className={tableBodyRowClasses}>
          <TableCell className={elementPaddingClasses}>
            Offline Viewing
          </TableCell>
          <TableCell className={elementPaddingClasses}>
            {basicPlan.offline_viewing}
          </TableCell>
          <TableCell className={elementPaddingClasses}>
            {standardPlan.offline_viewing}
          </TableCell>
          <TableCell className={elementPaddingClasses}>
            {premiumPlan.offline_viewing}
          </TableCell>
        </TableRow>

        {/* Family Sharing  */}
        <TableRow className={tableBodyLastRowClasses}>
          <TableCell className={elementPaddingClasses}>
            Family Sharing
          </TableCell>
          <TableCell className={elementPaddingClasses}>
            {basicPlan.family_sharing}
          </TableCell>
          <TableCell className={elementPaddingClasses}>
            {standardPlan.family_sharing}
          </TableCell>
          <TableCell className={elementPaddingClasses}>
            {premiumPlan.family_sharing}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default PlansTable;
