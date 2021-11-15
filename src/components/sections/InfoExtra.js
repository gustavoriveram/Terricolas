import React from 'react';
import classNames from 'classnames';
import { SectionInfoExtraProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionInfoExtraProps.types
}

const defaultProps = {
  ...SectionInfoExtraProps.defaults
}
const InfoExtra = ({
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
    title: '¡Conoce la App!',
    paragraph: 'Si tienes niños a cargo y quieres enseñarles a cuidar la casa común utilizando la app, te recomendamos leer lo que sigue ...'  };

  return (
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
                      src={require('./../../assets/images/kids.png')}
                      alt="Niños"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                     Colegios
                    </h4>
                  <p className="m-0 text-sm">
                    Si eres educador de niños y deseas fomentarles interés sobre el cuidado ambiental, ¡nuestra app educativa es para tí!. ¡Una saludable y novedosa forma de aprender!
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/family.png')}
                      alt="Familia"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Familia
                    </h4>
                  <p className="m-0 text-sm">
                  El hogar es nuestra primer escuela. Si eres adulto y vives con niños, guíalos en el aprendizaje socio-ambiental utilizando nuestra app. ¡Enseñemos a los más pequeños a cuidar nuestra casa común!.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/juntos.png')}
                      alt="Todos juntos"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Patrocinadores
                    </h4>
                  <p className="m-0 text-sm">
                    ¡Necesitamos el compromiso de toda la sociedad!. Si quieres colaborar contáctanos por nuestras redes sociales. Existen muchas maneras de ayudar, juntos ¡Hagamos el cambio!. 
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

InfoExtra.propTypes = propTypes;
InfoExtra.defaultProps = defaultProps;

export default InfoExtra;