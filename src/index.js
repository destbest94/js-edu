/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */

module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      const usually = 800;
      const basics = 500;
      const power = config[focus];

      return knowsProgramming ? Math.ceil(usually / power) : Math.ceil((usually + basics) / power);
  };
  