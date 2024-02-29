import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const profileLinks = [
  { label: "Profile" },
  { label: "Billing" },
  { label: "Subscription" },
  { label: "Log Out" },
];

export const ProfileButton: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={"/img/shadcn.jpg"} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {profileLinks
          .slice(0, profileLinks.length - 1)
          .map((profileLink, index) => (
            <DropdownMenuItem key={index} className={"cursor-pointer"}>
              {profileLink.label}
            </DropdownMenuItem>
          ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className={"cursor-pointer"}>
          {profileLinks[profileLinks.length - 1].label}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
