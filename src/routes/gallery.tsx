import { createFileRoute } from "@tanstack/react-router";
import { Camera } from "lucide-react";
import { PageHeader, Section } from "@/components/site/Page";
import blueprint from "@/assets/blueprint.jpg";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Santosh Yadav Engineering Portfolio" },
      {
        name: "description",
        content:
          "Site photographs, survey field work, drawings and structural models from Santosh Yadav's civil engineering work.",
      },
      { property: "og:title", content: "Gallery | Santosh Yadav" },
      {
        property: "og:description",
        content: "Visual record of site work, surveys, drawings and structural models.",
      },
    ],
  }),
  component: Gallery,
});

const tiles = [
  { title: "Structural framing model", caption: "ETABS analysis model", span: "lg:col-span-2 lg:row-span-2", img: blueprint },
  { title: "Site supervision", caption: "Lolang Construction, Kathmandu", span: "", img: portrait },
  { title: "Contour mapping", caption: "Kaiwara survey, ArcGIS output", span: "", img: null },
  { title: "Total Station setup", caption: "Field survey campaign", span: "lg:col-span-2", img: null },
  { title: "Reinforcement detailing", caption: "Ductile detailing to IS 13920", span: "", img: null },
  { title: "Piezoelectric block casting", caption: "Multi-layer concrete specimen", span: "", img: null },
  { title: "Digital Elevation Model", caption: "Terrain analysis raster", span: "", img: null },
];

function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Field work, drawings and models."
        description="A visual record of surveys, site supervision and technical outputs."
      />

      <Section>
        <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t) => (
            <figure
              key={t.title}
              className={`lift group relative overflow-hidden soft-card ${t.span}`}
            >
              {t.img ? (
                <img
                  src={t.img}
                  alt={t.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="grid h-full w-full place-items-center grid-blueprint bg-muted/40">
                  <Camera className="size-7 text-muted-foreground" />
                </div>
              )}
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 to-transparent p-5">
                <p className="font-semibold">{t.title}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {t.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
