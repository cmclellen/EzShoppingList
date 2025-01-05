import supabase from "./supabase";

interface LoginRequest {
  email: string;
  password: string;
}

interface SignupRequest {
  email: string;
  password: string;
  fullName: string;
}

export async function login({ email, password }: LoginRequest) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function signup({ email, password, fullName }: SignupRequest) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
      },
    },
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
