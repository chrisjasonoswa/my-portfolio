'use client';
import Button from "@/components/ui/buttons/button";
import ArrowRightIcon from "@/components/ui/icons/ArrowRightIcon";
import BookIcon from "@/components/ui/icons/BookIcon";
import CalendarIcon from "@/components/ui/icons/CalendarIcon";
import DownloadIcon from "@/components/ui/icons/DownloadIcon";
import Icon, { ICONS } from "@/components/ui/icons/Icon";
import LocationPinIcon from "@/components/ui/icons/LocationPinIcon";
import MailIcon from "@/components/ui/icons/MailIcon";
import ProfileIcon from "@/components/ui/icons/ProfileIcon";
import SkillsIcon from "@/components/ui/icons/SkillsIcon";
import VerifiedBadgeIcon from "@/components/ui/icons/VerifiedBadgeIcon";
import { CONTACTS } from "@/lib/constants/contacts";
import { HISTORY, SUMMARY, SUMMARY_MAX } from "@/lib/constants/experience";
import { TECH_STACK } from "@/lib/constants/tech-stack";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-12 gap-1.5">
        {/* Profile, About, Tech Stack, Projects */}
        <div className="col-span-12 lg:col-span-8 space-y-1.5">
          {/* Profile and About */}
          <div className="grid grid-cols-12 gap-1.5">
            {/* Profile */}
            <div className="card relative  min-h-85 w-full rounded-3xl bg-emerald-900/90 dark:bg-emerald-600/70 col-span-12 sm:col-span-4">
              {/* Image with overflow-hidden */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <Image
                  src="/profile3.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlay content — not clipped */}
              <div className="absolute bottom-0 left-0 w-full overflow-visible rounded-b-3xl bg-linear-to-t from-black/90 via-black/60 to-transparent p-5 text-white">
                <div className="relative flex items-center gap-2 text-lg font-semibold">
                  <span>Chris Jason A. Oswa</span>
                  <VerifiedBadgeIcon />
                </div>
                <p className="mb-3 text-sm text-gray-200">Software Engineer</p>
                <div className="flex items-center gap-1.5 text-gray-300">
                  <LocationPinIcon size={16} color="#3b82f6" />
                  <span className="text-sm">Cebu, Philippines</span>
                </div>
              </div>
            </div>
            {/* About */}
            <div className="card col-span-12 flex flex-col sm:col-span-8 lg:col-span-8">
              <div className="card-title1 flex items-center gap-2">
                <ProfileIcon size={"0.9em"} />
                <div>About</div>
              </div>
              <div className="mb-2">
                I’m Chris Jason Oswa, a Software Engineer passionate about
                building simple, functional, and user-focused web applications.
                I work across the full stack with Vue, React, Laravel, Django,
                ASP.NET Core, and Spring Boot. I enjoy creating intuitive
                solutions, optimizing systems, and continuously learning to grow
                as a developer.
                <br />
                <br />
                Let&apos;s connect! I&apos;m always open to meaningful tech
                conversations and collaboration opportunities.
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                <Button
                  size="md"
                  variant="solid"
                  onClick={() => {
                      window.open(
                        'https://calendly.com/chrisjasonoswa555/30min',
                        '_blank',
                        'noopener,noreferrer'
                      );
                    }}
                  className="hover:shadow-2xl hover:duration-500 hover:transform hover:transition-all hover:scale-105"
                >
                  <CalendarIcon size={"0.9em"} />
                  Schedule a meeting
                </Button>
              
                <div className="flex flex-wrap gap-2">
                  <Button
                    size="xs"
                    variant="outline"
                    color="secondary"
                    className="border-secondary/15 dark:border-white/15"
                    onClick={() => {
                      window.open(
                        'https://drive.google.com/uc?export=download&id=1dMMGU73pzT2ONHOZuSAVY0AlJ6b7URJt',
                        '_blank',
                        'noopener,noreferrer'
                      );
                    }}
                  >
                    <DownloadIcon size={"0.9em"} />
                    Download Resume
                  </Button>
                  <Button
                    size="xs"
                    variant="outline"
                    color="secondary"
                    className="border-secondary/15 dark:border-white/15"
                    onClick={() => {
                      window.open(
                        'https://mail.google.com/mail/?view=cm&to=chrisjasonoswa555@gmail.com',
                        '_blank',
                        'noopener,noreferrer'
                      );
                    }}
                  >
                    <MailIcon size={"0.9em"} />
                    Send Email
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="card">
            <div className="card-title1 flex items-center gap-2">
              <SkillsIcon size={"0.9em"} />
              <div>Tech Stack</div>
              <Link href="/tech-stack" className="flex gap-1 items-center ml-auto text-sm font-normal hover:opacity-50">
                View All<ArrowRightIcon size={'0.9em'}/>
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              {TECH_STACK.slice(0, 3).map(({title, values}) => {
                return (
                  <div
                    key={title}
                    className="text-base font-medium"
                  >
                    <div>{title}</div>
                    <div className="flex flex-wrap gap-2">
                        {values.map((item) => {
                        return (
                          <div key={item} className="text-xs font-normal inline-flex rounded-lg py-1 px-3 border border-secondary/20 dark:border-white/50">
                            { item } 
                          </div>
                        )
                      })}
                    </div>

                  </div>
                )
              })}
            </div>
          </div>

          {/* Recent Projects */}
          <div className="card">
            <div className="card-title1 flex items-center gap-2">
              <Icon name="folder" size={"0.9em"} />
              <div>Recent Projects</div>
              <Link
                href="/projects"
                className="flex gap-1 items-center ml-auto text-sm font-normal hover:opacity-50"
              >
                View All
                <ArrowRightIcon size={"0.9em"} />
              </Link>
            </div>

            {/* Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {HISTORY.flatMap((job) => job.projects || []).slice(0, 4).map((project) => (
                <div
                  key={project.title}
                  className="
                    flex flex-col border border-neutral-300 dark:border-neutral-700 rounded-xl p-4
                    hover:shadow-2xl hover:duration-500 hover:transform hover:transition-all hover:scale-105
                  "
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-medium text-foreground text-base">{project.title}</div>
                    {project.url && (
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm bg-primary/70 text-white p-1 rounded-full hover:underline flex items-center gap-1"
                      >
                        <Icon name="link" size="0.9em" />
                      </Link>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {project.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="card">
            <div className="card-title1 flex items-center gap-2">
              <MailIcon size={"0.9em"} />
              <div>Contact</div>
            </div>

            {/* Responsive grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {CONTACTS.map(({title, url, value, icon}) =>
                <div 
                  key={title}
                  className="flex flex-col
                    border border-neutral-300 dark:border-neutral-700 rounded-xl p-2
                    hover:shadow-2xl hover:duration-500 hover:transform hover:transition-all hover:scale-105
                  "
                >
                  <div className="flex items-center justify-center gap-2">
                    <Icon name={icon as keyof typeof ICONS} size="1.2em" />
                    <div className="font-medium text-sm">{ title }</div>
                    {url &&
                      <Link
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm bg-primary/70 text-white p-1 rounded-full hover:underline flex items-center gap-1"
                      >
                        <Icon name="arrowLink" size="0.9em" />
                      </Link>
                    }
                  </div>
                  <div className="text-xs opacity-55 text-center wrap-break-word"> { value ?? url}</div>
                </div>
              )}
    

            </div>
          </div>


        </div>
        {/* Experience */}
        <div className="col-span-12 lg:col-span-4">
          <div className="card">
            <div className="card-title1 flex items-center gap-2">
              <BookIcon size={"0.8em"} />
              <div>Experience</div>
            </div>
            {/* Summary */}
            <div className="space-y-4 mb-12">
              {SUMMARY.map(({ title, label, value, icon }) => (
                <div key={title} className="space-y-1.5">
                  {/* logo, title, label */}
                  <div className="flex items-center gap-2 text-white">
                    <div className="bg-emerald-900 dark:bg-emerald-50/20 inline-flex p-2 aspect-square rounded-full">
                      <Icon name={icon as keyof typeof ICONS} size={"1.2em"}/>
                    </div>
                    <div className="text-secondary dark:text-white">{title}</div>
                    <div className="ml-auto text-secondary dark:text-white">{label}</div>
                  </div>

                  {/* progress bar */}
                  <div className="w-full h-2 bg-secondary/20 dark:bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-emerald-300 to-emerald-600 transition-all duration-500"
                      style={{ width: `${(value / SUMMARY_MAX) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div className="flex flex-col">
              <div className="relative flex flex-col items-center">
                {/* Layer 3 (bottom/widest) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[calc(100%-16px)] rounded-2xl bg-white dark:bg-emerald-50" />
                {/* Layer 2 (middle) */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90%] h-[calc(100%-16px)] rounded-2xl bg-neutral-500" />
                {/* Layer 1 (top/main content) */}
                <div className="relative w-full flex justify-center mt-8 z-10">
                  <div className="w-full">
                    <div className="rounded-2xl bg-secondary dark:bg-emerald-950 p-6">
                      <div className="text-xl text-white font-medium mb-6">Career History</div>
                      <div className="w-full max-w-xl mx-auto">
                        {HISTORY.map((item, index) => (
                          <div key={index} className="@container relative flex gap-4 pb-6 last:pb-0">
                            {/* Timeline line + dot */}
                            <div className="relative flex flex-col items-center">
                              <div
                                className={`w-3 h-3 rounded-full border-2 border-gray-600 z-10 transition-colors ${
                                  index === 0
                                    ? 'bg-emerald-300'
                                    : 'bg-secondary hover:bg-emerald-300 cursor-pointer'
                                }`}
                              />
                              {index !== HISTORY.length - 1 && (
                                <div className="absolute top-3 w-0.5 bg-gray-600" style={{ height: 'calc(100% + 2rem)' }} />
                              )}
                            </div>

                            {/* Job info */}
                            <div className="w-full grid grid-cols-1 @md:grid-cols-2 gap-2">
                              <div className="">
                                <h3 className="text-base font-medium text-white">{item.jobTitle}</h3>
                                <p className="text-gray-400 text-sm">{item.company}</p>
                              </div>

                              <div className="flex items-center @md:justify-end ">
                                <span className="px-3 py-1 border border-white rounded-full text-xs text-white">
                                  {item.date}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
