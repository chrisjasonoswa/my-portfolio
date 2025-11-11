'use client';
import Icon from "@/components/ui/icons/Icon";
import { HISTORY } from "@/lib/constants/experience";
import Link from "next/link";

const page = () => {
  return(
    <div>
      <div>
        <div className="page-title">
          Projects
        </div>
      </div>  
      <div className="card rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-secondary dark:text-white">
          {HISTORY.flatMap((job) => job.projects || []).map((project) => (
            <div
              key={project.title}
              className="
                flex flex-col border border-secondary/10 dark:border-white/10 rounded-xl p-4
                hover:shadow-2xl hover:duration-500 hover:transform hover:transition-all hover:scale-105
              "
            >
              <div className="flex items-center justify-between mb-1">
                <div className="font-medium text-base">{project.title}</div>
                {project.url && (
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-primary/70 text-white p-1 rounded-full hover:underline flex items-center gap-1"
                    aria-label={`Go to project link ${project.url}`}
                  >
                    <Icon name="link" size="0.9em" />
                  </Link>
                )}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((item) => {
                  return (
                    <div key={item} className="text-xs font-normal inline-flex rounded-lg py-1 px-3 border border-secondary/20 dark:border-white/50">
                      { item } 
                    </div>
                  )
                })}
              </div>

               {/* Short Description */}
              <div className="mb-4">
                <p className="text-xs text-secondary/50 dark:text-white/60">
                  {project.shortDescription}
                </p>
              </div>

              {/* Description */}
              <div className="space-y-4">
                {project.description.map((description) => 
                  <p key={description} className="text-sm">
                    • {description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
