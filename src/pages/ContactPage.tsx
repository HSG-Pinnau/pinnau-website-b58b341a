
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "E-Mail",
      items: [
        { label: "Vorstand", value: "vorstand@hsg-pinnau.de", link: "mailto:vorstand@hsg-pinnau.de" }
      ]
    },
    {
      icon: MapPin,
      title: "Adresse",
      items: [
        {
          label: "Haupthalle",
          value: "Fahltskamp 36, 25421 Pinneberg",
          multiline: true
        }
      ]
    }
  ];

  const socialMedia = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/hsgpinnau", color: "primary" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/hsgpinnau", color: "accent" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-[50vh] bg-gradient-to-br from-accent/5 via-accent/10 to-primary/10 flex items-center relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <img
                  src="/hsg-pinnau.png"
                  alt="HSG Pinnau Logo"
                  className="h-24 w-auto animate-fade-in"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
                <span className="text-primary">Kontakt</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
                Nehmen Sie Kontakt mit uns auf - wir freuen uns auf Ihre Nachricht
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Kontaktinformationen
              </h2>
              <p className="text-xl text-muted-foreground">
                So erreichen Sie uns am besten
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 border-t-4 border-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-3">{method.title}</h3>
                          <div className="space-y-2">
                            {method.items.map((item, itemIndex) => (
                              <div key={itemIndex}>
                                <p className="text-sm text-muted-foreground mb-1">{item.label}:</p>
                                {item.link ? (
                                  <a
                                    href={item.link}
                                    className="text-primary hover:text-primary/80 transition-colors font-medium break-all"
                                  >
                                    {item.value}
                                  </a>
                                ) : item.multiline ? (
                                  <div className="text-muted-foreground whitespace-pre-line text-sm">
                                    {item.value}
                                  </div>
                                ) : (
                                  <p className="text-muted-foreground text-sm">{item.value}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Media */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-t-4 border-accent">
              <CardHeader>
                <CardTitle className="text-primary text-center">Folgen Sie uns</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap justify-center gap-4">
                  {socialMedia.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${social.color === 'primary' ? 'bg-primary hover:bg-primary/90' : 'bg-accent hover:bg-accent/90'} text-white p-4 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg flex items-center gap-2`}
                      >
                        <IconComponent size={20} />
                        <span className="font-medium">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ContactPage;
