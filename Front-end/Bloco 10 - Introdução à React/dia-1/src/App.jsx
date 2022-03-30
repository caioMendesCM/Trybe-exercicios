import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

// const test = ['a', 'b', 'c', 'd'];

// const Task = (value) => {
//   return (
//     <li key={value}>{value}</li>
//   );
// }

function App() {
  return (
    <div>
      <Header/>
      <Content/>
      <Footer />
    </div>
  );
}

export default App;
