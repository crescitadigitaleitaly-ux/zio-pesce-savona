import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import BackToTop from '@/components/BackToTop';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ziopesce.crescitadigitaleitalia.com'),
  title: {
    default: 'Zio Pesce | Ristorante di Pesce e Pizzeria – Savona Darsena',
    template: '%s | Zio Pesce Savona',
  },
  description: 'Ristorante di pesce fresco e pizzeria gourmet nella Darsena di Savona. Ostriche, crudi, pasta di mare, pizza al nero di seppia. Prenota ora o ordina asporto.',
  keywords: ['ristorante pesce Savona', 'pizzeria Savona Darsena', 'pizza nero di seppia', 'ristorante Darsena Savona', 'pesce fresco Savona', 'ristorante vista marina Savona'],
  openGraph: {
    title: 'Zio Pesce | Ristorante di Pesce e Pizzeria – Savona',
    description: 'Nel cuore della Darsena di Savona, il mare è nel piatto. Pesce fresco, pizza gourmet al nero di seppia e accoglienza di casa dal 2015.',
    url: 'https://ziopesce.crescitadigitaleitalia.com',
    siteName: 'Zio Pesce',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: '/images/interior/un-dehor-grande-dove.jpg', width: 1200, height: 630, alt: 'Zio Pesce ristorante Darsena Savona' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zio Pesce | Ristorante di Pesce – Savona',
    description: 'Pesce fresco, pizza gourmet al nero di seppia nella Darsena di Savona.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://ziopesce.crescitadigitaleitalia.com' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Zio Pesce',
  alternateName: 'Zio Pesce – Ristorante e Pizzeria',
  url: 'https://ziopesce.crescitadigitaleitalia.com',
  telephone: '+393933304614',
  email: 'info@crescitadigitaleitalia.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Antonio Baglietto 8R',
    addressLocality: 'Savona',
    addressRegion: 'Liguria',
    postalCode: '17100',
    addressCountry: 'IT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 44.3092,
    longitude: 8.4811,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '12:00',
      closes: '15:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '19:00',
      closes: '23:00',
    },
  ],
  servesCuisine: ['Seafood', 'Italian', 'Ligurian', 'Pizza'],
  priceRange: '€€',
  image: '/images/interior/un-dehor-grande-dove.jpg',
  description: 'Ristorante di pesce fresco e pizzeria gourmet nella Darsena di Savona. Dal 2015, ostriche, crudi, pasta di mare e pizza al nero di seppia.',
  founder: {
    '@type': 'Person',
    name: 'Andrea Colombo',
  },
  foundingDate: '2015',
  acceptsReservations: true,
  hasMenu: 'https://ziopesce.crescitadigitaleitalia.com/menu',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased pb-32 lg:pb-0" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
        <CartProvider>
          <Navigation />
          <CartDrawer />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
          <BackToTop />
        </CartProvider>
      </body>
    </html>
  );
}
