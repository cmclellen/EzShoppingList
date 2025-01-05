import supabase from "./supabase";

interface LoginRequest {
  email: string;
  password: string;
}

interface SignupRequest {
  email: string;
  password: string;
  fullName: string;
  avatarUrl: string;
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

export async function signup({
  email,
  password,
  fullName,
  avatarUrl,
}: SignupRequest) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatarUrl,
      },
    },
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function logOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}
