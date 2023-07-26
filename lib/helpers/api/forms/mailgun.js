import * as FormData from "form-data"
import Mailgun from "mailgun.js"

export async function sendFormToMailgun(formData) {
	/* Server-side only */

	try {
		const mailgun = new Mailgun(FormData)
		const mg = mailgun.client({
			username: "api",
			key: process.env.MAILGUN_API_KEY,
			url: "https://api.eu.mailgun.net",
		})

		const sendResult = await mg.messages.create("mail.geobeermap.com", {
			from: `${formData.name} <${formData.email}>`,
			to: "andrew@andrewbraun.dev",
			subject: "Contact Form Message from GeoBeerMap.com",
			text: formData.message,
		})

		return { error: false, message: "Successfully sent message!" }
	} catch (error) {
		console.error(error)
	}
}
