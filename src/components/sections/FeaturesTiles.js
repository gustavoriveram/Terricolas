import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
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
    title: '¡Resuelve retos!',
    paragraph: '¡En la App Terrícolas encontrarás una gran variedad de retos para que nos ayudes con el cuidado de nuestra casa común y ganes muchos puntos!.'  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/terricola_verde.png')}
                      alt="Terricola verde"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                     Reciclando Ando
                    </h4>
                  <p className="m-0 text-sm">
                    Descubre el maravilloso mundo del reciclaje, separa todo lo que tires para poder reutilizar lo más que se pueda. ¡Te sorprenderás al ver cuantas cosas pueden rescatarse!
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/terricola_azul.png')}
                      alt="Terricola azul"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Visitando Ando
                    </h4>
                  <p className="m-0 text-sm">
                    Conoce maravillosos lugares verdes cercanos a tu hogar. ¡Todos ellos necesitan de tu ayuda para ser restaurados o mantenidos!.  
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/terricola_verde.png')}
                      alt="Terricola verde"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Hidratando Ando
                    </h4>
                  <p className="m-0 text-sm">
                    Es saludable beber mucha agua por día, pero muchos animales sin hogar no tienen esta suerte. ¡Ayúdalos a hidratarse convidándoles un poco de tu agua!. 
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/terricola_azul.png')}
                      alt="Terricola azul"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Eco Ladrillando
                    </h4>
                  <p className="m-0 text-sm">
                    ¿Has oído hablar de ladrillos ecológicos? Pues que mejor que reciclar y contribuir a la construcción de una vivienda ecológica, ¡a la vez!. 
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/terricola_verde.png')}
                      alt="Terricola verde"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Cosechando Ando
                    </h4>
                  <p className="m-0 text-sm">
                    Aprende a construir tu propia huerta en casa utilizando semillas ecológicas y empleando técnicas favorables al medio ambiente, además de efectivas. 
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/terricola_azul.png')}
                      alt="Terricola azul"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Conociendo Ando
                    </h4>
                  <p className="m-0 text-sm">
                    Conoce a más gente como tú, personas interesadas en el cuidado de la casa común. Realiza retos junto a ellos colaborando o compitiendo, ¡vas a divertirte!.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;