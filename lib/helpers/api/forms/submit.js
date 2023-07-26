export async function submitForm(formData) {
	/* Client-side */
	try {
		const response = await fetch("/api/external/mail/contact-form", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ formData }),
		})

		const data = await response.json()

		return data
	} catch (error) {
		console.error(error)
	}
}
