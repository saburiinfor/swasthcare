// Function which would return the page url to be render depending on labactiveStage item value stored in sessionStorage
const getPageLink = function () {
    let pageUrl;
    const labActiveStage = sessionStorage.getItem('conferkare.labappointment.activeStage');
    switch (parseInt(labActiveStage)) {
        case 0:
            pageUrl = '/LabAppointment';
            break;
        case 1:
            pageUrl = '/SelectClinic';
            break;
        
        default:
            pageUrl = '/LabAppointment';
            break;
    }
    return pageUrl;
};

export default getPageLink;