import { ReactNode } from "react";

export const metadata = {
    title: 'Gallery - Bangladesh Navy',
    description: 'this is home',
};

interface GalleryLayoutProps {
    children: ReactNode;
}

export default function GalleryLayout({ children } : GalleryLayoutProps) {
    return <>{children}</>;
}
