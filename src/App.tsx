import { ReactP5Wrapper } from '@p5-wrapper/react';
import { mySketch } from './sketches/mySketch';
import { SEO } from './SEO';

function App() {
  return (
    <>
      <SEO />
      <ReactP5Wrapper sketch={mySketch} />
    </>
  );
}

export default App;
