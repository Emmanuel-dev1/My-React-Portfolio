import { ReactNode } from 'react';
import ModernHeader from '../components/ModernHeader';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen">
      <ModernHeader />
      <main className="pt-20">{children}</main>
      <div className="p-4">Footer placeholder</div>
    </div>
  );
}
