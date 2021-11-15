import React from 'react';
import classNames from 'classnames';
import { SectionInfoExtraProps } from '../utils/SectionProps';
import SectionHeader from '../components/sections/partials/SectionHeader';
import Image from '../components/elements/Image';
import { max } from 'lodash';

const propTypes = {
  ...SectionInfoExtraProps.types
}

const defaultProps = {
  ...SectionInfoExtraProps.defaults
}
const Nosotros = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const outerClassesImage = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );
  

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: '¿Quiénes somos?',
    paragraph: 'Somos un equipo de jóvenes unidos por una misma preocupación: El maltrato a nuestra casa común. A través del reto propuesto por los organizadores de la Hackathon Laudato Si 2020, hemos querido involucrarnos mediante el presente proyecto. ¡Esperamos sea de tu agrado!.'  };

  return (
    <>
    <section
      {...props}
      className={outerClassesImage}
    >

    <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              ¡Equipo <span className="text-color-primary"> Natuhackers!</span>
            </h1>
            <div className="container-xs">
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">

              <Image
                className="has-shadow"
                src={require('../assets/images/EquipoNatuhackers.png')}
                alt="Hero"
                width={896}
                height={504} />
          </div>
        </div>
      </div>
      </section>


      <section
        {...props}
        className={outerClasses}
      >  

      <div className="container">
        <div className={innerClasses}>
         <br /> 
          <SectionHeader data={sectionHeader} className="center-content" />

          
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('../assets/images/DANIEL.png')}
                      alt="Niños"
                      width={max()}
                      height={max()} />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('../assets/images/CLAUDIO.png')}
                      alt="Niños"
                      width={max()}
                      height={max()} />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('../assets/images/JULIANA.png')}
                      alt="Niños"
                      width={max()}
                      height={max()} />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('../assets/images/GUSTAVO.png')}
                      alt="Niños"
                      width={max()}
                      height={max()} />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('../assets/images/MARÍA.png')}
                      alt="Niños"
                      width={max()}
                      height={max()} />
                  </div>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('../assets/images/CRISTOBAL.png')}
                      alt="Niños"
                      width={max()}
                      height={max()} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </>
  );
}

Nosotros.propTypes = propTypes;
Nosotros.defaultProps = defaultProps;

export default Nosotros;