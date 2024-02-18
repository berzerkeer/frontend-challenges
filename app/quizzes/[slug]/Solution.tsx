import { Card } from "@/components/ui";

import React, { useState } from "react";
import { MDXComponent } from "@/components/common/MDXComponent";

type SolutionProps = {
  solution: string;
};

function Solution(props: SolutionProps) {
  const { solution } = props;
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Card className="h-full overflow-hidden p-4">
      {!showSolution && (
        <button
          className="absolute inset-0 cursor-pointer bg-[var(--color-bg)]"
          onClick={() => {
            setShowSolution(true);
          }}
        >
          <span className="text-3xl">👀</span>
          <p>Click here to see the solution</p>
        </button>
      )}
      <MDXComponent code={solution} />
    </Card>
  );
}

export { Solution };
