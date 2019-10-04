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
      let neededHours;
      let weeks;
      if (knowsProgramming == true) {
        neededHours = 800;
      } else {
        neededHours = 1300;
      }
      weeks = neededHours / config[focus];
      return Math.ceil(weeks);
  };
  
  // console.log(getTimeForEducation());
  