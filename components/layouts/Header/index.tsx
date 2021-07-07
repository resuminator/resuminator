import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import useResumeStore from "../../../store/resume.store";
import { LogoSquare } from "../Logos";
import NavTabs from "../NavTabs";
import UserMenu from "../../../modules/Settings/UserMenu";

const Header = () => {
  const router = useRouter();
  const savedState = useResumeStore((state) => state._id);
  const id = router.query.id ? router.query.id : savedState;

  return (
    <Box
      my={{ base: "1rem" }}
      px={{ md: "4rem", lg: "7rem" }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <LogoSquare />
      <NavTabs id={id} currentRoute={router.pathname} />
      <UserMenu />
    </Box>
  );
};

export default Header;
