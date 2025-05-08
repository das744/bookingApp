// index.tsx or Home.tsx
// import { ScrollView } from 'react-native';
// import Banner from '../components/Banner';
// import About from '../components/About';
// import Services  from '../components/Services'
// import Contact from '../components/Contact';

// export default function Home() {
//   return (
//     <ScrollView>
//       <Banner />
//       <About />
//       <Services />
//       <Contact />
//     </ScrollView>
//   );
// }


import React, { useRef } from 'react';
import { View, ScrollView } from 'react-native';
import Navbar from '../components/Navbar'; // adjust the path
import Banner from '../components/Banner';
import About from '../components/About';
import Service from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  // Refs for each section
  const scrollRef = useRef<ScrollView>(null);
  const aboutRef = useRef<View>(null);
  const serviceRef = useRef<View>(null);
  const contactRef = useRef<View>(null);

  // Function to navigate to a specific section
  const onNavigate = (ref: React.RefObject<View>) => {
    if (ref.current && scrollRef.current) {
      ref.current.measureLayout(
        scrollRef.current.getInnerViewNode(), // Get the scroll view inner node
        (x, y) => {
          scrollRef.current?.scrollTo({ y, animated: true }); // Scroll to the specific section
        },
        () => console.error('measureLayout failed')
      );
    }
  };

  return (
    <>
      <Navbar
        onNavigate={onNavigate}
        refs={{ aboutRef, serviceRef, contactRef }} // Pass refs to Navbar
      />
    
      <ScrollView ref={scrollRef}>
        <Banner/>
        <View ref={aboutRef}><About /></View>
        <View ref={serviceRef}><Service /></View>
        <View ref={contactRef}><Contact /></View>
        <Footer/>
      </ScrollView>
    
    </>
  );
}

