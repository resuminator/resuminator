import { useToast } from "@chakra-ui/react";

/**Custom Toast Hook for Creating a toast with fixed values
 * @returns createToast - Function to genereate toasts
 */
export const useCustomToast = () => {
  const toast = useToast();

  const createToast = (
    title: string,
    status: "error" | "info" | "warning" | "success",
    description = ""
  ) =>
    toast({
      title,
      status,
      description,
      variant: "solid",
      duration: 5000,
      isClosable: true,
    });

  return { createToast };
};
