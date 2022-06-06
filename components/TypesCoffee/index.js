import React from "react";
import Card from "../Card";
import SectionApp from "../Section";
import Subtitle from "../Subtitle";
import Wrapper from "../Wrapper";

const TypesCoffee = ({ TypesCoffeeData }) => {
  return (
    <SectionApp>
      <div>
        <div className="mb-5">
          <Subtitle>Coffee Types</Subtitle>
        </div>
        <div className="flex gap-5 flex-wrap justify-center">
          {TypesCoffeeData &&
            TypesCoffeeData.map((coffee) => (
              <Card
                key={coffee?.node.id}
                image={coffee?.node.featuredImage.node.sourceUrl}
                title={coffee?.node.title}
                description={coffee?.node.excerpt}
              />
            ))}
        </div>
      </div>
    </SectionApp>
  );
};

export default TypesCoffee;
