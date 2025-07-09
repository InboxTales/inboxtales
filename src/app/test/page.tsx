import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Test Page",
  description: "A test page to verify the setup",
}

export default function TestPage() {
  return (
    <main>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12">
            <h1>Test Page</h1>
            <p>This is a test page to verify the basic setup works.</p>
          </div>
        </div>
      </div>
    </main>
  )
} 