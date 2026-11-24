import siteData from "./site.json";

/**
 * Facts, skills, experience and clients copied from the portfolio at kareem-shaban.com.
 * Don't edit site.json by hand; refresh it with `npm run sync:portfolio`.
 */
export interface Fact {
  title: string;
  value: string;
}

export interface Skill {
  name: string;
  description: string;
  /** Proficiency, 0-100. */
  value: number;
}

export interface TimelineEntry {
  title: string;
  organization: string;
  description: string;
  startDate: string;
  endDate: string;
}

export interface Client {
  name: string;
  website?: string;
  logo?: string;
}

export const facts: Fact[] = siteData.facts;
export const skills: Skill[] = siteData.skills;
export const timeline: TimelineEntry[] = siteData.timeline;
export const clients: Client[] = siteData.clients;

/**
 * Social profiles. The portfolio API doesn't expose these (they're hard-coded
 * in the portfolio's own code), so they're maintained here by hand.
 */
export const socialLinks = {
  github: "https://github.com/KareemShaban1",
  linkedin: "https://www.linkedin.com/in/kareem-shaban-%F0%9F%87%B5%F0%9F%87%B8-91411b1b6",
  instagram: "https://www.instagram.com/devarena_8",
  youtube: "https://www.youtube.com/@Dev-Arena-ls",
};
