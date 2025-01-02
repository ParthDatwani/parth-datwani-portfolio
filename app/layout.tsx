import "../app/globals.css";
import Navbar from "../components/Navbar"; // Ensure this path points to your Navbar component
import Footer from "../components/Footer"; // Ensure this path points to your Footer component
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Parth Datwani</title>
        <meta name="description" content="Personal portfolio website showcasing skills, projects, and resume." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@600&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
      </head>
      <body
        style={{ background: "var(--background)", color: "var(--text-color)" }}
        className="min-h-screen flex flex-col"
      >
        {/* Navbar at the top */}
        <Navbar />

        {/* Main content (dynamic children) */}
        <main className="flex-grow">{children}</main>

        {/* Footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
