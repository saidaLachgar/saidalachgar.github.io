function generateToken(expiryHours) {
  const expiryDate = new Date()
  expiryDate.setHours(expiryDate.getHours() + expiryHours) // Set expiration (e.g., 24 hours from now)
  const payload = {
    exp: expiryDate.getTime(), // Expiration timestamp
    // Include other data if needed, like user ID or token type
  }
  // Encode the payload to Base64 (you can add more security by encrypting or signing)
  const base64Payload = btoa(JSON.stringify(payload))
  return base64Payload
}

// Example of generating a 24-hour token
const token = generateToken(24)
console.log('Generated Token:', token)
