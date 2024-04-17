import { useState } from "react";
import { useAuth } from "../contex/authContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";

const useSignup = () => {
  const { login: authLogin } = useAuth() || {};

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const registerUser = async (values) => {
    if (values?.password !== values?.passwordConfirm) {
      return setError("Passwords do not match");
    }
    try {
      setError(null);
      setLoading(true);
      const res = await axios.post(
        "http://localhost:8080/api/auth/signup",
        values
      );

      setResponse(res.data);

      if (res.status === 200 || res.status === 201) {
        authLogin(res.data.token, res.data.user);
        toast.success("User registered successfully!");
      } else if (res.status === 400) {
        setError(res.data.message);
      } else {
        setError(`Unexpected response status: ${res.status}`);
      }
    } catch (error) {
      toast.error("User Alrady Exists");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, response, registerUser };
};

export default useSignup;
