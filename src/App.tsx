import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BenefitsSection } from './components/BenefitsSection';
import { PromotionalBannerSection } from './components/PromotionalBannerSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { AuthoritySection } from './components/AuthoritySection';
import { ComparisonSection } from './components/ComparisonSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { OfferSection } from './components/OfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { StickyMobileCta } from './components/StickyMobileCta';
import { SalesNotificationToast } from './components/SalesNotificationToast';
import { CheckoutConfigModal } from './components/CheckoutConfigModal';
import { SimulatedCheckoutModal } from './components/SimulatedCheckoutModal';

export default function App() {
  const DEFAULT_CHECKOUT_URL = 'https://pay.hotmart.com/L107052468L';
  const [checkoutUrl, setCheckoutUrl] = useState<string>(DEFAULT_CHECKOUT_URL);
  const [followersCount, setFollowersCount] = useState<string>('+250 mil');
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  useEffect(() => {
    const savedUrl = localStorage.getItem('ddsnoinsta_checkout_url');
    if (savedUrl && !savedUrl.includes('demo-sst')) {
      setCheckoutUrl(savedUrl);
    } else {
      setCheckoutUrl(DEFAULT_CHECKOUT_URL);
      localStorage.setItem('ddsnoinsta_checkout_url', DEFAULT_CHECKOUT_URL);
    }
    const savedFollowers = localStorage.getItem('ddsnoinsta_followers_count');
    if (savedFollowers) {
      setFollowersCount(savedFollowers);
    }
  }, []);

  const handleSaveCheckoutUrl = (newUrl: string) => {
    setCheckoutUrl(newUrl);
    localStorage.setItem('ddsnoinsta_checkout_url', newUrl);
  };

  const handleSaveFollowersCount = (newCount: string) => {
    setFollowersCount(newCount);
    localStorage.setItem('ddsnoinsta_followers_count', newCount);
  };

  const handleCtaClick = () => {
    // If a custom real external checkout link is defined, open it or open the payment modal
    if (checkoutUrl && checkoutUrl.startsWith('http') && !checkoutUrl.includes('demo-sst-2.5gb')) {
      window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
    } else {
      setIsCheckoutModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-emerald-500 selection:text-white antialiased">
      {/* Top Offer Announcement Bar */}
      <AnnouncementBar />

      {/* Navigation Bar */}
      <Navbar
        onCtaClick={handleCtaClick}
        onOpenConfig={() => setIsConfigModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero onCtaClick={handleCtaClick} />

      {/* Benefits Cards Section */}
      <BenefitsSection />

      {/* Promotional Banner & Inspection Context Section */}
      <PromotionalBannerSection onCtaClick={handleCtaClick} />

      {/* "O que você recebe" List + Interactive Drive Explorer */}
      <WhatYouGetSection onCtaClick={handleCtaClick} />

      {/* Official Page Authority Section */}
      <AuthoritySection
        followersCount={followersCount}
        onOpenConfig={() => setIsConfigModalOpen(true)}
      />

      {/* Comparison Section (Sem o Drive vs Com o Drive) */}
      <ComparisonSection onCtaClick={handleCtaClick} />

      {/* Social Proof & Testimonials */}
      <TestimonialsSection />

      {/* Main Green Offer Section (R$ 35,00) */}
      <OfferSection onCtaClick={handleCtaClick} />

      {/* Security & Guarantees */}
      <GuaranteeSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Final Call To Action */}
      <FinalCta onCtaClick={handleCtaClick} />

      {/* Footer */}
      <Footer onOpenConfig={() => setIsConfigModalOpen(true)} />

      {/* Sticky Bottom Bar for Mobile Devices */}
      <StickyMobileCta onCtaClick={handleCtaClick} />

      {/* Sales Toast Notification */}
      <SalesNotificationToast />

      {/* Checkout Config Modal for Site Owner */}
      <CheckoutConfigModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
        checkoutUrl={checkoutUrl}
        onSaveCheckoutUrl={handleSaveCheckoutUrl}
        followersCount={followersCount}
        onSaveFollowersCount={handleSaveFollowersCount}
      />

      {/* Payment / Checkout Modal */}
      <SimulatedCheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        checkoutUrl={checkoutUrl}
        onOpenConfig={() => {
          setIsCheckoutModalOpen(false);
          setIsConfigModalOpen(true);
        }}
      />
    </div>
  );
}
