import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
	CircleUser,
	Heart,
	MessageSquare,
	Search,
	Triangle,
} from "lucide-react";
import { usePathname } from "next/navigation";
type Props = {
	isScrolled: boolean;
};

export default function MobileBottom({ isScrolled }: Props) {
	const pathname = usePathname();
	return (
		<motion.div
			className={cn(
				"duration-200",
				isScrolled ? "hidden" : "fixed bottom-0 left-0 right-0 z-40"
			)}
			initial={{
				y: -10,
				opacity: 0,
				transition: {
					duration: 0.5,
					ease: "easeInOut",
				},
			}}
			animate={{
				y: 0,
				opacity: 1,
				transition: {
					duration: 0.5,
					ease: "easeInOut",
				},
			}}
		>
			<div className="bg-white shadow-md border-t px-6 py-4 flex items-center justify-between">
				<Link
					href="/"
					className={cn(
						"inline-flex flex-col items-center",
						pathname === "/en" ? "text-primary" : "text-gray-500"
					)}
				>
					<Search />
					<span
						className={cn(
							"text-xs",
							pathname === "/en" ? "font-medium" : "font-normal"
						)}
					>
						Search
					</span>
				</Link>
				<Link
					href="/en/wishlist"
					className={cn(
						"inline-flex flex-col items-center",
						pathname === "/wishlist"
							? "text-primary"
							: "text-gray-500"
					)}
				>
					<Heart />
					<span
						className={cn(
							"text-xs",
							pathname === "/en/wishlist"
								? "font-medium"
								: "font-normal"
						)}
					>
						Wishlist
					</span>
				</Link>
				<Link
					href="/en/trips"
					className={cn(
						"inline-flex flex-col items-center",
						pathname === "/trips" ? "text-primary" : "text-gray-500"
					)}
				>
					<Triangle />
					<span
						className={cn(
							"text-xs",
							pathname === "/en/trips"
								? "font-medium"
								: "font-normal"
						)}
					>
						Trips
					</span>
				</Link>
				<Link
					href="/"
					className={cn(
						"inline-flex flex-col items-center",
						pathname === "/messages"
							? "text-primary"
							: "text-gray-500"
					)}
				>
					<MessageSquare />
					<span
						className={cn(
							"text-xs",
							pathname === "/messages"
								? "font-medium"
								: "font-normal"
						)}
					>
						Messages
					</span>
				</Link>
				<Link
					href="/"
					className={cn(
						"inline-flex flex-col items-center",
						pathname === "/profile"
							? "text-primary"
							: "text-gray-500"
					)}
				>
					<CircleUser />
					<span
						className={cn(
							"text-xs",
							pathname === "/profile"
								? "font-medium"
								: "font-normal"
						)}
					>
						Profile
					</span>
				</Link>
			</div>
		</motion.div>
	);
}
