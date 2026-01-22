interface Data {
  number: number;
  title: string;
  description: string;
}
const Process = ({ title, data }: { title: string; data: Data[] }) => {
  return (
    <section className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-domine  font-bold text-center  mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {data.map((step, index) => (
            <div
              key={index}
              className="border rounded-lg bg-yellow-100 border-yellow-100  p-4 relative"
            >
              <h2 className="absolute -top-4 left-4 bg-primary  px-3 py-1 font-inter text-white rounded-full">
                {step.number}
              </h2>
              <h3 className="text-xl mt-2 font-bold mb-3 text-yellow-900">
                {step.title}
              </h3>
              <p className="text-sm opacity-90">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
