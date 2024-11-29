const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
  
    const handleUser = async () => {
      const user = await getCurrentUser();
  
      setUser(user);
      setIsLoading(false);
    };
  
    useEffect(() => {
      handleUser();
    }, [isLoading]);
  
    return (
      <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
        {children}
      </UserContext.Provider>
    );
  };