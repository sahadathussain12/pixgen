"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { CgProfile } from "react-icons/cg";

export function UserProfileModal() {
  const onSubmit = async (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const image = e.target.image.value;

  const { data, error } = await authClient.updateUser({
    name,
    image,
  });

  if (error) {
    console.log(error);
    return;
  }

  console.log(data);
};
  return (
    <Modal>
      <Button variant="secondary">Update Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CgProfile className="size:5" />
              </Modal.Icon>
              <Modal.Heading>Update profile</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField
                    className="w-full"
                    name="name"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="image"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Image Url</Label>
                    <Input placeholder="Enter your image Url" />
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">
                      Save
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
