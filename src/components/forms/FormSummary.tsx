import { FormData } from "@/lib/types";
import { AnimatedDiv } from "../ui/AnimatedDiv";

type FormSummaryProps = {
	formData: Partial<FormData>;
};

export function FormSummary({ formData }: FormSummaryProps) {
	return (
		<AnimatedDiv>
			<div className='space-y-4'>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-lg text-gray-700 dark:text-gray-300'>
					<div>
						<strong>Full Name:</strong> {formData.fullName}
					</div>
					<div>
						<strong>Email:</strong> {formData.email}
					</div>
					<div>
						<strong>Phone Number:</strong> {formData.phone}
					</div>
					<div>
						<strong>Street Address:</strong> {formData.street}
					</div>
					<div>
						<strong>City:</strong> {formData.city}
					</div>
					<div>
						<strong>Zip Code:</strong> {formData.zip}
					</div>
					<div>
						<strong>Username:</strong> {formData.username}
					</div>
				</div>
			</div>
		</AnimatedDiv>
	);
}
