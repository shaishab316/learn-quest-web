"use client";

import { AuthLayout } from "@/components/AuthLayout";

export default function AuthLayoutPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthLayout>{children}</AuthLayout>;
}
