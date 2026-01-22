import FAQ from "@/app/(User-Page)/(homepage-sections)/FAQ";

const Faq = ({
  faqs,
}: {
  faqs: { question: string; answer: string; list?: string[] }[];
}) => {
  return (
    <section className="py-14 px-4 ">
      <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-[.8fr_1.2fr] mx-auto">
        <h2 className="text-4xl font-domine font-bold ">
          Frequently Asked Questions
        </h2>

        <div className="mt-6 lg:mt-0">
          <FAQ faqs={faqs} />
        </div>
      </div>
    </section>
  );
};

export default Faq;
