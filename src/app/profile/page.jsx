"use client";

import { UserProfileModal } from "@/components/UserProfileModal";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const ProfilePage = () => {
  const { data, isPending } = authClient.useSession();

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  const user = data?.user;

  return (
    <div className="p-10 flex border max-w-5xl mx-auto flex-col items-center justify-center mt-5 space-y-5 shadow">
      <Image
        src={user?.image || "/user.png"}
        alt="User"
        width={300}
        height={200}
        className="rounded-full "
      />

      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
      <UserProfileModal/>
    </div>
  );
};

export default ProfilePage;