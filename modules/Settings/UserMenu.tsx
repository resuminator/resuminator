import {
  Avatar,
  Divider,
  HStack,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
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
  const [user, setUser] = useState({
    photoUrl: "",
    displayName: "",
    email: "",
  });
  const { createToast } = useCustomToast();

  const routeTo = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    if (auth.user) {
      setUser({
        displayName: auth.user.displayName || "",
        photoUrl: auth.user.photoURL || "",
        email: auth.user.email,
      });
    }
  }, [auth]);

  const handleLogout = () => {
    firebaseSDK
      .auth()
      .signOut()
      .then(() => nookies.destroy(undefined, "token", { path: "/" }))
      .then(() => router.push("/login"))
      .then(() => {
        return createToast("You have been successfully logged out", "success");
      });
  };

  return (
    <Menu isLazy>
      <MenuButton>
        <Avatar size="md" src={user.photoUrl} />
      </MenuButton>
      <MenuList>
        <MenuItem
          isFocusable={false}
          fontWeight="medium"
          display="flex"
          alignItems="flex-start"
          flexDir="column"
          pb="4"
          pointerEvents="none"
        >
          <Text
            fontSize="xs"
            textTransform="uppercase"
            fontWeight="semibold"
            mb="2"
            color={useColorModeValue("blue.500", "blue.200")}
          >
            Logged in as
          </Text>
          <VStack alignItems="flex-start" spacing="1">
            <Text fontSize="md">{user.displayName}</Text>
            <Text fontSize="xs">{user.email}</Text>
          </VStack>
        </MenuItem>
        <Divider />
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
