import React from "react";

const SectionLayout = ({ title, description, children }) => {
  return (
    <section className="bg-white">
      <div className="w-full h-full flex flex-col items-center justify-center py-10 gap-y-6 ">
        <div className="text-center">
          <h3 className="text-xl font-medium">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
        <div className="mt-3 w-full">{children}</div>
      </div>
    </section>
  );
};

export default SectionLayout;
