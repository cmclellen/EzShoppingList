import supabase from "./supabase";

interface LoginRequest {
  email: string;
  password: string;
}

export async function login({ email, password }: LoginRequest) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }
  console.log(data);
  return data;
}
