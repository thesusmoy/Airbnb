import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { imageHelper } from "@/assets/images/images";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import MobileBottom from "./mobile-bottom-fixed-part";

import MobileNavbarModal from "./mobile-navbar-modal";
export default function MobileNavbar() {
	const pathname = usePathname();
	const SCROLL_THRESHOLD = 20;
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			const y = window.scrollY;
			setIsScrolled(y > SCROLL_THRESHOLD);
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<React.Fragment>
			<header className="sticky top-0 z-50 px-5 pt-4  bg-white space-y-4">
				<MobileNavbarModal />

				<motion.div
					key="middleNav"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 10 }}
					transition={{ type: "spring", stiffness: 220, damping: 22 }}
					className="flex items-center justify-center gap-x-14"
				>
					<div className="flex items-center flex-col justify-center">
						<Image
							src={imageHelper.home}
							height={40}
							width={40}
							alt="home"
							className={cn(
								"duration-200",
								isScrolled ? "hidden" : "block"
							)}
						/>
						<span
							className={cn(
								"text-sm font-medium",
								pathname === "/"
									? "border-b-4 border-gray-700"
									: ""
							)}
						>
							Home
						</span>
					</div>
					<div className="flex items-center flex-col justify-center">
						<Image
							src={imageHelper.experience}
							height={40}
							width={40}
							alt="experience"
							className={cn(
								"duration-200",
								isScrolled ? "hidden" : "block"
							)}
						/>
						<span
							className={cn(
								"text-sm font-medium",
								pathname === "/experiences"
									? "border-b-4 border-gray-700"
									: ""
							)}
						>
							Experience
						</span>
					</div>
					<div className="flex items-center flex-col justify-center">
						<Image
							src={imageHelper.service}
							height={40}
							width={40}
							alt="service"
							className={cn(
								"duration-200",
								isScrolled ? "hidden" : "block"
							)}
						/>
						<span
							className={cn(
								"text-sm font-medium",
								pathname === "/services"
									? "border-b-4 border-gray-700"
									: ""
							)}
						>
							Service
						</span>
					</div>
				</motion.div>
			</header>

			<MobileBottom isScrolled={isScrolled} />
		</React.Fragment>
	);
}
