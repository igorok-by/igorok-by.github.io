// Main js file

$(function () {

  let vac = $('.chart__part--bckgr-success'),
    absent = $('.chart__part--bckgr-danger'),
    sick = $('.chart__part--bckgr-warning'),
    popupVac = $('#popupVacation'),
    popupAbs = $('#popupAbsent'),
    popupSick = $('#popupSick');

  function popup(target, tooltip) {
    target.tooltipster({
      content: tooltip,
      contentCloning: true,
      arrow: false,
      delay: 100,
      updateAnimation: 'scale'
    });
  };

  popup(vac, popupVac);
  popup(absent, popupAbs);
  popup(sick, popupSick);
});