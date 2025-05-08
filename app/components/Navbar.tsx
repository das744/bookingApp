// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// type NavbarProps = {
//   scrollToSection: (section: string) => void;
// };

// export default function Navbar({ scrollToSection }: NavbarProps) {
//   return (
//     <View style={styles.navbar}>
//       <Text style={styles.logo}>MyLogo</Text>
//       <View style={styles.menu}>
//         <TouchableOpacity onPress={() => scrollToSection('about')}>
//           <Text style={styles.link}>About</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => scrollToSection('services')}>
//           <Text style={styles.link}>Services</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => scrollToSection('contact')}>
//           <Text style={styles.link}>Contact</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   navbar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 16,
//     backgroundColor: '#fff',
//     elevation: 4,
//   },
//   logo: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   menu: {
//     flexDirection: 'row',
//     gap: 16,
//   },
//   link: {
//     fontSize: 16,
//     color: '#007bff',
//   },
// });


import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Type definition for Navbar props
type NavbarProps = {
  onNavigate: (ref: React.RefObject<View>) => void;
  refs: {
    aboutRef: React.RefObject<View>;
    serviceRef: React.RefObject<View>;
    contactRef: React.RefObject<View>;
  };
};

export default function Navbar({ onNavigate, refs }: NavbarProps) {
  const [open, setOpen] = useState(false); // State to toggle the dropdown menu

  return (
    <View style={styles.navbar}>
      <Text style={styles.logo}>MyApp</Text>
      
      {/* Menu button toggles the dropdown */}
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <Text style={styles.menuButton}>{open ? 'X' : '☰'}</Text>
      </TouchableOpacity>
      
      {/* Dropdown menu with links */}
      {open && (
        <View style={styles.dropdown}>
          <TouchableOpacity onPress={() => { onNavigate(refs.aboutRef); setOpen(false); }}>
            <Text style={styles.link}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { onNavigate(refs.serviceRef); setOpen(false); }}>
            <Text style={styles.link}>Services</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { onNavigate(refs.contactRef); setOpen(false); }}>
            <Text style={styles.link}>Contact</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

// Styles for the Navbar
const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#222',
  },
  logo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuButton: {
    color: '#fff',
    fontSize: 24,
  },
  dropdown: {
    position: 'absolute',
    right: 16,
    top: 60,
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 10,
    width: 150,
  },
  link: {
    color: '#fff',
    paddingVertical: 8,
    fontSize: 16,
  },
});


