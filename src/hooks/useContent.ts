import { useState, useEffect } from 'react';

export interface Project {
  title: string;
  category: string;
  thumbnail: string;
  video_url: string;
  description: string;
  tags: string[];
}

export interface AboutContent {
  headline1: string;
  headline2: string;
  bio_paragraph1: string;
  bio_paragraph2: string;
  years_experience: number;
  photo_url: string;
}

export interface SiteContent {
  about: AboutContent;
  projects: Project[];
}

const defaultContent: SiteContent = {
  about: {
    headline1: "STRATEGIC EDITING.",
    headline2: "MARKETING EDGE.",
    bio_paragraph1: "I am Juan Gervasoni, a Senior Video Editor with over 12 years of experience transforming raw footage into high-impact visual stories.",
    bio_paragraph2: "I bridge the gap between creative post-production and marketing ROI.",
    years_experience: 12,
    photo_url: "https://picsum.photos/seed/juan-profile-light/800/1000"
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
