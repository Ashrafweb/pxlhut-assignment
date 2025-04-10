import { useMutation } from "@tanstack/react-query";
import type { FormData } from "./types";

export function useSignupMutation() {
	return useMutation({
		mutationFn: async (data: FormData) => {
			const res = await fetch("/api/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!res.ok) throw new Error("Failed to submit form");
			return res.json();
		},
	});
}
