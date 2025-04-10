import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "@/lib/types";
import { AnimatedDiv } from "../ui/AnimatedDiv";

type PersonalInfoFormProps = {
	register: UseFormRegister<FormData>;
	errors: FieldErrors<FormData>;
};

export function PersonalInfoForm({ register, errors }: PersonalInfoFormProps) {
	return (
		<AnimatedDiv>
			<div>
				<label htmlFor='fullName'>Full Name</label>
				<input
					type='text'
					id='fullName'
					{...register("fullName")}
					className='input-primary'
					aria-invalid={!!errors.fullName?.message}
					aria-describedby='fullName-error'
					aria-labelledby='fullName-label'
				/>
				{errors.fullName && (
					<p id='fullName-error' className='text-red-500 mt-0.5'>
						{errors.fullName.message}
					</p>
				)}
			</div>

			<div>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					id='email'
					{...register("email")}
					className='input-primary'
					aria-invalid={!!errors.email?.message}
					aria-describedby='email-error'
					aria-labelledby='email-label'
				/>
				{errors.email && (
					<p id='email-error' className='text-red-500 mt-0.5'>
						{errors.email.message}
					</p>
				)}
			</div>

			<div>
				<label htmlFor='phone'>Phone Number</label>
				<input
					type='tel'
					id='phone'
					{...register("phone")}
					className='input-primary'
					aria-invalid={!!errors.phone?.message}
					aria-describedby='phone-error'
					aria-labelledby='phone-label'
				/>
				{errors.phone && (
					<p id='phone-error' className='text-red-500 mt-0.5'>
						{errors.phone.message}
					</p>
				)}
			</div>
		</AnimatedDiv>
	);
}
