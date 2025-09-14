import React from "react";
import { CustomModal } from "../../common/custom-modal";
import { Button } from "../../ui/button";
import ChoosingHost from "./choosing-host";
import HelpPopover from "./help-popover";

import { useTranslations } from "next-intl";
import Language from "./language";

export default function RightSide() {
	const t = useTranslations("Navbar.rightSide");

	return (
		<div className="flex items-center gap-x-3">
			<div className="hidden xl:block">
				<CustomModal
					trigger={
						<Button
							variant="ghost"
							className="rounded-full px-4 cursor-pointer"
						>
							{t("become-a-host")}
						</Button>
					}
					className="md:max-w-5xl min-h-[500px]"
				>
					<ChoosingHost />
				</CustomModal>
			</div>

			<Language />

			<HelpPopover />
		</div>
	);
}
