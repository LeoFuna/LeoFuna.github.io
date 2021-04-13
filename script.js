function openIconPage(event) {
  const element = event;
  console.log(element);
  switch (element.id) {
    case 'gitlogo':
      window.open('https://github.com/LeoFuna');
      break;
    case 'linkedinlogo':
      window.open('https://www.linkedin.com/in/leonardofunabashi/')
    default:
  }
}