
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false,
  });
  
  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});
  const [showErrors, setShowErrors] = useState(false);
  
  const isFormValid =
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.subject.trim() !== '' &&
    formData.message.trim() !== '' &&
    formData.privacy;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    let fieldValue: string | boolean = value;
    if (type === 'checkbox') {
      fieldValue = (e.target as HTMLInputElement).checked;
    }
    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
    
    // Clear errors when user starts typing
    if (showErrors) {
      setShowErrors(false);
      setFieldErrors({});
    }
  };

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (formData.name.trim() === '') {
      errors.name = 'Name ist erforderlich';
    }
    
    if (formData.email.trim() === '') {
      errors.email = 'E-Mail ist erforderlich';
    }
    
    if (formData.subject.trim() === '') {
      errors.subject = 'Betreff ist erforderlich';
    }
    
    if (formData.message.trim() === '') {
      errors.message = 'Nachricht ist erforderlich';
    }
    
    if (!formData.privacy) {
      errors.privacy = 'Datenschutzerklärung muss akzeptiert werden';
    }
    
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setShowErrors(true);
      return;
    }
    
    // If validation passes, submit the form
    const form = e.target as HTMLFormElement;
    form.submit();
  };
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

  const formSubjects = [
    { value: "", label: "Bitte wählen Sie einen Betreff" },
    { value: "membership", label: "Mitgliedschaft" },
    { value: "training", label: "Training / Schnuppertraining" },
    { value: "teams", label: "Mannschaften" },
    { value: "events", label: "Veranstaltungen" },
    { value: "other", label: "Sonstiges" }
  ];

  // Formspree endpoint (replace with your own if needed)
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyzpgepd';
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Contact Information */}
              <div>
                <div className="text-center lg:text-left mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Kontaktinformationen
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    So erreichen Sie uns am besten
                  </p>
                </div>
                
                {/* Contact Methods */}
                <div className="space-y-6 mb-12">
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
                                        className="text-primary hover:text-primary/80 transition-colors font-medium"
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
                    <div className="flex justify-center space-x-4">
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

              {/* Contact Form */}
              <div>
                <div className="text-center lg:text-left mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Nachricht senden
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Schreiben Sie uns direkt - wir antworten schnellstmöglich
                  </p>
                </div>
                
                <Card className="border-t-4 border-primary">
                  <CardContent className="p-8">
                    <form className="space-y-6" action={FORMSPREE_ENDPOINT} method="POST" autoComplete="on" onSubmit={handleSubmit}>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          {showErrors && fieldErrors.name && (
                            <p className="text-red-600 text-sm mb-1">{fieldErrors.name}</p>
                          )}
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground transition-all duration-200"
                            placeholder="Ihr vollständiger Name"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          {showErrors && fieldErrors.email && (
                            <p className="text-red-600 text-sm mb-1">{fieldErrors.email}</p>
                          )}
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            E-Mail *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground transition-all duration-200"
                            placeholder="ihre.email@beispiel.de"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Telefon
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground transition-all duration-200"
                            placeholder="Ihre Telefonnummer"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          {showErrors && fieldErrors.subject && (
                            <p className="text-red-600 text-sm mb-1">{fieldErrors.subject}</p>
                          )}
                          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                            Betreff *
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            required
                            className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground transition-all duration-200"
                            value={formData.subject}
                            onChange={handleInputChange}
                          >
                            {formSubjects.map((subject, index) => (
                              <option key={index} value={subject.value}>
                                {subject.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        {showErrors && fieldErrors.message && (
                          <p className="text-red-600 text-sm mb-1">{fieldErrors.message}</p>
                        )}
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Nachricht *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground transition-all duration-200 resize-none"
                          placeholder="Ihre Nachricht an uns..."
                          value={formData.message}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="privacy"
                          name="privacy"
                          required
                          className="h-4 w-4 text-primary focus:ring-ring border-input rounded mt-1 flex-shrink-0"
                          checked={formData.privacy}
                          onChange={handleInputChange}
                        />
                        <div className="flex-1">
                          <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                            Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                            <a href="/datenschutz" className="text-primary hover:text-primary/80 underline">
                              Datenschutzerklärung
                            </a>{' '}
                            zu. *
                          </label>
                          {showErrors && fieldErrors.privacy && (
                            <p className="text-red-600 text-sm mt-1">{fieldErrors.privacy}</p>
                          )}
                        </div>
                      </div>
                      <input type="hidden" name="_subject" value="Kontaktanfrage über Website" />
                      <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
                      <button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground py-4 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                      >
                        <Send size={20} />
                        Nachricht senden
                      </button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ContactPage;