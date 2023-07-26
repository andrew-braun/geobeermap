import React from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

import Button from "components/ui/buttons/PrimaryButton"

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
		formState: { errors },
	} = useForm(validationSchema, {
		resolver: yupResolver(validationSchema),
	})

	const onSubmit = (values) => {
		console.log("Form submitted:", values)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={`${formStyles.form}`}>
			<div className={`${formStyles.formInputContainer}`}>
				<label htmlFor="name" className={`${formStyles.label}`}>
					Name
				</label>
				<input
					type="text"
					{...register("name", { required: true })}
					className={`${formStyles.formInput}`}
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
					className={`${formStyles.formInput}`}
				/>
				{errors.email && <span>Invalid email address</span>}
			</div>
			<div className={`${formStyles.formInputContainer}`}>
				<label htmlFor="message" className={`${formStyles.label}`}>
					Message
				</label>
				<textarea
					{...register("message", { required: true })}
					className={`${formStyles.formInput}  ${formStyles.textArea}`}
					rows="20"
				/>
				{errors.message && <span>Message is required</span>}
			</div>
			<div className={`${styles.submitButtonWrapper}`}>
				<Button
					buttonProps={{ type: "submit" }}
					classNames={`${styles.contactSubmit}`}
				>
					Submit
				</Button>
			</div>
		</form>
	)
}
