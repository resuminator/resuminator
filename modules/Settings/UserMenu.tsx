import {
  Avatar,
  Divider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaDiscord } from "react-icons/fa";
import {
  FiLogOut,
  FiSettings
} from "react-icons/fi";
import { DISCORD_INVITE } from "../../data/RefLinks";
import { useAuth } from "../Auth/AuthContext";

const UserMenu = () => {
  const auth = useAuth();
  const router = useRouter();
  const [avatar, setAvatar] = useState("");

  const routeTo = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    if (auth.user) {
      setAvatar(auth.user.photoURL);
    }
  }, [auth]);

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
        <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
