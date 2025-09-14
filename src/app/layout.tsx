import React from "react";
import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <React.Fragment>{children}</React.Fragment>;
}
