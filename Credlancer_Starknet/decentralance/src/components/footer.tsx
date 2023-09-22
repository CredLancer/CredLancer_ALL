import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="z-10 mt-auto flex w-full flex-col md:flex-row items-center justify-between">
      <Link href="/about">devfolio</Link>
      <span className="text-center">
        built by{" "}
        <Link
          className="text-blue-400 hover:underline"
          href="https://github.com/noeljarillo"
          rel="noopener noreferrer"
          target="_blank"
        >
          @noeljarilo
        </Link>{" "}
        <Link
          className="text-blue-400 hover:underline"
          href="https://github.com/tachysheurisko"
          rel="noopener noreferrer"
          target="_blank"
        >
          @tachysheurisko
        </Link>{" "}
        <Link
          className="text-blue-400 hover:underline"
          href="https://github.com/walde-dev"
          rel="noopener noreferrer"
          target="_blank"
        >
          @walde-dev
        </Link>{" "}
        during ETHMunich 2023
      </span>
    </footer>
  );
};
