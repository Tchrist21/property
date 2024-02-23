import '@/assets/styles/global.css'

export const metadata = {
  title: 'Property Site | Find the Perfect Unit',
  description: 'Find Your next Unit',
  keywords: 'property, units, apartments, houses'
}

const MainLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
    <div>
      {children}
    </div>
    </body>
    </html>
  );
}

export default MainLayout;
