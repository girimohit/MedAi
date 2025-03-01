import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      {/* <nav className="flex-no-wrap fixed top-0 flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 lg:flex-wrap lg:justify-start lg:py-4 dark:bg-neutral-600 dark:shadow-black/10"> */}
      {/* <div className="bg-opacity-20 bg- bg-opacity-20 flex items-center justify-center gap-16 rounded-3xl border border-gray-700 bg-black bg-clip-padding p-3 px-10 backdrop-blur-lg backdrop-filter"> */}

      <nav className="fixed z-30 mt-4 flex w-full items-center justify-center">
        <div className="text-md flex h-12 w-full items-center justify-around rounded-full border-[0.11px] border-[#3e3e3e] bg-gray-400/20 p-1 text-[#121212] backdrop-blur-[20px] md:w-[50%] dark:bg-gray-900/20 dark:text-white">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Dashboard</Link>
          <Link href={"/"}>Support</Link>
          <SignedOut>
            <Link
              href={"/sign-in"}
              className=" transition-all delay-75 hover:text-lg focus:text-xl"
            >
              SignIn
            </Link>
            {/* <SignInButton />
            <SignUpButton /> */}
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
