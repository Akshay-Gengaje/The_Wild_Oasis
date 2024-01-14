import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../settings/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import supabase from "../../services/supabase";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) =>
      loginApi({ email: email, password: password }),
    onSuccess: (user) => {
      queryClient.setQueriesData(["user"], user);
      console.log("Success", user);
      navigate("/dashboard");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Provided email and password do not match");
    },
  });

  return { login, isLoading };
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session) return null;

  const { data, error } = await supabase.auth.getUser();
  console.log(data);

  if (error) throw new Error(error);
  return data?.user;
}
