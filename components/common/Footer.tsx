import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logoFull.png"
            alt="logo"
            width={130}
            height={38}
          />
        </Link>
        <p>2023 Event Realm. All Rights Reserved</p>
      </div>
    </footer>
  );
};
