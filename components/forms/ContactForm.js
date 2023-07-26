import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { submitForm } from "lib/helpers/api/forms/submit"

import PrimaryButton from "components/ui/buttons/PrimaryButton"

import styles from "./ContactForm.module.scss"
import formStyles from "./FormStyles.module.scss"

const validationSchema = yup.object({
	name: yup.string().required("Name is required"),
	email: yup
		.string()
		.email("Invalid email address")
		.required("Email is required"),
	message: yup.string().required("Message is required"),
})

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
		reset,
	} = useForm(validationSchema, {
		resolver: yupResolver(validationSchema),
	})

	const [isModalActive, setIsModalActive] = useState(false)

	const onSubmit = async (values) => {
		try {
			const response = await submitForm(values)
			const data = await response
			if (!!data?.error) {
				console.error(`Error: ${data.message}`)
				return
			}
			reset()
			return
		} catch (error) {
			console.error(error)
		}
	}

	const toggleModal = () => {
		setIsModalActive((prev) => !prev)
	}

	useEffect(() => {
		console.log(isSubmitSuccessful)
		if (isSubmitSuccessful) {
			toggleModal()
		}
	}, [isSubmitSuccessful])

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className={`${formStyles.form}`}>
				<div className={`${formStyles.formInputContainer}`}>
					<label htmlFor="name" className={`${formStyles.label}`}>
						Name
					</label>
					<input
						type="text"
						{...register("name", { required: true })}
						disabled={isSubmitting}
						className={`${formStyles.formInput} ${
							isSubmitting ? formStyles.disabled : ""
						}`}
					/>
					{errors.name && <span>Name is required</span>}
				</div>
				<div className={`${formStyles.formInputContainer}`}>
					<label htmlFor="email" className={`${formStyles.label}`}>
						Email
					</label>
					<input
						type="email"
						{...register("email", { required: true, email: true })}
						disabled={isSubmitting}
						className={`${formStyles.formInput} ${
							isSubmitting ? formStyles.disabled : ""
						}`}
					/>
					{errors.email && <span>Invalid email address</span>}
				</div>
				<div className={`${formStyles.formInputContainer}`}>
					<label htmlFor="message" className={`${formStyles.label}`}>
						Message
					</label>
					<textarea
						{...register("message", { required: true })}
						className={`${formStyles.formInput}  ${formStyles.textArea} ${
							isSubmitting ? formStyles.disabled : ""
						}`}
						rows="20"
						disabled={isSubmitting}
					/>
					{errors.message && <span>Message is required</span>}
				</div>
				<div className={`${styles.submitButtonWrapper} `}>
					<PrimaryButton
						buttonProps={{ type: "submit", disabled: isSubmitting }}
						classNames={`${styles.contactSubmit} ${
							isSubmitting ? formStyles.disabled : ""
						}`}
					>
						Submit
					</PrimaryButton>
				</div>
			</form>

			{isModalActive && (
				<div className={`${formStyles.formSuccessModalContainer}`}>
					<div className={`${formStyles.formSuccessModal}`}>
						<p>Successfully submitted your message!</p>
						<div className={`${formStyles.buttonWrapper}`}>
							<PrimaryButton onClick={toggleModal}>Close</PrimaryButton>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
