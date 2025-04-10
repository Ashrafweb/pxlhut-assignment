import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "@/lib/types";
import { AnimatedDiv } from "../ui/AnimatedDiv";

type AddressFormProps = {
	register: UseFormRegister<FormData>;
	errors: FieldErrors<FormData>;
};

export function AddressForm({ register, errors }: AddressFormProps) {
	return (
		<AnimatedDiv>
			<div>
				<label htmlFor='street'>Street Address</label>
				<input
					type='text'
					id='street'
					{...register("street")}
					className='input-primary'
					aria-invalid={!!errors.street?.message}
					aria-describedby='street-error'
					aria-labelledby='street-label'
				/>
				{errors.street && (
					<p id='street-error' className='text-red-500 mt-0.5'>
						{errors.street.message}
					</p>
				)}
			</div>

			<div>
				<label htmlFor='city'>City</label>
				<input
					type='text'
					id='city'
					{...register("city")}
					className='input-primary'
					aria-invalid={!!errors.city?.message}
					aria-describedby='city-error'
					aria-labelledby='city-label'
				/>
				{errors.city && (
					<p id='city-error' className='text-red-500 mt-0.5'>
						{errors.city.message}
					</p>
				)}
			</div>

			<div>
				<label htmlFor='zip'>Zip Code</label>
				<input
					type='text'
					id='zip'
					{...register("zip")}
					className='input-primary'
					aria-invalid={!!errors.zip?.message}
					aria-describedby='zip-error'
					aria-labelledby='zip-label'
				/>
				{errors.zip && (
					<p id='zip-error' className='text-red-500 mt-0.5'>
						{errors.zip.message}
					</p>
				)}
			</div>
		</AnimatedDiv>
	);
}
