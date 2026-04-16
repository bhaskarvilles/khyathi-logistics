import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Terms & Conditions - Khyathi Logistics Solutions Private Limited',
  description: 'Terms and conditions for using Khyathi Logistics Solutions Private Limited services.',
}

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/15 via-accent/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Legal</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms & Conditions
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
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services of Khyathi Logistics Solutions Private Limited 
              (CIN: U52290AP2025PTC118981, Reg. No: 118981), you accept and agree 
              to be bound by the terms and provisions of this agreement.
            </p>

            <h2>2. Services</h2>
            <p>
              Khyathi Logistics Solutions Private Limited provides logistics and transportation services including but 
              not limited to Part Truck Load (PTL), Full Truck Load (FTL), express delivery, and heavy 
              machinery transport across India.
            </p>

            <h2>3. Booking and Quotations</h2>
            <p>
              All quotations provided are valid for 30 days unless otherwise specified. Bookings are 
              subject to availability and confirmation from our team. Prices may vary based on route, 
              cargo type, and market conditions.
            </p>

            <h2>4. Payment Terms</h2>
            <p>
              Payment terms will be specified in the service agreement. Standard payment terms are 
              net 30 days from invoice date unless otherwise agreed. Late payments may incur additional 
              charges as per our policy.
            </p>

            <h2>5. Liability and Insurance</h2>
            <p>
              While we take utmost care in handling your cargo, Khyathi Logistics Solutions Private Limited's liability 
              is limited as per standard industry practices. We recommend customers obtain appropriate 
              cargo insurance for valuable shipments.
            </p>

            <h2>6. Customer Responsibilities</h2>
            <p>
              Customers are responsible for:
            </p>
            <ul>
              <li>Providing accurate information about cargo weight, dimensions, and nature</li>
              <li>Proper packaging of goods</li>
              <li>Compliance with all applicable laws and regulations</li>
              <li>Providing necessary documentation for transportation</li>
            </ul>

            <h2>7. Prohibited Items</h2>
            <p>
              We do not transport hazardous materials, illegal substances, or items prohibited by law 
              without proper authorization and documentation.
            </p>

            <h2>8. Cancellation Policy</h2>
            <p>
              Cancellations must be made at least 24 hours before scheduled pickup. Cancellations made 
              within 24 hours may incur cancellation charges.
            </p>

            <h2>9. Force Majeure</h2>
            <p>
              Khyathi Logistics Solutions Private Limited shall not be liable for delays or failures in performance 
              resulting from acts beyond our reasonable control, including natural disasters, strikes, 
              or government actions.
            </p>

            <h2>10. Dispute Resolution</h2>
            <p>
              Any disputes arising from these terms shall be resolved through arbitration in accordance 
              with Indian law, with jurisdiction in Tirupati, Andhra Pradesh.
            </p>

            <h2>11. Modifications</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of our services 
              constitutes acceptance of modified terms.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about these terms, please contact us at:<br />
              Email: info.khyathilogistics@gmail.com<br />
              Phone: 9701557906 / 9491811144
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
