import React, { useState } from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../../ui/button";
import { CircleQuestionMark, Menu } from "lucide-react";
import Image from "next/image";
import { imageHelper } from "@/assets/images/images";
import { useTranslations } from "next-intl";
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

interface User {
    name: string;
    email: string;
    picture?: string;
}

export default function HelpPopover() {
	const t = useTranslations("Navbar.rightSide.help-center");
	const [user, setUser] = useState<User | null>(null);

	const handleLoginSuccess = (credentialResponse: CredentialResponse) => {
        if (credentialResponse.credential) {
            const decoded: User = jwtDecode(credentialResponse.credential);
            setUser(decoded);
        }
	};

    const handleLoginError = () => {
        console.log('Login Failed');
    };

	const handleLogout = () => {
		setUser(null);
	};

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="secondary"
					className="rounded-full cursor-pointer  size-10 "
				>
					<Menu />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="px-0">
				<ul className=" w-full *:hover:bg-accent">
					<li className="px-5 py-1 inline-flex items-center gap-x-3 text-base font-light w-full">
						<CircleQuestionMark />
						<span>{t("index")}</span>
					</li>
					<li className="px-5 py-2 flex items-center gap-x-3 text-base font-light w-full">
						<p className="font-semibold text-sm">
							{t("become-a-host")} <br />
							<span className="text-xs font-light">
								{t("short-info")}
							</span>
						</p>
						<Image
							src={imageHelper.helpingWomen}
							height={40}
							width={40}
							alt="helping-woman"
						/>
					</li>

					<li className="px-5 pt-2 border-t pb-1">
						{t("refer-host")}
					</li>
					<li className="px-5 py-1">{t("cohost")}</li>

					<li className="px-5 pb-2 border-b pt-1">
						{t("gift-cards")}
					</li>
					{user ? (
						<li className="px-5 py-2">
							<div className="flex items-center gap-x-3">
                                {user.picture && <Image src={user.picture} alt={user.name} width={40} height={40} className="rounded-full" />}
								<div>
									<p className="font-semibold">{user.name}</p>
									<Button
										onClick={handleLogout}
										variant="link"
										className="p-0 h-auto text-xs text-red-500"
									>
										Logout
									</Button>
								</div>
							</div>
						</li>
					) : (
						<li className="px-5 py-2">
                            <GoogleLogin
                                onSuccess={handleLoginSuccess}
                                onError={handleLoginError}
                            />
						</li>
					)}
				</ul>
			</PopoverContent>
		</Popover>
	);
}
