"use client";
import Image from "next/image";
import Input from "@/app/auth/components/Input";
import { useCallback, useEffect, useState } from "react";
import logo from "@/public/images/logo.png";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  getRedirectResult,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";
import { GithubProvider, GoogleProvider, auth } from "@/lib/firebase";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const [variant, setVariant] = useState("login");
  const toogleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  useEffect(() => {
    getRedirectResult(auth).then(async (userCred) => {
      if (!userCred) {
        return;
      }

      fetch("/api/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${await userCred.user.getIdToken()}`,
        },
      }).then((response) => {
        if (response.status === 200) {
          router.replace("/profiles");
        }
      });
    });
  }, [router]);

  function signInWithGoogle() {
    signInWithRedirect(auth, GoogleProvider);
  }
  function signInWithGithub() {
    signInWithRedirect(auth, GithubProvider);
  }
  async function signInWithPassword(email: string, password: string) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        throw error;
      }
    }
    let idToken;
    if (auth.currentUser) {
      idToken = await auth.currentUser.getIdToken();
    }
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });

    if (response.status === 200) {
      router.replace("/profiles");
    }
  }

  return (
    <main className="relative size-full bg-no-repeat bg-center bg-fixed bg-cover bg-[url('/images/hero.jpg')]">
      <div className="bg-black size-full md:bg-opacity-50">
        <nav className="p-5">
          <Image
            src={logo}
            alt="netflix logo"
            className="w-24 h-auto"
            priority
          ></Image>
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 p-8 self-center mt-2 md:w-2/5 md:max-w-md rounded-md w-full">
              <h2 className="text-white text-4xl mb-8 font-semibold">
                {variant === "login" ? "Sign in" : "Register"}
              </h2>
              <div className="flex flex-col gap-4">
                {variant === "register" && (
                  <Input
                    label="Username"
                    id="Username"
                    type="text"
                    value={username}
                    onChange={(ev: any) => setUsername(ev.target.value)}
                  />
                )}
                <Input
                  label="Email"
                  id="Email"
                  type="email"
                  value={email}
                  onChange={(ev: any) => setEmail(ev.target.value)}
                />
                <Input
                  label="Password"
                  id="Password"
                  type="password"
                  value={password}
                  onChange={(ev: any) => setPassword(ev.target.value)}
                />
              </div>
              <button
                className="bg-red-600 py-3 text-white w-full mt-10 rounded-md hover:bg-red-700 transition cursor-pointer disabled:bg-red-900"
                disabled={!email || !password}
                onClick={() => {
                  signInWithPassword(email, password);
                }}
              >
                {variant === "login" ? "Login" : "Sign up"}
              </button>
              <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                <button
                  className="bg-white size-10 rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 transition"
                  onClick={() => {
                    signInWithGoogle();
                  }}
                >
                  <FcGoogle size={20} />
                </button>
                <button
                  className="bg-white size-10 rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 transition"
                  onClick={() => {
                    signInWithGithub();
                  }}
                >
                  <FaGithub size={20} />
                </button>
              </div>
              <p className="text-neutral-500 mt-12">
                {variant === "login"
                  ? "First time using Netflix? "
                  : "Already have an account? "}
                <span
                  onClick={toogleVariant}
                  className="text-white hover:underline cursor-pointer"
                >
                  {variant === "login" ? "Create an account" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </nav>
      </div>
    </main>
  );
};

export default Auth;
