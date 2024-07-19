import { createContext, useState } from "react";
import { useGetUser } from "../hooks/useGetUser";
import { useGetRepos } from "../hooks/useGetRepos";
import GlobalStyles from "../styles/GlobalStyles";
import { AppContainer } from "../styles/AppComponents";

export const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [keyword, setKeyword] = useState("");

  const { user, error, isFetching, isInitialLoading } = useGetUser(keyword);
  const { repos, reposLoading } = useGetRepos(keyword);

  return (
    <ProfileContext.Provider
      value={{
        setKeyword,
        user,
        error,
        isFetching,
        isInitialLoading,
        repos,
        reposLoading,
      }}
    >
      <AppContainer>
        <GlobalStyles />
        {children}
      </AppContainer>
    </ProfileContext.Provider>
  );
}
