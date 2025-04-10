/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
	personalInfoSchema,
	addressSchema,
	accountSchema,
	fullFormSchema,
} from "@/lib/zodSchema";
import type { FormData } from "@/lib/types";
import { useSignupMutation } from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Stepper } from "../ui/Stepper";
import ThemeToggle from "../ThemeToggle";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { AddressForm } from "./AddressForm";
import { AccountForm } from "./AccountForm";
import { FormSummary } from "./FormSummary";

const steps = ["Personal Info", "Address", "Account", "Summary"];
const stepInfo = [
	{ label: "Personal", sub: "Info" },
	{ label: "Address", sub: "Info" },
	{ label: "Account", sub: "Setup" },
	{ label: "Summary", sub: "" },
];
export default function MultiStepForm() {
	const [step, setStep] = useState(0);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const [formData, setFormData] = useState<Partial<FormData>>({});
	const signupMutation = useSignupMutation();

	const schema =
		[personalInfoSchema, addressSchema, accountSchema][step] || fullFormSchema;

	const methods = useForm<FormData>({
		resolver: zodResolver(schema as any),
		defaultValues: formData,
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = methods;

	const onNext: SubmitHandler<FormData> = (data) => {
		setFormData((prev) => ({ ...prev, ...data }));
		setStep((prev) => prev + 1);
		console.log({ ...formData, ...data });
	};

	const onSubmit: SubmitHandler<FormData> = (data) => {
		const finalData = { ...formData, ...data };
		signupMutation.mutate(finalData, {
			onSuccess: () => {
				setIsSubmitted(true);
				console.log(finalData);
			},
		});
	};

	return (
		<div className=' mx-auto h-screen sm:h-fit mt-[-5px] md:mt-8 xl:mt-12 bg-white text-black dark:text-white dark:bg-gray-800 p-6 rounded-xl shadow'>
			<div className='flex flex-row justify-end pb-4'>
				<ThemeToggle />
			</div>
			<Stepper step={step} stepInfo={stepInfo} />
			{!isSubmitted && (
				<>
					<h2 className='text-xl md:text-2xl font-normal my-4'>
						{steps[step]}
					</h2>
				</>
			)}
			<form
				onSubmit={handleSubmit(step < steps.length - 1 ? onNext : onSubmit)}
				className='space-y-4'
			>
				{step === 0 && <PersonalInfoForm register={register} errors={errors} />}
				{step === 1 && <AddressForm register={register} errors={errors} />}
				{step === 2 && <AccountForm register={register} errors={errors} />}
				{step === 3 && !isSubmitted && <FormSummary formData={formData} />}
				{!isSubmitted && (
					<div className='flex justify-between mt-4'>
						{step > 0 && (
							<button
								type='button'
								onClick={() => setStep((s) => s - 1)}
								className='btn-secondary'
							>
								Prev
							</button>
						)}
						<button type='submit' className='btn-primary'>
							{step < steps.length - 1 ? "Next" : "Submit"}
						</button>
					</div>
				)}
			</form>
			{signupMutation?.isSuccess && (
				<div className='flex flex-col items-center justify-center py-10 text-center text-green-600 dark:text-green-400'>
					<h2 className='text-2xl font-semibold'>Success!</h2>
					<p className='mt-2 text-sm'>
						Your account has been created successfully.
					</p>
					<button
						className='btn-secondary mt-2'
						onClick={() => {
							window.location.reload();
						}}
					>
						Restart
					</button>
				</div>
			)}
			{signupMutation?.isError && (
				<p className='text-red-500'>
					Submission failed :{" "}
					{signupMutation?.error?.message || "Unknown error"}
				</p>
			)}
		</div>
	);
}
