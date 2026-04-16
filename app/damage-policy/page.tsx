import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'Damage & Shortage Policy - Khyathi Logistics Solutions Private Limited',
  description: 'Policy for handling damage and shortage claims at Khyathi Logistics Solutions Private Limited.',
}

export default function DamagePolicyPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/15 via-accent/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Legal</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Damage & Shortage Policy
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
            <h2>1. Policy Overview</h2>
            <p>
              At Khyathi Logistics Solutions Private Limited (CIN: U52290AP2025PTC118981), we take every precaution to ensure safe transportation 
              of your cargo. This policy outlines procedures for handling damage and shortage claims.
            </p>

            <h2>2. Inspection at Delivery</h2>
            <p>
              Customers must inspect shipments immediately upon delivery. Any visible damage or shortage 
              must be noted on the delivery receipt before signing. Failure to note damage at delivery 
              may affect claim eligibility.
            </p>

            <h2>3. Reporting Damage or Shortage</h2>
            <p>
              Claims must be reported within the following timeframes:
            </p>
            <ul>
              <li>Visible damage: Within 24 hours of delivery</li>
              <li>Concealed damage: Within 3 days of delivery</li>
              <li>Shortage: Within 24 hours of delivery</li>
            </ul>
            <p>
              Claims should be reported to: info.khyathilogistics@gmail.com or call 9701557906
            </p>

            <h2>4. Required Documentation</h2>
            <p>
              To process a claim, please provide:
            </p>
            <ul>
              <li>Original shipping documents and invoice</li>
              <li>Delivery receipt with damage/shortage noted</li>
              <li>Photographs of damaged goods and packaging</li>
              <li>Detailed description of damage or shortage</li>
              <li>Estimated value of loss or damage</li>
              <li>Any other relevant documentation</li>
            </ul>

            <h2>5. Claim Investigation</h2>
            <p>
              Upon receiving a claim, we will:
            </p>
            <ul>
              <li>Acknowledge receipt within 24 hours</li>
              <li>Conduct a thorough investigation</li>
              <li>May request additional information or inspection</li>
              <li>Provide updates on claim status</li>
              <li>Resolve claims within 30 days when possible</li>
            </ul>

            <h2>6. Liability Limits</h2>
            <p>
              Our liability is limited to the lesser of:
            </p>
            <ul>
              <li>Actual value of goods (with proof of value)</li>
              <li>Declared value at time of booking</li>
              <li>Standard industry limits as per applicable law</li>
            </ul>
            <p>
              For high-value shipments, we strongly recommend purchasing additional cargo insurance.
            </p>

            <h2>7. Exclusions</h2>
            <p>
              We are not liable for damage or loss resulting from:
            </p>
            <ul>
              <li>Improper or inadequate packaging by shipper</li>
              <li>Inherent nature of goods (perishables, fragile items without proper packaging)</li>
              <li>Acts of God, natural disasters, or force majeure events</li>
              <li>Delays caused by circumstances beyond our control</li>
              <li>Undeclared or misdeclared cargo</li>
              <li>Prohibited or restricted items</li>
            </ul>

            <h2>8. Packaging Requirements</h2>
            <p>
              To minimize risk of damage:
            </p>
            <ul>
              <li>Use appropriate packaging materials for cargo type</li>
              <li>Ensure adequate cushioning and protection</li>
              <li>Properly seal all packages</li>
              <li>Mark fragile items clearly</li>
              <li>Follow our packaging guidelines for specific cargo types</li>
            </ul>

            <h2>9. Insurance Options</h2>
            <p>
              We offer cargo insurance options for additional protection. Insurance coverage provides:
            </p>
            <ul>
              <li>Higher liability limits</li>
              <li>Broader coverage for various risks</li>
              <li>Faster claim settlement</li>
              <li>Peace of mind for valuable shipments</li>
            </ul>
            <p>
              Contact us for insurance quotes and coverage details.
            </p>

            <h2>10. Dispute Resolution</h2>
            <p>
              If you disagree with our claim decision, you may:
            </p>
            <ul>
              <li>Request a review with additional documentation</li>
              <li>Escalate to senior management</li>
              <li>Pursue arbitration as per our Terms & Conditions</li>
            </ul>

            <h2>11. Prevention Measures</h2>
            <p>
              We continuously work to prevent damage and shortage through:
            </p>
            <ul>
              <li>Regular training of handling staff</li>
              <li>Quality checks at loading and unloading</li>
              <li>Use of appropriate vehicles and equipment</li>
              <li>Real-time monitoring and tracking</li>
              <li>Partnerships with verified carriers</li>
            </ul>

            <h2>Contact for Claims</h2>
            <p>
              For damage or shortage claims, contact:<br />
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
