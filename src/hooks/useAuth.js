import { useSelector } from "react-redux";

const useAuth = () => {
  const { isAuth, email, token, id } = useSelector(state => state.user);
  
  return { isAuth, email, token, id };
}

export default useAuth;