import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {
	path: string;
	img: StaticImageData;
	label: string;
};
export default function AnimatedNavLink({ path, img, label }: Props) {
	const pathname = usePathname();
	return (
		<div className="flex items-center justify-center flex-col">
			<motion.div
				key="middleNav"
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.4,
					ease: "easeInOut",
				}}
			>
				<Image src={img} height={35} width={35} alt={label} />
			</motion.div>
			<span
				className={cn(
					"text-sm font-medium",
					pathname === path ? "border-b-2 border-gray-700" : ""
				)}
			>
				{label}
			</span>
		</div>
	);
}
