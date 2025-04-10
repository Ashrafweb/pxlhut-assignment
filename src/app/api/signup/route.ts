import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const body = await req.json();
	console.log("Received sign-up data:", body);
	return NextResponse.json({
		status: "200",
		success: true,
		message: "Account created",
	});
}
