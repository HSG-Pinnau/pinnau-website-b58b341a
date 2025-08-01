
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const ImpressumPage: React.FC = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    
    <main className="pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-8">
            <img 
              src="/hsg-pinnau.png" 
              alt="HSG Pinnau Logo" 
              className="h-20 w-auto animate-fade-in"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Impressum
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-foreground">
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Stammvereine</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-foreground mb-4">TSV Prisdorf e.V. von 1947</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="mb-2">
                    <strong className="text-foreground">Adresse:</strong><br />
                    Ahrenloher Weg 21<br />
                    25497 Prisdorf
                  </p>
                  <p className="mb-2">
                    <strong className="text-foreground">Telefon:</strong> (04101) 73706
                  </p>
                  <p className="mb-2">
                    <strong className="text-foreground">E-Mail:</strong> info@tsv-prisdorf.de
                  </p>
                  <p>
                    <strong className="text-foreground">Webseite:</strong>{" "}
                    <a 
                      href="http://www.tsv-prisdorf.de" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline"
                    >
                      www.tsv-prisdorf.de
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-foreground mb-4">VfL Pinneberg e.V.</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="mb-2">
                    <strong className="text-foreground">Adresse:</strong><br />
                    Fahltskamp 53<br />
                    25421 Pinneberg
                  </p>
                  <p className="mb-2">
                    <strong className="text-foreground">Telefon:</strong> (04101) 556020
                  </p>
                  <p className="mb-2">
                    <strong className="text-foreground">E-Mail:</strong> info@vfl-pinneberg.de
                  </p>
                  <p>
                    <strong className="text-foreground">Webseite:</strong>{" "}
                    <a 
                      href="http://www.vfl-pinneberg.de" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline"
                    >
                      www.vfl-pinneberg.de
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Verantwortlich für den Inhalt dieser Seiten nach § 6 MDStV
            </h2>
            
            <div className="bg-muted/50 p-6 rounded-lg mb-6 border-l-4 border-primary">
              <p className="font-semibold text-foreground mb-2">Marco Bretz (1. Vorsitzender)</p>
              <p className="text-muted-foreground mb-2">Adresse: Richard-Köhn-Str. 2a, 25421 Pinneberg</p>
              <p className="text-muted-foreground">E-Mail: marco@hsg-pinnau.de</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Wichtiger Hinweis</h2>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
              <p className="text-amber-800 leading-relaxed mb-4">
                Mit Urteil vom 12. Mai 1998 hat das Landgericht Hamburg entschieden, dass man durch die Ausbringung eines Links die Inhalte der gelinkten Seite ggf. mit zu verantworten hat. Dies kann – so das LG – nur dadurch verhindert werden, dass man sich ausdrücklich von diesen Inhalten distanziert. Wir haben auf unserer Homepage Links zu anderen Seiten im Internet gelegt.
              </p>
              <p className="text-amber-800 leading-relaxed">
                Für all diese Links gilt: Wir möchten ausdrücklich betonen, dass wir keinerlei Einfluss auf die Gestaltung und die Inhalte der gelinkten Seiten haben. Deshalb distanzieren wir uns hiermit ausdrücklich von allen Inhalten aller gelinkten Seiten auf dieser Homepage. Diese Erklärung gilt für alle auf unserer Homepage ausgebrachten Links und für alle Inhalte der Seiten, zu denen Banner führen.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>

    <Footer />
  </div>
);

export default ImpressumPage;
