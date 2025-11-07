import ArrowRightIcon from "./ArrowRightIcon";
import ArrowLinkIcon from "./ArrowLinkIcon";
import BookIcon from "./BookIcon";
import BriefcaseIcon from "./BriefcaseIcon";
import BuildingIcon from "./BuildingIcon";
import CalendarIcon from "./CalendarIcon";
import ClockIcon from "./ClockIcon";
import CodeBracketIcon from "./CodeBracketIcon";
import DownloadIcon from "./DownloadIcon";
import FolderIcon from "./FolderIcon";
import GithubIcon from "./GithubIcon";
import GmailIcon from "./GmailIcon";
import LinkedInIcon from "./LinkedInIcon";
import LinkIcon from "./LinkIcon";
import LocationPinIcon from "./LocationPinIcon";
import MailIcon from "./MailIcon";
import MoonIcon from "./MoonIcon";
import PhoneIcon from "./PhoneIcon";
import ProfileIcon from "./ProfileIcon";
import SkillsIcon from "./SkillsIcon";
import SunIcon from "./SunIcon";
import VerifiedBadgeIcon from "./VerifiedBadgeIcon";

export const ICONS = {
  arrowRight: ArrowRightIcon,
  arrowLink: ArrowLinkIcon,
  book: BookIcon,
  briefcase: BriefcaseIcon,
  building: BuildingIcon,
  calendar: CalendarIcon,
  clock: ClockIcon,
  codeBracketIcon: CodeBracketIcon,
  download: DownloadIcon,
  folder: FolderIcon,
  github: GithubIcon,
  gmail: GmailIcon,
  link: LinkIcon,
  linkedin: LinkedInIcon,
  locationPin: LocationPinIcon,
  mail: MailIcon,
  moon: MoonIcon,
  phone: PhoneIcon,
  profile: ProfileIcon,
  skills: SkillsIcon,
  sun: SunIcon,
  verifiedBadge: VerifiedBadgeIcon,
};

export default function Icon({
  name,
  size = 24,
  color = "currentColor",
}: {
  name: keyof typeof ICONS;
  size?: number | string;
  color?: string;
}) {
  const SelectedIcon = ICONS[name];
  if (!SelectedIcon) return null; // optional: show fallback
  return <SelectedIcon size={size} color={color} />;
}
