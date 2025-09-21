export function generateEmailTemplate(type: string, formData: any): string {
  if (type === "inquiry") {
    return `
      <h2>New General Inquiry</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Company:</strong> ${formData.company || "Not provided"}</p>
      <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
      <p><strong>Subject:</strong> ${formData.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message}</p>
    `
  } else if (type === "service") {
    return `
      <h2>New Service Request</h2>
      <p><strong>Facility:</strong> ${formData.facilityName}</p>
      <p><strong>Contact:</strong> ${formData.contactName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Equipment:</strong> ${formData.equipmentType}</p>
      <p><strong>Service Type:</strong> ${formData.serviceType}</p>
      <p><strong>Urgency:</strong> ${formData.urgency}</p>
      <p><strong>Description:</strong></p>
      <p>${formData.description}</p>
    `
  }
  return ""
}
