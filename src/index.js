// module /spa/
// Provides chat slider capability

import $ from 'jquery';
import './spa.css';

const spa = (
  () => {
    const configMap = {
      extended_height: 434,
      extended_title: 'click to retract',
      retracted_height: 16,
      retracted_title: 'click to extend',
      temple_html: '<div class="spa-slider"></div>',
    };

    // Declare all other module scope letiables
    let $chatSlider;
    // DOM method /toggleSlider/
    // alternates slider height
    const toggleSlider = () => {
      const sliderHeight = $chatSlider.height();

      if (sliderHeight === configMap.retracted_height) {
        $chatSlider
          .animate({
            height: configMap.extended_height,
          })
          .attr('title', configMap.extended_title);
        return true;
      } else if (sliderHeight === configMap.extended_height) {
        $chatSlider
          .animate({
            height: configMap.retracted_height,
          })
          .attr('title', configMap.retracted_title);
        return true;
      }
      // do not take action if slider is in transition
      return false;
    };

    // Event handler /onClickSlider/
    // receives click event and calls toggleSlider
    const onClickSlider = () => {
      toggleSlider();
      return false;
    };

    // Public method /initModule/
    // sets initial state and provides feature
    const initModule = ($container) => {
      $container.html(configMap.temple_html);
      $chatSlider = $container.find('.spa-slider');
      // initialize slider height and title
      // bind the user click event to the event handler
      $chatSlider
        .attr('title', configMap.retracted_title)
        .click(onClickSlider);
      return true;
    };
    return {
      initModule,
    };
  })();

// Start spa once DOM is ready
$(() => {
  spa.initModule($('#spa'));
});
