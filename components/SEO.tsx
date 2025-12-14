import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  robots?: string;
  image?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  robots = 'index, follow',
  image,
  type = 'website'
}) => {
  useEffect(() => {
    // Update Document Title
    document.title = title;

    // Helper function to find or create a meta tag and update its content
    const updateMeta = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Meta Tags
    updateMeta('description', description);
    updateMeta('robots', robots);
    updateMeta('googlebot', robots); // Explicit Googlebot tag
    
    if (keywords && keywords.length > 0) {
      updateMeta('keywords', keywords.join(', '));
    }

    // Determine the effective URL (Canonical > Current Href without hash/query)
    const effectiveUrl = canonicalUrl || window.location.href.split('#')[0].split('?')[0];

    // Canonical Link
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', effectiveUrl);

    // Open Graph
    updateMeta('og:type', type, 'property');
    updateMeta('og:title', title, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:url', effectiveUrl, 'property');
    if (image) {
      updateMeta('og:image', image, 'property');
    }

    // Twitter
    updateMeta('twitter:card', image ? 'summary_large_image' : 'summary', 'name');
    updateMeta('twitter:title', title, 'name');
    updateMeta('twitter:description', description, 'name');
    if (image) {
      updateMeta('twitter:image', image, 'name');
    }

  }, [title, description, keywords, canonicalUrl, robots, image, type]);

  return null;
};