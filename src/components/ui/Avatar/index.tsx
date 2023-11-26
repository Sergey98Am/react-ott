import * as AvatarPrimitive from "@radix-ui/react-avatar";

import Avatar from "./AvatarComponent";
import AvatarImage from "./Image";
import AvatarFallback from "./Fallback";

Avatar.displayName = AvatarPrimitive.Root.displayName;
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
