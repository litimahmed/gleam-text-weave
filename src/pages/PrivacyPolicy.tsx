import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy & Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-GB')}
            </p>
            <p className="text-muted-foreground mb-12">
              This Privacy Policy is established in accordance with Algerian Law No. 18-07 on the 
              protection of individuals with regard to the processing of personal data and the 
              regulations of the National Authority for the Protection of Personal Data (ANPDP).
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Data Controller</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Toorrii, registered in Algeria, acts as the data controller for all personal information 
                  collected through our queue management and appointment scheduling platform. We are 
                  committed to protecting your privacy in compliance with Algerian legislation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Legal Basis for Processing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We process your personal data based on the following legal grounds as defined by 
                  Algerian Law No. 18-07:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Your explicit consent for specific processing purposes</li>
                  <li>Contractual necessity to provide our services</li>
                  <li>Compliance with legal obligations under Algerian law</li>
                  <li>Legitimate interests that do not override your fundamental rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Data Collection and Use</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect and process only the necessary information required to provide our services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Identity information (name, surname, date of birth)</li>
                  <li>Contact details (email address, phone number)</li>
                  <li>Appointment and queue management data</li>
                  <li>Technical data for platform optimization</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Your data is used exclusively for service delivery, operational purposes, and 
                  improvement of our platform's functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Data Security and Storage</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement robust technical and organizational security measures in accordance with 
                  international standards and Algerian requirements. All personal data is encrypted both 
                  in transit and at rest. Our systems undergo regular security audits and monitoring to 
                  prevent unauthorized access, alteration, or disclosure. Data is stored on secure servers 
                  with strict access controls and backup procedures.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Your Rights Under Algerian Law</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In accordance with Law No. 18-07, you have the following rights:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Right of access to your personal data</li>
                  <li>Right to rectification of inaccurate or incomplete data</li>
                  <li>Right to erasure under specific conditions</li>
                  <li>Right to restriction of processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                  <li>Right to withdraw consent at any time</li>
                  <li>Right to lodge a complaint with the ANPDP</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal data only for as long as necessary to fulfill the purposes for 
                  which it was collected, or as required by Algerian law. Appointment and queue data are 
                  retained for operational purposes and legal compliance. You may request deletion of your 
                  data at any time, subject to legal retention requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Third-Party Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or transfer your personal information to third parties without 
                  your explicit consent, except as required by Algerian law or to provide our services. 
                  Any data shared with service providers is governed by strict confidentiality agreements 
                  and complies with Algerian data protection requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If personal data is transferred outside Algeria, we ensure adequate protection measures 
                  are in place as required by Algerian law, including appropriate contractual safeguards 
                  and compliance with ANPDP regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Cookies and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our platform uses essential cookies for functionality and performance optimization. We 
                  obtain your consent before using non-essential cookies. You can manage cookie preferences 
                  through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Updates to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy periodically to reflect changes in our practices or 
                  legal requirements. We will notify you of any material changes through our platform or 
                  via email.
                </p>
              </section>

              <section className="pt-8 border-t border-border">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For any questions, concerns, or to exercise your rights under this Privacy Policy, 
                  please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: privacy@toorrii.com</p>
                  <p>Phone: +213 (0) XX XX XX XX</p>
                  <p>Address: [Company Address], Algeria</p>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You may also contact the National Authority for the Protection of Personal Data (ANPDP) 
                  if you have concerns about how we handle your personal information.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
