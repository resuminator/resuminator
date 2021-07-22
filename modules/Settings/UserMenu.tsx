import { Avatar, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useRouter } from "next/router";
import nookies from "nookies";
import { useEffect, useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { DISCORD_INVITE } from "../../data/RefLinks";
import { useCustomToast } from "../../hooks/useCustomToast";
import firebaseSDK from "../../services/firebase";
import { useAuth } from "../Auth/AuthContext";

const UserMenu = () => {
  const auth = useAuth();
  const router = useRouter();
  const [avatar, setAvatar] = useState("");
  const { createToast } = useCustomToast();

  const routeTo = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    if (auth.user) {
      setAvatar(auth.user.photoURL);
    }
  }, [auth]);

  const handleLogout = () => {
    firebaseSDK
      .auth()
      .signOut()
      .then(() => nookies.destroy({}, "token"))
      .then(() => router.push("/login"))
      .then(() => {
        return createToast("You have been successfully logged out", "success");
      });
  };

  return (
    <Menu isLazy>
      <MenuButton>
        <Avatar size="md" src={avatar} />
      </MenuButton>
      <MenuList>
        {/* <MenuItem icon={<FiUser />}>Profile</MenuItem> */}
        <MenuItem icon={<FiSettings />} onClick={() => routeTo("/settings")}>
          Settings
        </MenuItem>
        {/* <Divider /> */}
        {/* <MenuItem icon={<FiBook />}>Guides</MenuItem> */}
        <MenuItem
          icon={<FaDiscord />}
          as="a"
          href={DISCORD_INVITE}
          target="_blank"
        >
          Join Discord Server
        </MenuItem>
        {/* <MenuItem icon={<FiHelpCircle />}>Help Center</MenuItem> */}
        {/* <Divider /> */}
        <MenuItem icon={<FiLogOut />} onClick={handleLogout}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
