import { useState } from "react"
import { QRCodeCanvas } from "qrcode.react"

export default function FormPage() {
  const [formData, setFormData] = useState({ name: "", email: "" })
  const [formId, setFormId] = useState("")
  const [showQR, setShowQR] = useState(false)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleGenerateQR = () => {
    const id = crypto.randomUUID()
    setFormId(id)
    setShowQR(true)
  }

  const captureUrl = `${window.location.origin}/capture?formId=${formId}`

  return (
    <div style={{ maxWidth: "400px" }}>
      <h3>Fill Form</h3>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />
      <button onClick={handleGenerateQR}>Generate QR Code</button>

      {showQR && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <p>Scan this QR to open capture page:</p>
          <QRCodeCanvas value={captureUrl} size={180} />
          <p style={{ wordBreak: "break-all", fontSize: "12px" }}>
            {captureUrl}
          </p>
        </div>
      )}
    </div>
  )
}
