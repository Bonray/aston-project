import { useSelector } from "react-redux";

const useAuth = () => {
  const { isAuth } = useSelector(state => state.auth);
  
  return { isAuth };
}

export default useAuth;