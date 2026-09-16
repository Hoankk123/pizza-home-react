import React from 'react';
import './App.css';

import Greeting from './components/Exercise1_Greeting';
import HelloWorld from './components/Exercise2_HelloWorld';
import Counter from './components/Exercise3_Counter';
import SimpleCard from './components/card/SimpleCard';
import SimpleWebsite from './components/website/SimpleWebsite';
import BootstrapWebsite from './components/bootstrap-website/BootstrapWebsite';

const sampleItem = {
  title: 'A Title',
  description: 'The description goes here.',
  imageUrl: '', // leave empty to show the "IMG" placeholder like the sample
};

function App() {
  return (
    <div className="app">
      <h1 className="app-heading">Exercise 9: React Component</h1>

      <section>
        <h2 className="section-label">1. Greeting</h2>
        <Greeting />
      </section>

      <section>
        <h2 className="section-label">2. Hello, World!</h2>
        <HelloWorld />
      </section>

      <section>
        <h2 className="section-label">3. Counter</h2>
        <Counter />
      </section>

      <section>
        <h2 className="section-label">4. Simple Card</h2>
        <SimpleCard item={sampleItem} />
      </section>

      <section>
        <h2 className="section-label">5. Simple Website</h2>
        <SimpleWebsite />
      </section>

      <section>
        <h2 className="section-label">
          Exercise 10: Demo about React-Bootstrap
        </h2>
        <BootstrapWebsite />
      </section>
    </div>
  );
}

export default App;
