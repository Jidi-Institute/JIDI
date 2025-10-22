import React from "react";

export interface CaseStudySplitProps {
  logoSrc?: string;
  logoAlt?: string;
  title: string;
  blurb: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc: string;
  imageAlt: string;
}

export default function CaseStudySplit({
  logoSrc,
  logoAlt = "",
  title,
  blurb,
  ctaLabel = "Read Case",
  ctaHref = "#",
  imageSrc,
  imageAlt,
}: CaseStudySplitProps) {
  return (
    <section
      aria-labelledby="case-study-title"
      className="w-full border-t border-black/10 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 xl:gap-16">
          {/* Left: Image */}
          <div className="order-1 lg:order-none">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5">
              {/* Use explicit width/height to avoid CLS; adjust to your asset */}
              <img
                src={imageSrc}
                alt={imageAlt}
                width={1280}
                height={720}
                className="h-full w-full object-cover lg:aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="max-w-2xl">
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={logoAlt}
                className="mb-6 h-8 w-auto opacity-90"
                loading="lazy"
              />
            ) : null}

            <h2
              id="case-study-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-neutral-900"
            >
              {title}
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-neutral-600">{blurb}</p>

            <a
              href={ctaHref}
              className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-neutral-900 underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
            >
              {ctaLabel}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
