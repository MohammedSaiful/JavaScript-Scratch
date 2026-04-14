function isLandscape(width, height) {
  return (width > height);
}

// Example usage:
console.log(isLandscape(800, 600)); // true (Landscape)
console.log(isLandscape(600, 800)); // false (Portrait)
console.log(isLandscape(1080, 1080)); // false (Square)