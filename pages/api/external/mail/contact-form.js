import { sendFormToMailgun } from "lib/helpers/api/forms/mailgun"

export default async function contactFormHandler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method not allowed" })
	}

	try {
		const { formData } = req.body

		const sendResult = await sendFormToMailgun(formData)

		return res.status(200).json({ sendResult })
	} catch (error) {
		console.error(error)
		return res
			.status(500)
			.json({
				error: true,
				message: "Something went wrong while submitting the form.",
			})
	}
}
