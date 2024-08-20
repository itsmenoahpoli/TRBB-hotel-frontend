import { useAuthStore } from "~/store";

export const useAuth = () => {
  const { user, token } = useAuthStore();

  const isAuthenticated = user !== undefined && token !== undefined;

  const checkAuth = () => {
    if (!isAuthenticated) {
      window.location.replace("/auth/login");
    }
  };

  return {
    isAuthenticated,
    checkAuth,
  };
};
