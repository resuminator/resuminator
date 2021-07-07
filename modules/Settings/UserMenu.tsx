import {
  Divider,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaDiscord } from "react-icons/fa";
import {
  FiBook,
  FiCheckCircle,
  FiHelpCircle,
  FiLogOut,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import UserAvatar from "../../components/layouts/Header/UserAvatar";
import useUserStore from "../User/store";

const UserMenu = () => {
  const userAvatar = useUserStore((state) => state.avatar);
  const router = useRouter();

  const routeTo = (path: string) => {
    router.push(path);
  };

  return (
    <Menu isLazy>
      <MenuButton>
        <UserAvatar as={IconButton} src={userAvatar} />
      </MenuButton>
      <MenuList>
        <MenuItem icon={<FiUser />}>Profile</MenuItem>
        <MenuItem icon={<FiSettings />} onClick={() => routeTo("/settings")}>
          Settings
        </MenuItem>
        <MenuItem
          icon={<FiCheckCircle />}
          onClick={() => routeTo("/settings/preferences")}
        >
          Preferences
        </MenuItem>
        <Divider />
        <MenuItem icon={<FiBook />}>Guides</MenuItem>
        <MenuItem icon={<FaDiscord />}>Join Discord Channel</MenuItem>
        <MenuItem icon={<FiHelpCircle />}>Help Center</MenuItem>
        <Divider />
        <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
