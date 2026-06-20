import Link from "next/link"

import { Container } from "@/components/layout/container"
import { type Dictionary } from "@/i18n/dictionaries"

type LegalPageContent = Dictionary["legalPages"][keyof Dictionary["legalPages"]]

type LegalPageProps = {
  content: LegalPageContent
  backHref: string
  backLabel: string
}

export function LegalPage({ content, backHref, backLabel }: LegalPageProps) {
  return (
    <article className="bg-waratha-bg py-16 sm:py-20 md:py-24">
      <Container size="narrow">
        <Link
          href={backHref}
          className="mb-8 inline-flex text-sm font-medium text-waratha-primary transition-colors hover:text-waratha-primary/80"
        >
          ← {backLabel}
        </Link>

        <header className="mb-10 space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-waratha-text sm:text-4xl">
            {content.title}
          </h1>
          <p className="text-sm text-waratha-muted">{content.lastUpdated}</p>
          <p className="text-lg leading-relaxed text-waratha-muted">
            {content.intro}
          </p>
        </header>

        <div className="space-y-8">
          {content.sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-xl font-semibold text-waratha-text">
                {section.title}
              </h2>
              <p className="leading-relaxed text-waratha-muted">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </Container>
    </article>
  )
}
