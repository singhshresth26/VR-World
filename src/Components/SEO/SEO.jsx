import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogType = "website",
  jsonLd,
}) => {
  const location = useLocation();
  const currentUrl = `https://vrworld.com${location.pathname}`;

  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // 2. Helper to set or update meta tag
    const updateMetaTag = (selector, attribute, value) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        const attrKey = selector.includes("name=")
          ? "name"
          : selector.includes("property=")
          ? "property"
          : null;
        if (attrKey) {
          const match = selector.match(/["'](.*?)["']/);
          if (match) element.setAttribute(attrKey, match[1]);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // 3. Update description & keywords
    if (description) {
      updateMetaTag('meta[name="description"]', "content", description);
      updateMetaTag('meta[property="og:description"]', "content", description);
      updateMetaTag('meta[name="twitter:description"]', "content", description);
    }

    if (keywords) {
      updateMetaTag('meta[name="keywords"]', "content", keywords);
    }

    // 4. Update OG & Twitter Title
    if (title) {
      updateMetaTag('meta[property="og:title"]', "content", title);
      updateMetaTag('meta[name="twitter:title"]', "content", title);
    }

    // 5. Update URLs
    const finalUrl = canonical || currentUrl;
    updateMetaTag('meta[property="og:url"]', "content", finalUrl);
    updateMetaTag('meta[name="twitter:url"]', "content", finalUrl);
    updateMetaTag('meta[property="og:type"]', "content", ogType);

    // 6. Update Canonical Link tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", finalUrl);

    // 7. Inject Page-specific Structured Data (JSON-LD) if provided
    let scriptTag = document.getElementById("page-jsonld");
    if (jsonLd) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = "page-jsonld";
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(jsonLd);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, keywords, canonical, ogType, jsonLd, currentUrl]);

  return null;
};

export default SEO;
