import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoadingLogin } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      console.log(user);
      navigate("/");
    },
    onError: (err) => {
      console.error(err);
      toast.error(err.message);
    },
  });

  return { login, isLoadingLogin };
}
