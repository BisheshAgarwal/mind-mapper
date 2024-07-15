import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Invite Members
        </Button>
      </DialogTrigger>
      <DialogTitle>
        <VisuallyHidden></VisuallyHidden>
      </DialogTitle>
      <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">
        <OrganizationProfile routing="hash" />
      </DialogContent>
    </Dialog>
  );
};
