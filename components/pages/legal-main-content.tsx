import React from 'react';
import { ContentSection } from '@/components/pages/legal-content-section';
import { Paragraph } from '@/components/pages/legal-paragraph';

export const MainContent: React.FC = () => {
  return (
    <div className="ml-72 p-12 pb-20 mt-12">
      <div className="max-w-4xl mx-auto">

        <ContentSection number="1" title="Acceptance of terms">
          <Paragraph>
            By accessing or using the HyperKit website, dashboard, SDKs, APIs, documentation, developer tools, or any related services (collectively, the “Service”), you agree to be bound by these Terms of Use (“Terms”) and all applicable laws and regulations. If you do not agree to these Terms, you must not access or use the Service.
HyperKit may update these Terms from time to time. If changes are material, HyperKit will use reasonable efforts to notify you (for example, by email, in-app notice, or updating the “Last updated” date). Your continued use of the Service after the effective date of any changes constitutes your acceptance of the updated Terms.
          </Paragraph>
        </ContentSection>

        <ContentSection number="2" title="Eligibility and account registration">
          <Paragraph className="mb-6">
            To use our Service, you must represent and warrant that you are at least 18 
            years of age. You agree to provide accurate, current, and complete information 
            during the registration process and to update such information to keep it 
            accurate, current, and complete.
          </Paragraph>
          <Paragraph>
            You are responsible for safeguarding the password that you use to access the 
            Service and for any activities or actions under your password.
          </Paragraph>
        </ContentSection>
      </div>
    </div>
  );
};