const accordion = function (options) {
        
  const defs = { 
    accordionElement: '.accordion', 
    duration: '300ms', 
    type: 'single' 
  };

  const opts = Object.assign({}, defs, options)
  /****
   * collapseContent
   * description: .....
   * contetn: ...
   * return: ...
   */
  const collapseContent = function (content) {
    content.style.height = null;
    content.style.visibility = null;
  };

  /****
   * expandContent
   * description: .....
   * contetn: ...
   * return: ...
   */
  const expandContent = function (content) {
    let height = content.scrollHeight;

    content.style.visibility = 'visible';
    content.style.height = height + 'px';
  };

  const accordions = document.querySelectorAll(opts.accordionElement);

  for (const accordion of accordions) {
    /******** Content Setting **********/
    const accordionContents = accordion.querySelectorAll('.content');
    for (const accordionContent of accordionContents) {
      accordionContent.style.transitionDuration = opts.duration;
    }
    /******** End ofContent Setting **********/

    /**** Titles Setting ************/
    const accordionTitles = accordion.querySelectorAll('.title');
    for (const accordionTitle of accordionTitles) {
      accordionTitle.onclick = function () {
        if (opts.type.toLowerCase() === 'single') {
          const activeTitle = accordion.querySelector('.title.active');
          activeTitle.classList.remove('active');
          collapseContent(activeTitle.nextElementSibling);

          this.classList.add('active');
          expandContent(this.nextElementSibling);
        } else if (opts.type.toLowerCase() === 'multiple') {
          /* toggle active class for current title */
          this.classList.toggle('active');

          const nextContent = this.nextElementSibling;
          if (nextContent.style.height) {
            collapseContent(nextContent);
          } else {
            expandContent(nextContent);
          }
        } else {
          throw 'type must be "single" or "multiple"';
        }
      };

      /******* Expand default active *****/
      if (accordionTitle.classList.contains('active')) {
        expandContent(accordionTitle.nextElementSibling);
      }
      /******* End of Title Setting *************/
    }
  }
};
