import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Privacy Policy - Khyathi Logistics Solutions Private Limited',
  description: 'Privacy policy and data protection practices at Khyathi Logistics Solutions Private Limited.',
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/15 via-accent/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Legal</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-slate">
            <h2>1. Information We Collect</h2>
            <p>
              Khyathi Logistics Solutions Private Limited (CIN: U52290AP2025PTC118981) collects information necessary to provide our logistics 
              services, including:
            </p>
            <ul>
              <li>Personal information (name, email, phone number, address)</li>
              <li>Business information (company name, GST details)</li>
              <li>Shipment details (origin, destination, cargo information)</li>
              <li>Payment information</li>
              <li>Location data for tracking purposes</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use collected information to:
            </p>
            <ul>
              <li>Provide and manage logistics services</li>
              <li>Process bookings and payments</li>
              <li>Communicate service updates and notifications</li>
              <li>Improve our services and customer experience</li>
              <li>Comply with legal obligations</li>
              <li>Provide real-time tracking and updates</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We may share your information with:
            </p>
            <ul>
              <li>Transport providers and partners necessary to fulfill services</li>
              <li>Payment processors for transaction processing</li>
              <li>Legal authorities when required by law</li>
              <li>Service providers who assist in our operations</li>
            </ul>
            <p>
              We do not sell your personal information to third parties.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, 
              no method of transmission over the internet is 100% secure.
            </p>

            <h2>5. Mobile Applications</h2>
            <p>
              Our Android and iOS applications may collect location data to provide real-time tracking 
              services. You can control location permissions through your device settings.
            </p>

            <h2>6. Cookies and Tracking</h2>
            <p>
              Our website uses cookies to enhance user experience and analyze site usage. You can 
              control cookie preferences through your browser settings.
            </p>

            <h2>7. Data Retention</h2>
            <p>
              We retain your information for as long as necessary to provide services and comply with 
              legal obligations. Shipment records are typically retained for 7 years as per regulatory 
              requirements.
            </p>

            <h2>8. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>

            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 18 years of age. We do not knowingly 
              collect personal information from children.
            </p>

            <h2>10. Changes to Privacy Policy</h2>
            <p>
              We may update this privacy policy periodically. We will notify you of significant changes 
              through our website or email.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              For privacy-related questions or to exercise your rights, contact us at:<br />
              Email: info.khyathilogistics@gmail.com<br />
              Phone: 9701557906 / 9491811144<br />
              Address: Flat No: 402, 5th Floor, Akshara Apartments, Srikalahasti Road, 
              Tirupati District, Andhra Pradesh - 517541
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
