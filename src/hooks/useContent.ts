import { useState, useEffect } from 'react';

export interface Project {
  title: string;
  category: string;
  thumbnail: string;
  video_url: string;
  description: string;
  tags: string[];
}

export interface HeroContent {
  pill_text: string;
  headline1: string;
  headline2: string;
  subheadline: string;
  cta_primary: string;
  cta_secondary: string;
  hero_image: string;
  hero_video_url: string;
  stat_number: number;
  stat_suffix: string;
  stat_label: string;
  trust_bar: string[];
}

export interface AboutContent {
  pill_text: string;
  headline1: string;
  headline2: string;
  bio_paragraph1: string;
  bio_paragraph2: string;
  years_experience: number;
  photo: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServicesContent {
  pill_text: string;
  headline1: string;
  headline2: string;
  subheadline: string;
  tools: string[];
  items: ServiceItem[];
}

export interface ContactContent {
  pill_text: string;
  headline1: string;
  headline2: string;
  subheadline: string;
  email: string;
  instagram_url: string;
  twitter_url: string;
  linkedin_url: string;
  cal_url: string;
}

export interface SiteContent {
  hero: HeroContent;
  about: AboutContent;
  services: ServicesContent;
  contact: ContactContent;
  projects: Project[];
}

const defaultContent: SiteContent = {
  hero: {
    pill_text: "High-Impact Video Editing & Strategy",
    headline1: "VIDEOS THAT",
    headline2: "DRIVE RESULTS.",
    subheadline: "I craft high-performance videos optimized for your specific goals.",
    cta_primary: "Start Strategy Session",
    cta_secondary: "View Case Studies",
    hero_image: "https://picsum.photos/seed/juan-marketing/1920/1080",
    hero_video_url: "",
    stat_number: 250,
    stat_suffix: "M+",
    stat_label: "Views Generated",
    trust_bar: []
  },
  about: {
    pill_text: "About Me",
    headline1: "STRATEGIC EDITING.",
    headline2: "MARKETING EDGE.",
    bio_paragraph1: "",
    bio_paragraph2: "",
    years_experience: 12,
    photo: "https://picsum.photos/seed/juan-profile-light/800/1000"
  },
  services: {
    pill_text: "Capabilities",
    headline1: "HOW I DRIVE",
    headline2: "GROWTH.",
    subheadline: "",
    tools: [],
    items: []
  },
  contact: {
    pill_text: "Let's Scale",
    headline1: "VIDEO",
    headline2: "STRATEGY.",
    subheadline: "",
    email: "hello@juangervasoni.com",
    instagram_url: "#",
    twitter_url: "#",
    linkedin_url: "#",
    cal_url: "https://cal.com/juangervasoni/30min?embed=true"
  },
  projects: []
};

export function useContent() {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/content.json')
      .then(res => res.json())
      .then((data: SiteContent) => {
        setContent(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return { content, loading };
}
