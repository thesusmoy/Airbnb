import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type CustomModalProps = {
	trigger: React.ReactNode;
	children: React.ReactNode;
	className?: string;
};

export function CustomModal({
	trigger,
	children,
	className,
}: CustomModalProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent
				className={cn(
					"w-full h-auto p-5 md:p-10 sm:max-w-xl",
					className
				)}
			>
				<DialogHeader className="sr-only">
					<DialogTitle>Edit profile</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when
						you&apos;re done.
					</DialogDescription>
				</DialogHeader>

				{children}
			</DialogContent>
		</Dialog>
	);
}
