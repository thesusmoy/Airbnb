import { cn } from "@/lib/utils";
import React from "react";
type Props = {
	children: React.ReactNode;
	className?: string;
};
export default function Container({ children, className }: Props) {
	return (
		<div className={cn("px-5 lg:px-10 xl:px-20", className)}>
			{children}
		</div>
	);
}
