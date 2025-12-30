import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - Second Brain',
  description: 'Privacy Policy for Second Brain app',
}

export default function PrivacyPage() {
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
        <h1 className="mt-8 text-4xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-500">Effective: October 1, 2024</p>
        <p className="text-sm text-gray-500">Version: 1.0</p>

        {/* Summary */}
        <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-amber-600">Plain English Summary</h2>
          <p className="mt-2 italic text-gray-600">
            Your memories stay on your device. When you ask questions, we send only the question and relevant snippets to AI providers for answers. We don&apos;t sell your data. You can export or delete everything anytime.
          </p>
        </div>

        {/* Sections */}
        <div className="mt-12 space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">1. Who We Are</h2>
            <div className="mt-4 space-y-2 text-gray-600">
              <p><strong>Operator:</strong> Kaichen Zhao (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;)</p>
              <p><strong>Website:</strong> 2ndbrainai.app</p>
              <p><strong>Contact:</strong> support@2ndbrainai.app</p>
              <p className="mt-4">
                This Privacy Policy explains how we handle information when you use Second Brain (the &quot;Service&quot;). The Service is currently available only in the United States.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">2. Information We Collect</h2>
            <p className="mt-4 text-gray-600">We collect only what&apos;s necessary to provide the Service:</p>

            <h3 className="mt-6 font-semibold text-gray-800">A. Your Content</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
              <li>Notes, memories, and tags you create</li>
              <li>Voice recordings and their transcripts</li>
              <li>Embeddings generated from your content (stored locally)</li>
            </ul>

            <h3 className="mt-6 font-semibold text-gray-800">B. Account Information</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
              <li>Email address (for authentication)</li>
              <li>Account identifiers (Apple ID if using Sign in with Apple)</li>
              <li>Subscription status</li>
            </ul>

            <h3 className="mt-6 font-semibold text-gray-800">C. Device Information</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
              <li>Device model and OS version (for support)</li>
              <li>App version</li>
            </ul>

            <h3 className="mt-6 font-semibold text-gray-800">D. Optional Data</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
              <li>Crash logs and diagnostics (only if you opt-in)</li>
              <li>Support emails you send us</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">3. Where Your Data Lives</h2>

            <h3 className="mt-6 font-semibold text-gray-800">On Your Device (Default)</h3>
            <p className="mt-2 text-gray-600">
              Your memories and embeddings are stored locally on your iPhone. They never leave your device unless you use the Q&A feature.
            </p>

            <h3 className="mt-6 font-semibold text-gray-800">Q&A Processing</h3>
            <p className="mt-2 text-gray-600">
              When you ask a question, we send:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
              <li>Your question</li>
              <li>Top matching snippets from your memories</li>
              <li>Basic metadata (timestamps)</li>
            </ul>
            <p className="mt-2 text-gray-600">
              This data is sent to OpenAI to generate an answer. We don&apos;t store this data on our servers.
            </p>

            <h3 className="mt-6 font-semibold text-gray-800">Authentication</h3>
            <p className="mt-2 text-gray-600">
              Account credentials are managed by Supabase (our authentication provider) with industry-standard security.
            </p>

            <h3 className="mt-6 font-semibold text-gray-800">Cloud Backup (Future - Optional)</h3>
            <p className="mt-2 text-gray-600">If we add cloud backup, it will be:</p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
              <li>Completely optional</li>
              <li>Encrypted end-to-end</li>
              <li>Deletable at any time</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">4. How We Use Your Information</h2>
            <p className="mt-4 text-gray-600">We use your information to:</p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
              <li>Provide the Service (store memories, generate answers)</li>
              <li>Process your subscription</li>
              <li>Send important updates (security, service changes)</li>
              <li>Respond to support requests</li>
              <li>Improve the app (with anonymized, aggregated data)</li>
              <li>Comply with legal requirements</li>
            </ul>

            <p className="mt-6 font-semibold text-gray-800">We DO NOT:</p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
              <li>Sell your personal information</li>
              <li>Share your memories with third parties</li>
              <li>Use your content to train AI models</li>
              <li>Track you across apps or websites</li>
              <li>Show you targeted advertisements</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">5. Third-Party Services</h2>
            <p className="mt-4 text-gray-600">We work with trusted service providers:</p>

            <h3 className="mt-6 font-semibold text-gray-800">OpenAI (AI Responses)</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
              <li>Processes Q&A requests</li>
              <li>Doesn&apos;t train on your data</li>
              <li>Deletes data after 30 days</li>
              <li>See OpenAI&apos;s privacy policy for details</li>
            </ul>

            <h3 className="mt-6 font-semibold text-gray-800">Supabase (Authentication)</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
              <li>Manages user authentication</li>
              <li>Stores only account credentials</li>
              <li>SOC 2 Type II certified</li>
              <li>See Supabase&apos;s privacy policy for details</li>
            </ul>

            <h3 className="mt-6 font-semibold text-gray-800">Apple (App Store)</h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
              <li>Processes subscriptions</li>
              <li>We don&apos;t receive payment card details</li>
              <li>See Apple&apos;s privacy policy for details</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">6. Data Retention</h2>
            <ul className="mt-4 list-inside list-disc space-y-1 text-gray-600">
              <li>On-device data: Kept until you delete it or uninstall the app</li>
              <li>Q&A requests: Not stored by us; OpenAI retains for 30 days</li>
              <li>Account data: Kept while account is active, deleted upon request</li>
              <li>Support emails: Retained for 12 months unless you request deletion</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">7. Your Privacy Rights</h2>
            <p className="mt-4 text-gray-600">You have the right to:</p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
              <li><strong>Access:</strong> Export your data anytime from Settings</li>
              <li><strong>Delete:</strong> Remove individual items or all data</li>
              <li><strong>Correct:</strong> Edit your memories anytime</li>
              <li><strong>Portability:</strong> Export in standard formats</li>
              <li><strong>Opt-out:</strong> Disable optional features like diagnostics</li>
              <li><strong>Object:</strong> Choose not to use AI features</li>
            </ul>

            <h3 className="mt-6 font-semibold text-gray-800">California Privacy Rights (CCPA/CPRA)</h3>
            <p className="mt-2 text-gray-600">California residents have additional rights:</p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
              <li>Right to know what personal information we collect</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of sale (we don&apos;t sell your data)</li>
              <li>Right to non-discrimination</li>
            </ul>

            <div className="mt-4 rounded-lg bg-white p-4 text-gray-600">
              To exercise your rights, email: <strong>support@2ndbrainai.app</strong>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">8. Children&apos;s Privacy</h2>
            <p className="mt-4 text-gray-600">
              The Service is not intended for children under 17. We do not knowingly collect information from children. If you believe a child has provided information, please contact us immediately.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">9. Security</h2>
            <p className="mt-4 text-gray-600">We implement security measures including:</p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
              <li>Local data encryption on your device</li>
              <li>Secure authentication through Supabase</li>
              <li>HTTPS for all network communications</li>
              <li>Regular security updates</li>
            </ul>

            <p className="mt-4 text-gray-600">However, no system is 100% secure. Please:</p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
              <li>Keep your device passcode secure</li>
              <li>Use Face ID/Touch ID when available</li>
              <li>Update to the latest iOS version</li>
              <li>Report security concerns immediately</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">10. International Users</h2>
            <p className="mt-4 text-gray-600">
              The Service is currently intended for U.S. users only. If you&apos;re outside the U.S., you acknowledge that any data processing occurs in the United States.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">11. Do Not Track</h2>
            <p className="mt-4 text-gray-600">
              The Service does not track you across apps or websites. We don&apos;t respond to Do Not Track signals because we don&apos;t engage in tracking.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">12. Changes to This Policy</h2>
            <p className="mt-4 text-gray-600">
              We may update this Privacy Policy. If we make material changes, we&apos;ll notify you through:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
              <li>In-app notifications</li>
              <li>Email (if you&apos;ve provided one)</li>
              <li>A prominent notice in the app</li>
            </ul>
            <p className="mt-4 text-gray-600">
              Continued use after changes means you accept the updated policy.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">13. Contact Us</h2>
            <p className="mt-4 text-gray-600">For privacy questions or requests:</p>
            <div className="mt-4 rounded-lg bg-white p-4 text-gray-600">
              <p><strong>Email:</strong> support@2ndbrainai.app</p>
              <p><strong>Website:</strong> 2ndbrainai.app</p>
              <p><strong>Subject Line:</strong> &quot;Privacy Request&quot;</p>
              <p><strong>Developer:</strong> Kaichen Zhao</p>
              <p><strong>Location:</strong> California, USA</p>
            </div>
            <p className="mt-4 text-gray-600">We&apos;ll respond within 30 days.</p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900">14. Effective Date</h2>
            <p className="mt-4 text-gray-600">This Privacy Policy is effective as of October 1, 2024.</p>
            <p className="text-gray-600">Last Updated: October 1, 2024</p>
            <p className="text-gray-600">Version: 1.0</p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          <Link href="/" className="hover:text-amber-600">
            Second Brain
          </Link>
          {' · '}
          <Link href="/terms" className="hover:text-amber-600">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  )
}
