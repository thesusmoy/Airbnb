import React, { useState } from "react";
import { hosts } from "@/helping-data/navbar.helper";

import Image from "next/image";
import { Card, CardContent, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
export default function ChoosingHost() {
	const [selected, setSelected] = useState("");
	return (
		<div className="space-y-10">
			<h3 className="text-3xl font-medium text-center ">
				What would you like to host?
			</h3>

			<ul className="grid grid-cols-3 gap-10">
				{hosts.map((item) => (
					<li key={item.name}>
						<Card
							onClick={() => setSelected(item.name)}
							className={cn(
								"cursor-pointer",
								selected === item.name
									? "ring ring-black"
									: "ring-0"
							)}
						>
							<CardContent>
								<Image
									src={item.icon}
									height={200}
									width={200}
									alt={item.name}
									className="mx-auto h-full w-full object-center object-cover"
								/>

								<CardTitle className="text-center mt-5">
									{item.name}
								</CardTitle>
							</CardContent>
						</Card>
					</li>
				))}
			</ul>

			<div className="flex items-center justify-end">
				<Button
					className={cn(
						!selected.length
							? "bg-gray-300 text-gray-600 cursor-not-allowed"
							: "bg-black text-white cursor-pointer"
					)}
					disabled={!selected}
					size={"lg"}
				>
					Next
				</Button>
			</div>
		</div>
	);
}
