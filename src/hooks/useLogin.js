import { useState } from "react";
import { useAuth } from "../contex/authContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";

const useLogin = () => {
  const { login: authLogin } = useAuth() || {};

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const loginUser = async (values) => {
    try {
      setError(null);
      setLoading(true);
      const res = await axios.post(
        "http://localhost:8080/api/auth/login",
        values
      );

      setResponse(res.data);

      if (res.status === 200) {
        authLogin(res.data.token, res.data.user);
        toast.success("User Logged successfully!");
      } else if (res.status === 404) {
        setError(res.data.message);
      } else {
        setError(`Unexpected response status: ${res.status}`);
      }
    } catch (error) {
      toast.error("User Not Found");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, response, loginUser };
};

export default useLogin;
