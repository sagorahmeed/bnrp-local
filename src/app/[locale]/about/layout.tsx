import { ReactNode } from "react";
import type { Metadata } from "next";


interface AboutLayoutProps {
    children : ReactNode
}

export const metadata : Metadata = {
    title: 'Gallery - Bangladesh Navy',
    description: 'this is home',
};

export default function AboutLayout({ children } : AboutLayoutProps) {
    return <>{children}</>;
}
