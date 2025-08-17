import { useState } from "react";
import { Home } from "lucide-react";

interface PropertyImageProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Renders a property/architecture image, degrading gracefully to a styled
 * placeholder (rather than a broken-image icon) if the source fails to load.
 */
export default function PropertyImage({ src, alt, className = "" }: PropertyImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-stone to-stone-dark ${className}`}
        role="img"
        aria-label={alt}
      >
        <Home className="h-10 w-10 text-ink-soft/40" strokeWidth={1.25} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
