import { useToast, UseToastOptions } from "@chakra-ui/react";
import { getUniqueID } from "../utils";

/**Custom Toast Hook for Creating a toast with fixed values
 * @returns createToast - Function to genereate toasts
 */
export const useCustomToast = () => {
  const toast = useToast();

  const createToast = (
    title: string,
    status: "error" | "info" | "warning" | "success",
    description = "",
    id = getUniqueID(),
    options?: UseToastOptions
  ) => {
    if (!toast.isActive(id)) {
      toast({
        id,
        title,
        status,
        description,
        variant: "solid",
        duration: 5000,
        isClosable: true,
        ...options,
      });
    }
  };

  return { toast, createToast };
};
