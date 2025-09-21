import { type NextRequest, NextResponse } from "next/server"

function generateEmailTemplate(type: string, formData: any): string {
  if (type === "general-inquiry") {
    return `
      <h2>New General Inquiry from Qube Medical System Website</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Company:</strong> ${formData.company}</p>
      <p><strong>Subject:</strong> ${formData.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message}</p>
      <hr>
      <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
    `
  } else {
    return `
      <h2>New Service Request from Qube Medical System Website</h2>
      <p><strong>Contact Name:</strong> ${formData.contactName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Hospital/Clinic:</strong> ${formData.hospital}</p>
      <p><strong>Service Type:</strong> ${formData.serviceType}</p>
      <p><strong>Equipment Type:</strong> ${formData.equipmentType}</p>
      <p><strong>Urgency:</strong> ${formData.urgency}</p>
      <p><strong>Preferred Date:</strong> ${formData.preferredDate}</p>
      <p><strong>Additional Details:</strong></p>
      <p>${formData.additionalDetails}</p>
      <hr>
      <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
    `
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, ...formData } = body

    console.log(`${type} form submission:`, formData)

    try {
      const { Resend } = require("resend")
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: "noreply@qubemedical.com",
        to: "info@qubemedical.com",
        subject: `New ${type === "general-inquiry" ? "General Inquiry" : "Service Request"} from ${formData.name || formData.contactName}`,
        html: generateEmailTemplate(type, formData),
      })

      console.log("Email sent successfully")
    } catch (emailError) {
      console.error("Email sending failed:", emailError)
      // Continue execution even if email fails
    }

    // Option 2: Database storage (example with Supabase)
    // const { createClient } = require('@supabase/supabase-js')
    // const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)
    //
    // await supabase.from('contact_submissions').insert({
    //   type,
    //   data: formData,
    //   submitted_at: new Date().toISOString()
    // })

    // Option 3: Third-party service (example with Formspree)
    // await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })

    return NextResponse.json({
      success: true,
      message: `${type === "general-inquiry" ? "General inquiry" : "Service request"} submitted successfully`,
    })
  } catch (error) {
    console.error("Form submission error:", error)
    return NextResponse.json({ success: false, message: "Failed to submit form" }, { status: 500 })
  }
}
