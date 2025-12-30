import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service - Second Brain',
  description: 'Terms of Service for Second Brain app',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Back link */}
        <Link href="/" className="mb-8 inline-flex items-center text-sm text-gray-500 hover:text-amber-600">
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>

        {/* Header */}
        <h1 className="mt-8 text-4xl font-bold text-gray-900">Terms of Service</h1>
        <p className="mt-2 text-sm text-gray-500">Effective: January 1, 2025</p>
        <p className="text-sm text-gray-500">Version: 1.0</p>

        {/* Summary */}
        <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-amber-600">Plain English Summary</h2>
          <p className="mt-2 italic text-gray-600">
            Second Brain helps you capture and search your personal memories. Your data stays on your device. We only process what&apos;s needed for AI features. You own your content. You must be 17+ to use the app.
          </p>
        </div>

        {/* Sections */}
        <div className="mt-12 space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">1. Agreement to Terms</h2>
            <p className="mt-4 text-gray-600">
              These Terms of Service (&quot;Terms&quot;) constitute a binding agreement between you and Kaichen Zhao (&quot;Developer,&quot; &quot;we,&quot; &quot;us&quot;). By downloading, installing, or using Second Brain (&quot;Service,&quot; &quot;App&quot;), you agree to these Terms. If you disagree, do not use the Service.
            </p>
            <p className="mt-4 text-gray-600">
              If using on behalf of an organization, you represent having authority to bind that organization.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">2. Eligibility</h2>
            <p className="mt-4 text-gray-600">
              You must be at least 17 years old to use this Service. By using the Service, you represent and warrant that you meet this age requirement.
            </p>
            <p className="mt-4 text-gray-600">
              You are responsible for maintaining the security of your device and account credentials.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">3. Your Content & Privacy</h2>

            <h3 className="mt-6 font-semibold text-gray-800">Content Ownership</h3>
            <p className="mt-2 text-gray-600">
              You retain all rights to your memories, notes, and other content (&quot;User Content&quot;). We claim no ownership of your User Content.
            </p>

            <h3 className="mt-6 font-semibold text-gray-800">Limited License</h3>
            <p className="mt-2 text-gray-600">
              You grant us a limited, non-exclusive, revocable license to process User Content solely to provide the Service (generating embeddings, search, AI responses). This license terminates when you delete your content.
            </p>

            <h3 className="mt-6 font-semibold text-gray-800">Privacy-First Design</h3>
            <p className="mt-2 text-gray-600">
              User Content is stored locally on your device. Only minimal data (questions and relevant snippets) is sent to AI providers for processing. We do not sell or share your data.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">4. Prohibited Uses</h2>
            <p className="mt-4 font-semibold text-gray-800">You agree NOT to:</p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
              <li>Violate any laws or regulations</li>
              <li>Upload illegal, harmful, or offensive content</li>
              <li>Infringe on others&apos; intellectual property rights</li>
              <li>Attempt to access the Service without authorization</li>
              <li>Reverse engineer or decompile the App</li>
              <li>Use automated systems or bots to access the Service</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Use the Service to build competing products</li>
              <li>Store highly regulated data (HIPAA, PCI) without appropriate safeguards</li>
            </ul>
            <p className="mt-4 text-gray-600">
              We reserve the right to terminate accounts violating these prohibitions.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">5. AI Features & Limitations</h2>

            <h3 className="mt-6 font-semibold text-gray-800">AI Accuracy Disclaimer</h3>
            <p className="mt-2 text-gray-600">
              AI-generated responses may be inaccurate, incomplete, or outdated. Always verify important information. Do not rely on the Service for professional, medical, legal, or financial advice.
            </p>

            <h3 className="mt-6 font-semibold text-gray-800">Third-Party Services</h3>
            <p className="mt-2 text-gray-600">
              We use third-party AI providers (OpenAI, Supabase) to process queries. While we require these providers to protect your data, we are not responsible for their independent actions.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">6. Subscriptions & Payments</h2>

            <h3 className="mt-6 font-semibold text-gray-800">Auto-Renewal</h3>
            <p className="mt-2 text-gray-600">
              Paid subscriptions automatically renew unless cancelled at least 24 hours before the current period ends. Manage subscriptions in your App Store account settings.
            </p>

            <h3 className="mt-6 font-semibold text-gray-800">Price Changes</h3>
            <p className="mt-2 text-gray-600">
              We may change prices with 30 days notice. Continued use after notice constitutes acceptance of new prices.
            </p>

            <h3 className="mt-6 font-semibold text-gray-800">Refunds</h3>
            <p className="mt-2 text-gray-600">
              Refunds are handled per App Store policies. Fees already paid are generally non-refundable.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">7. DISCLAIMER OF WARRANTIES</h2>
            <div className="mt-4 rounded-lg bg-white p-4 text-gray-600">
              <p className="uppercase">
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">8. LIMITATION OF LIABILITY</h2>
            <div className="mt-4 rounded-lg bg-white p-4 text-gray-600">
              <p className="uppercase">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW: (A) WE WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, PROFITS, OR REVENUE; AND (B) OUR TOTAL LIABILITY FOR ANY CLAIM WILL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS BEFORE THE CLAIM AROSE, OR $100 IF YOU HAVE NOT PAID US.
              </p>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Some jurisdictions do not allow these limitations, so they may not apply to you.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">9. Indemnification</h2>
            <p className="mt-4 text-gray-600">
              You agree to defend, indemnify, and hold harmless the Developer from any claims, damages, losses, and expenses (including attorney fees) arising from your use of the Service or breach of these Terms, except to the extent caused by our negligence or willful misconduct.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">10. Dispute Resolution</h2>

            <h3 className="mt-6 font-semibold text-gray-800">Mandatory Arbitration</h3>
            <p className="mt-2 text-gray-600">
              Any disputes shall be resolved through binding individual arbitration under JAMS Streamlined Arbitration Rules, except you may bring claims in small claims court if they qualify. The arbitration will be conducted in California.
            </p>

            <h3 className="mt-6 font-semibold text-gray-800">Class Action Waiver</h3>
            <p className="mt-2 text-gray-600">
              You agree to bring claims only in your individual capacity and not as part of any class or representative action.
            </p>

            <h3 className="mt-6 font-semibold text-gray-800">30-Day Opt-Out</h3>
            <p className="mt-2 text-gray-600">
              You may opt out of arbitration by emailing us within 30 days of first using the Service.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">11. Termination</h2>
            <p className="mt-4 text-gray-600">
              You may stop using the Service at any time. We may suspend or terminate your access for:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
              <li>Violation of these Terms</li>
              <li>Illegal or harmful activity</li>
              <li>Security threats to the Service</li>
              <li>Non-payment of fees</li>
              <li>Extended inactivity (12+ months)</li>
              <li>Legal requirements</li>
            </ul>
            <p className="mt-4 text-gray-600">
              Upon termination, your license to use the Service ends. Sections that should survive (ownership, disclaimers, liability limits) remain in effect.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">12. Force Majeure</h2>
            <p className="mt-4 text-gray-600">
              We are not liable for failures or delays due to circumstances beyond our reasonable control, including natural disasters, acts of government, war, terrorism, strikes, or Internet service provider failures.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">13. Changes to Terms</h2>
            <p className="mt-4 text-gray-600">
              We may modify these Terms with 30 days notice for material changes (via in-app notification or email). Continued use after the effective date constitutes acceptance. We will maintain a version history.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">14. General Provisions</h2>

            <h3 className="mt-6 font-semibold text-gray-800">Governing Law</h3>
            <p className="mt-2 text-gray-600">
              These Terms are governed by California law, excluding conflict-of-laws rules.
            </p>

            <h3 className="mt-6 font-semibold text-gray-800">Severability</h3>
            <p className="mt-2 text-gray-600">
              If any provision is invalid, the rest remains in effect.
            </p>

            <h3 className="mt-6 font-semibold text-gray-800">Entire Agreement</h3>
            <p className="mt-2 text-gray-600">
              These Terms and our Privacy Policy (which is incorporated by reference) constitute the entire agreement between you and us regarding the Service.
            </p>

            <h3 className="mt-6 font-semibold text-gray-800">Privacy Policy</h3>
            <p className="mt-2 text-gray-600">
              Our Privacy Policy explains how we collect, use, and protect your information. By using the Service, you also agree to our Privacy Policy.
            </p>

            <h3 className="mt-6 font-semibold text-gray-800">No Waiver</h3>
            <p className="mt-2 text-gray-600">
              Our failure to enforce any provision is not a waiver of that provision.
            </p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">15. Apple App Store Provisions</h2>
            <p className="mt-4 text-gray-600">
              These additional terms apply when downloading from the Apple App Store:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
              <li>Apple is not responsible for the Service or these Terms</li>
              <li>Apple has no obligation to provide support or maintenance</li>
              <li>Apple is not responsible for any product liability claims</li>
              <li>Apple is a third-party beneficiary with the right to enforce these Terms</li>
            </ul>
          </section>

          {/* Section 16 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">16. Contact Information</h2>
            <p className="mt-4 text-gray-600">For questions about these Terms:</p>
            <div className="mt-4 rounded-lg bg-white p-4 text-gray-600">
              <p><strong>Email:</strong> support@2ndbrainai.app</p>
              <p><strong>Website:</strong> 2ndbrainai.app</p>
              <p><strong>Developer:</strong> Kaichen Zhao</p>
              <p><strong>Location:</strong> California, USA</p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          <Link href="/" className="hover:text-amber-600">
            Second Brain
          </Link>
          {' · '}
          <Link href="/privacy" className="hover:text-amber-600">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
