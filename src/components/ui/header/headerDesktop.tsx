"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../sheet";
import { Button } from "../button";
import {
  LogInIcon,
  LogOutIcon,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react";
import Cart from "../cart";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { Separator } from "../separator";
import Line from "../line";
const HeaderDesktop = () => {
  const { status, data } = useSession();
  const handleLoginClick = async () => {
    await signIn();
  };
  const handleLogoutClick = async () => {
    await signOut();
  };
  return (
    <div className="mx-24 my-10 flex flex-row justify-between">
      <div>
        <Link href="/">
          <h1 className="text-2xl font-semibold">
            <span className="text-primary">PauloR</span> Store
          </h1>
        </Link>
      </div>

      {/* Inicio Catálogo e Ofertas */}
      <div className="flex flex-row gap-5">
        <Link href="/">
          <h1 className="font-bold">Início </h1>
        </Link>
        <Line />
        <Link href="/catalog">
          <h1 className="font-bold"> Catálogo</h1>
        </Link>
        <Line />
        <Link href="/deals">
          <h1 className="font-bold">Ofertas </h1>
        </Link>
      </div>

      {/* Login e Carrinho */}
      <div className="flex flex-row gap-5">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <UserIcon />
            </Button>
          </SheetTrigger>

          <SheetContent side="right">
            {status === "authenticated" && data?.user && (
              <div>
                <div className="my-4 flex items-center gap-2">
                  <Avatar>
                    <AvatarFallback>
                      {data.user.name?.[0].toUpperCase()}
                    </AvatarFallback>
                    {data.user.image && <AvatarImage src={data.user.image} />}
                  </Avatar>
                  <div className="flex flex-col pr-2">
                    <span className="pt-2 text-base font-medium">
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
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <ShoppingCartIcon />
            </Button>
          </SheetTrigger>

          <SheetContent side="right">
            <Cart />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default HeaderDesktop;
