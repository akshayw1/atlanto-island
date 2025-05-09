
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      
        <div className='relative flex min-h-screen flex-col'>
          
          <div className="flex-1">{children}</div>
        </div>
      
  
    </div>
  );
}
