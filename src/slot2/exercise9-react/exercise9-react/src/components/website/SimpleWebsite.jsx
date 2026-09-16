import React from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

// Exercise 5: Create Simple Website
// Composes Header, About, Contact and Footer into one page.
function SimpleWebsite() {
  return (
    <div className="simple-website">
      <Header />
      <main>
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default SimpleWebsite;
