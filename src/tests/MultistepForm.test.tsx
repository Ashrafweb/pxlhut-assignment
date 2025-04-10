import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MultiStepForm from "../components/forms/MultiStepForm";
import { useForm, FormProvider } from "react-hook-form";
import { useSignupMutation } from "../lib/api";

jest.mock("../lib/api");

const queryClient = new QueryClient();

function RenderWithProviders({ component }: { component: React.ReactElement }) {
	const methods = useForm();
	return (
		<QueryClientProvider client={queryClient}>
			<FormProvider {...methods}>{component}</FormProvider>
		</QueryClientProvider>
	);
}

function renderWithProviders(component: React.ReactElement) {
	return render(<RenderWithProviders component={component} />);
}

describe("MultiStepForm", () => {
	beforeEach(() => {
		(useSignupMutation as jest.Mock).mockClear();
	});

	it("displays success message on successful submission", async () => {
		(useSignupMutation as jest.Mock).mockReturnValue({
			mutate: jest.fn(),
			isSuccess: true,
			isError: false,
			error: null,
		});

		renderWithProviders(<MultiStepForm />);
		await waitFor(() =>
			expect(screen.getByText("Success!")).toBeInTheDocument()
		);
	});

	it("displays error message on submission failure", async () => {
		(useSignupMutation as jest.Mock).mockReturnValue({
			mutate: jest.fn(),
			isSuccess: false,
			isError: true,
			error: { message: "Submission failed" },
		});

		renderWithProviders(<MultiStepForm />);
		await waitFor(() =>
			expect(
				screen.getByText("Submission failed : Submission failed")
			).toBeInTheDocument()
		);
	});
});
