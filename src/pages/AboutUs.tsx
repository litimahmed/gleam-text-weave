import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Target, Eye, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Toorrii
            </h1>
            
            <div className="space-y-12">
              <section>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Toorrii is Algeria's leading queue management and appointment scheduling platform, 
                  dedicated to transforming how public services, healthcare facilities, and businesses 
                  serve their communities. We combine innovative technology with deep understanding of 
                  local needs to create efficient, accessible solutions.
                </p>
              </section>

              <section>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To eliminate waiting times and improve service delivery across Algeria by providing 
                      intelligent, user-friendly queue management solutions. We believe everyone deserves 
                      efficient access to essential services without the frustration of long queues and 
                      uncertain wait times.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To become the cornerstone of digital transformation in service delivery across North 
                      Africa, setting new standards for efficiency, accessibility, and customer satisfaction. 
                      We envision a future where waiting in line is a thing of the past, and every interaction 
                      with services is seamless and dignified.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">Our Values</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Innovation</h3>
                        <p className="leading-relaxed">
                          We continuously evolve our technology to meet the changing needs of Algerian 
                          institutions and their customers, staying at the forefront of digital service delivery.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Accessibility</h3>
                        <p className="leading-relaxed">
                          Our platform is designed to be intuitive and accessible to all users, regardless 
                          of their technical expertise, ensuring no one is left behind in the digital transition.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Reliability</h3>
                        <p className="leading-relaxed">
                          We build robust, secure systems that organizations can depend on for their daily 
                          operations, maintaining the highest standards of uptime and data protection.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Local Expertise</h3>
                        <p className="leading-relaxed">
                          Understanding the unique challenges and requirements of the Algerian market, we 
                          tailor our solutions to meet local needs while maintaining global best practices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">Who We Serve</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Toorrii partners with a diverse range of institutions across Algeria to modernize 
                      their service delivery:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Government agencies and public services</li>
                      <li>Healthcare facilities and medical centers</li>
                      <li>Banks and financial institutions</li>
                      <li>Telecommunications providers</li>
                      <li>Educational institutions</li>
                      <li>Retail and commercial establishments</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="pt-8 border-t border-border">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Toorrii?</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-foreground">Proven Track Record:</span> Trusted by 
                    leading Algerian institutions including major banks, telecommunications companies, and 
                    public services.
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-foreground">Local Support:</span> Dedicated customer 
                    support team based in Algeria, understanding your language, culture, and business needs.
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-foreground">Compliance:</span> Full compliance with 
                    Algerian regulations including Law No. 18-07 on data protection and ANPDP requirements.
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-foreground">Scalability:</span> Solutions that grow 
                    with your organization, from single locations to nationwide networks.
                  </p>
                </div>
              </section>

              <section className="pt-8 border-t border-border">
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ready to transform your service delivery? Contact us to learn more about how Toorrii 
                  can help your organization.
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: contact@toorrii.com</p>
                  <p>Phone: +213 (0) XX XX XX XX</p>
                  <p>Address: [Company Address], Algeria</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
