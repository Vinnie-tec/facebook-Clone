import Image from "next/image";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="grid place-items-center m-auto">
      <Image
        src="https://i.pinimg.com/originals/7c/cb/40/7ccb40e2fa23d39346cc9dc8691d68b3.jpg"
        alt=""
        width={100}
        height={100}
        objectFit="contain"
      />
      <h1
        onClick={signIn}
        className="p-4 bg-gray-100 rounded-full text-center text-black mt-5 cursor-pointer"
      >
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
