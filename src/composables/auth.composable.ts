import { useAuthStore } from "~/store";

export const useAuth = () => {
  const { user, token, CLEAR_AUTH } = useAuthStore();

  const isAuthenticated = user !== undefined && token !== undefined;

  const checkAuth = () => {
    if (!isAuthenticated) {
      window.location.replace("/auth/login");
    }
  };

  const logout = () => {
    CLEAR_AUTH();

    window.location.replace("/auth/login");
  };

  return {
    isAuthenticated,
    checkAuth,
    logout,
  };
};
