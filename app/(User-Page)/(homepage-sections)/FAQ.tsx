import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "@/components/uilayouts/accordion";
import { Plus } from "lucide-react";
interface FAQProps {
  faqs: { question: string; answer: string; list?: string[] }[];
}
const FAQ = ({ faqs }: FAQProps) => {
  return (
    <Accordion defaultValue={["item-1", "item-2"]}>
      {faqs.map((faq, idx) => (
        <AccordionItem
          key={idx}
          value={idx.toString()}
          className="border-amber-400"
        >
          <AccordionHeader
            customIcon
            className="bg-amber-300! text-amber-900 hover:text-black"
          >
            {faq.question}{" "}
            <Plus className="group-data-active:rotate-45 transition-transform" />
          </AccordionHeader>
          <AccordionPanel className="bg-amber-300 text-black">
            {faq.answer}
            {faq.list ? (
              <ul className="list-disc ml-6 mt-2">
                {faq.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : null}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQ;
