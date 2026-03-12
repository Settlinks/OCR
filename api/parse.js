// api/parse.js
import { Client, product } from "mindee";

export default async function handler(req, res) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests allowed' });
  }

  try {
    // 2. Initialize Mindee using the SECRET key from Step 1
    const mindeeClient = new Client({ apiKey: process.env.MINDEE_API_KEY });

    // 3. Get the file from the request (sent from your HTML page)
    const inputSource = mindeeClient.docFromBinary(req.body, "document.pdf");

    // 4. Ask Mindee to parse it
    const apiResponse = await mindeeClient.parse(product.InvoiceV4, inputSource);

    // 5. Send the result back to your website
    res.status(200).json(apiResponse.document);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
