import React from 'react';
import Particles from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';
import { loadStarsPreset } from 'tsparticles-preset-stars';

const customInit = async (engine = Engine) => {
  console.log(engine);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
  await loadStarsPreset(engine);
};

const particlesLoaded = (container) => {
  console.log(container);
};

const ParticleBackground = () => {
  return (
    <Particles
      id="tsparticles"
      init={customInit}
      loaded={particlesLoaded}
      height={'100vh'}
      style={{ position: 'absolute' }}
      options={{
        preset: 'stars',
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        background: {
          color: {
            value: '#131721'
          }
        },
        particles: {
          color: {
            value: '#aaa'
          }
        }
      }}
      /* options={{
        fpsLimit: 160,
        
        particles: {
          color: {
            value: '#bbb'
          },
          destroy: {
            color: '#bbb',
            distance: 200,
            enable: true,
            opacity: 0.3,
            width: 1
          },
          collisions: {
            enable: false
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 2,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 1000
            },
            value: 70
          },
          opacity: {
            value: 0.3
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: { min: 1, max: 4 }
          }
        },
        detectRetina: true
      }} */
    />
  );
};

export default ParticleBackground;
