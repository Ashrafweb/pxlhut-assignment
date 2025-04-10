import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "@/lib/types";
import { AnimatedDiv } from "../ui/AnimatedDiv";

type AccountFormProps = {
	register: UseFormRegister<FormData>;
	errors: FieldErrors<FormData>;
};

export function AccountForm({ register, errors }: AccountFormProps) {
	return (
		<AnimatedDiv>
			<div>
				<label htmlFor='username'>Username</label>
				<input
					type='text'
					id='username'
					{...register("username")}
					className='input-primary'
					aria-invalid={!!errors.username?.message}
					aria-describedby='username-error'
					aria-labelledby='username'
				/>
				{errors.username && (
					<p id='username-error' className='text-red-500 mt-0.5'>
						{errors.username.message}
					</p>
				)}
			</div>

			<div>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					id='password'
					{...register("password")}
					className='input-primary'
					aria-invalid={!!errors.password?.message}
					aria-describedby='password-error'
					aria-labelledby='password'
				/>
				{errors.password && (
					<p id='password-error' className='text-red-500 mt-0.5'>
						{errors.password.message}
					</p>
				)}
			</div>

			<div>
				<label htmlFor='confirmPassword'>Confirm Password</label>
				<input
					type='password'
					id='confirmPassword'
					{...register("confirmPassword")}
					className='input-primary'
					aria-invalid={!!errors.confirmPassword?.message}
					aria-describedby='confirmPassword-error'
					aria-labelledby='confirmPassword'
				/>
				{errors.confirmPassword && (
					<p id='confirmPassword-error' className='text-red-500 mt-0.5'>
						{errors.confirmPassword.message}
					</p>
				)}
			</div>
		</AnimatedDiv>
	);
}
