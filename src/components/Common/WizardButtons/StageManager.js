import React from 'react';

// Function which would return the page url to be render depending on activeStage item value stored in sessionStorage
const getPageLink = function () {
  let pageUrl;
  const activeStage = sessionStorage.getItem('conferkare.appointment.activeStage');
  switch (parseInt(activeStage)) {
    case 0:
      pageUrl = '/dashboard';
      break;
    case 1:
      pageUrl = '/newAppointment';
      break;
    case 2:
      pageUrl = '/selectPhysician';
      break;
    case 3:
      pageUrl = '/selectappointmentdate';
      break;
    case 4:
      pageUrl = '/selectappointmentdate';
      break;
    default:
      pageUrl = '/dashboard';
      break;
  }
  return pageUrl;
};

export default getPageLink;