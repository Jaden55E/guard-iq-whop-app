import { WhopApp } from "@whop/react/components";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Guard IQ Platform",
	description: "Guard IQ - Elite Basketball Training Platform",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="antialiased">
				<WhopApp>{children}</WhopApp>
			</body>
		</html>
	);
}
