"use client";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "../button";
import { Card } from "../card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { Separator } from "../separator";
import Link from "next/link";
import Cart from "../cart";

const HeaderMobile = () => {
  const { status, data } = useSession();
  const handleLoginClick = async () => {
    await signIn();
  };
  const handleLogoutClick = async () => {
    await signOut();
  };
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>
          <div className="mt-2 flex flex-col gap-4">
            {status === "authenticated" && data?.user && (
              <div>
                <div className="my-4 flex items-center gap-2">
                  <Avatar>
                    <AvatarFallback>
                      {data.user.name?.[0].toUpperCase()}
                    </AvatarFallback>
                    {data.user.image && <AvatarImage src={data.user.image} />}
                  </Avatar>
                  <div className="flex flex-col pl-2">
                    <span className=" pt-2 text-base font-medium">
                      {data.user?.name}
                    </span>
                    <p className="text-sm opacity-75">Boas compras!</p>
                  </div>
                </div>
                <Separator />
              </div>
            )}
            {status === "unauthenticated" && (
              <Button
                onClick={handleLoginClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogInIcon size={16} />
                Fazer Login
              </Button>
            )}
            {status === "authenticated" && (
              <Button
                onClick={handleLogoutClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogOutIcon size={16} />
                Fazer Logout
              </Button>
            )}
            <SheetClose asChild>
              <Link href="/">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <HomeIcon size={16} />
                  Início
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/deals">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <PercentIcon size={16} />
                  Ofertas
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/catalog">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <ListOrderedIcon size={16} />
                  Catálogo
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/">
        <h1 className="text-lg font-semibold">
          <span className="text-primary">PauloR</span> Store
        </h1>
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>

        <SheetContent className="w-[350px]">
          <Cart />
        </SheetContent>
      </Sheet>
    </Card>
  );
};

export default HeaderMobile;
