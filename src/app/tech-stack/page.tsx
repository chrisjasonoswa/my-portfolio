'use client';
import { TECH_STACK } from "@/lib/constants/tech-stack";

const page = () => {
  return(
    <div>
      <div>
        <div className="page-title">
          Tech Stack
        </div>
      </div>
      <div className="card flex flex-col gap-4 rounded-2xl">
        {TECH_STACK.map(({title, values}) => {
          return (
            <div
              key={title}
              className="border border-secondary/10 dark:border-white/10 rounded-lg p-4 hover:scale-101 hover:shadow-md hover:duration-500"
            >
              <div
                className="text-lg font-medium"
              >
                <div className="mb-1">{title}</div>
                <div className="flex flex-wrap gap-4">
                    {values.map((item) => {
                    return (
                      <div key={item} className="text-sm font-normal inline-flex rounded-lg py-1 px-3 border border-secondary/20 dark:border-white/50">
                        { item }
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default page;
