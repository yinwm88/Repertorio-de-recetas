// Archivo: TabPanel.js
import React from 'react';

export default function TabPanel({ children, value, index }) {
  return value === index && <div>{children}</div>;
}
