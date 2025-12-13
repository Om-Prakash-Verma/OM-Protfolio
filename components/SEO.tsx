import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  robots?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  robots = 'index, follow' 
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

    // Update standard meta tags
    updateMeta('description', description);
    updateMeta('robots', robots);
    
    if (keywords && keywords.length > 0) {
      updateMeta('keywords', keywords.join(', '));
    }

    // Determine the effective URL (Canonical > Current Href without hash)
    const effectiveUrl = canonicalUrl || window.location.href.split('#')[0];

    // Update Open Graph tags
    updateMeta('og:title', title, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:url', effectiveUrl, 'property');

    // Update Twitter tags
    updateMeta('twitter:title', title, 'property');
    updateMeta('twitter:description', description, 'property');

    // Update Canonical Link
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', effectiveUrl);

  }, [title, description, keywords, canonicalUrl, robots]);

  return null;
};