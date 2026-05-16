import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppWidget } from "@/components/site/WhatsAppWidget";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-silver">Error 404</p>
        <h1 className="mt-6 font-display text-6xl font-bold text-foreground md:text-8xl">Not Found</h1>
        <p className="mt-4 text-sm font-light text-silver">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Silverline Events & Exhibitions — Global Booth Design & Fabrication" },
      {
        name: "description",
        content:
          "Mumbai-based exhibition company delivering end-to-end booth design, fabrication, and on-site execution for global trade shows across India, USA, and Europe.",
      },
      { name: "author", content: "Silverline Events & Exhibitions" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Silverline Events & Exhibitions — Global Booth Design & Fabrication" },
      { property: "og:description", content: "Silverline Global Stage is a premium website for exhibition booth design and fabrication." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Silverline Events & Exhibitions — Global Booth Design & Fabrication" },
      { name: "description", content: "Silverline Global Stage is a premium website for exhibition booth design and fabrication." },
      { name: "twitter:description", content: "Silverline Global Stage is a premium website for exhibition booth design and fabrication." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/03420bed-5366-4318-bb8f-e5040dd1b16b/id-preview-5c4f067e--2b388e5c-e161-487d-9176-023873425319.lovable.app-1777150337051.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/03420bed-5366-4318-bb8f-e5040dd1b16b/id-preview-5c4f067e--2b388e5c-e161-487d-9176-023873425319.lovable.app-1777150337051.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
