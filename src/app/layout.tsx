import './globals.css'
export const metadata = {
  title: "Bahran | Portfolio",
  description: "A responsive portfolio built with Next.js and Tailwind CSS.",
};
export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
