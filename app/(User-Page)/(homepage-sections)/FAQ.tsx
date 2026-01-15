import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "@/components/uilayouts/accordion";
import { Plus } from "lucide-react";
const FAQ = () => {
  const faqs = [
    {
      question: "Where can i find car repair near me in Dubai?",
      answer:
        "If you’re looking for a reliable car repair service in Dubai, searching for terms like “car repair near me” or “car service center near me” will help you find nearby workshops.Advanz Tech offers complete automotive repair and maintenance services, including:",
      list: [
        "Engine repair and overhauls",
        "Electrical system diagnostics and repairs",
        "Brake inspection and repair",
        "Transmission servicing and repairs",
        "Car recovery and towing services",
        "And much more",
      ],
    },
    {
      question: "Why is regular car servicing important?",
      answer:
        "Regular servicing helps maintain your vehicle’s performance, improves safety, and prevents costly breakdowns. Routine maintenance also extends the lifespan of your car and ensures it performs efficiently in Dubai’s driving conditions.",
    },
    {
      question: "What are the signs that my car needs servicing or repair?",
      answer:
        "Some common signs include warning lights on the dashboard, unusual noises, reduced performance, vibration while driving, fluid leaks, or poor fuel efficiency. If you notice any of these, it’s best to have your vehicle inspected by professionals.",
    },
    {
      question: "Where can I get reliable car service in Dubai?",
      answer:
        "For dependable and professional car servicing, Advanz Tech provides expert maintenance and repair solutions using advanced diagnostic tools, skilled technicians, and genuine parts, ensuring quality results every time.",
    },
    {
      question: "How can I choose a reliable car service center in Dubai?",
      answer:
        "A trustworthy car service center should have experienced technicians, modern equipment, transparent pricing, positive customer reviews, and a focus on genuine parts. Choosing a specialist workshop like Advanz Tech ensures your car receives expert care.",
    },
    {
      question: "Which is the best car repair workshop in Al Quoz?",
      answer:
        "Advanz Tech is a preferred choice for car owners in Al Quoz, offering high-quality automotive repair and maintenance services with a strong focus on European and luxury vehicles",
    },
  ];
  return (
    <div className="grid grid-cols-[.7fr_1.3fr] gap-4 max-w-6xl mx-auto mt-24">
      <div>
        <h2 className="text-4xl font-semibold">Frequently Asked Questions</h2>
      </div>
      <div>
        <Accordion defaultValue={["item-1", "item-2"]}>
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={idx.toString()}>
              <AccordionHeader customIcon>
                {faq.question}{" "}
                <Plus className="group-data-active:rotate-45 transition-transform" />
              </AccordionHeader>
              <AccordionPanel>
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
      </div>
    </div>
  );
};

export default FAQ;
