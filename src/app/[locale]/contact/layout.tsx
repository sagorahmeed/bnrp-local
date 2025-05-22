import { ReactNode } from "react";

export const metadata = {
    title: 'Contact - Bangladesh Navy',
    description: 'this is home',
};

interface ContactLayoutProps {
    children: ReactNode;
}

export default function ContactLayout({ children } : ContactLayoutProps) {
    return <>{children}</>;
}
