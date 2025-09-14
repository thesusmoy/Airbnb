import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Globe } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Language() {
	const pathname = usePathname();
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="secondary"
					className="rounded-full cursor-pointer size-10"
				>
					<Globe />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-60 p-4 rounded-lg shadow-lg bg-white">
				<div className="text-lg font-semibold mb-4">Select Language</div>
				<div className="space-y-2">
					<Link
						href={`/en${pathname.replace(/^\/(en|bn)/, "")}`}
						className={`flex items-center justify-between w-full p-3 rounded-md transition-colors duration-200 ${
							pathname.startsWith("/en")
								? "bg-primary/10 text-primary"
								: "hover:bg-primary/10"
						}`}
					>
						<div>
							<div className="font-medium">English</div>
							<div className="text-sm text-gray-500">United States</div>
						</div>
						{pathname.startsWith("/en") && (
							<svg
								className="w-5 h-5 text-primary"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M5 13l4 4L19 7"
								/>
							</svg>
						)}
					</Link>
					<Link
						href={`/bn${pathname.replace(/^\/(en|bn)/, "")}`}
						className={`flex items-center justify-between w-full p-3 rounded-md transition-colors duration-200 ${
							pathname.startsWith("/bn")
								? "bg-primary/10 text-primary"
								: "hover:bg-primary/10"
						}`}
					>
						<div>
							<div className="font-medium">Bengali</div>
							<div className="text-sm text-gray-500">বাংলা</div>
						</div>
						{pathname.startsWith("/bn") && (
							<svg
								className="w-5 h-5 text-primary"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M5 13l4 4L19 7"
								/>
							</svg>
						)}
					</Link>
				</div>
			</PopoverContent>
		</Popover>
	);
}
