import React from "react";
export const wizards = {
  appointment: {
    flow: 1,
    steps: 7,
    key: 'conferkare.appointment.activeStage'
  },
  labappointment: {
    flow: 2,
    steps: 2,
    key: 'conferkare.labappointment.activeStage'
  }
};

export const WizardContext = React.createContext(
  wizards.appointment
);
