import type { ReactNode } from "react";
import { motion } from "motion/react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      {eyebrow && (
        <span className="text-xs font-semibold tracking-[0.2em] text-laranja-queimado uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 font-display text-3xl font-bold text-balance sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="pattern-adire border-b border-border bg-muted/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-laranja-queimado uppercase">
            {eyebrow}
          </span>
          <h1 className="mt-2 font-display text-4xl font-bold text-balance sm:text-5xl">{title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{description}</p>
          {children && <div className="mt-6">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
