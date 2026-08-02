import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";
import { PageHeader, Section } from "@/components/site/Page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { profile } from "@/lib/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Santosh Yadav | Civil Engineer, Bengaluru" },
      {
        name: "description",
        content:
          "Get in touch with Santosh Yadav for internships, graduate engineer roles and collaboration. Email, phone and LinkedIn.",
      },
      { property: "og:title", content: "Contact | Santosh Yadav" },
      {
        property: "og:description",
        content: "Reach out for internships, graduate roles or project collaboration.",
      },
    ],
  }),
  component: Contact,
});

const details = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", value: "santosh-yadav-k", href: profile.linkedin },
  { icon: MapPin, label: "Location", value: profile.location, href: null },
];

function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's discuss your next project."
        description="Open to internships, graduate engineer positions, estimation support and research collaboration."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            {details.map((d) => (
              <div key={d.label} className="lift rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <d.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="mt-1 block truncate font-medium hover:text-primary"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium">{d.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSending(true);
              const form = e.currentTarget;
              setTimeout(() => {
                setSending(false);
                form.reset();
                toast.success("Message ready", {
                  description: `Thanks for reaching out — please also email ${profile.email}.`,
                });
              }, 600);
            }}
            className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)] sm:p-10"
          >
            <div className="absolute inset-0 grid-blueprint-fine opacity-40" aria-hidden />
            <div className="relative space-y-5">
              <h2 className="text-2xl font-bold">Send a message</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" required placeholder="Internship / Project enquiry" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" required rows={6} placeholder="Tell me about the role or project..." />
              </div>
              <Button type="submit" size="lg" disabled={sending} className="w-full sm:w-auto">
                <Send /> {sending ? "Sending..." : "Send message"}
              </Button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
