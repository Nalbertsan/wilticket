import React from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
  MapIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import PersonalForm from "../PersonalForm";
import AdressForm from "../AdressForm";
import AcessForm from "../AcessForm";
import UseStepperContext from "../../../use/UseStepperContext";
 

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <PersonalForm />;
    case 1:
      return <AdressForm />;
    case 2:
      return <AcessForm />;
    default:
      throw new Error('Unknown step');
  }
}

export default function RegistrationSteps() {
  const { infoStepper, setInfoStepper } = UseStepperContext();
  const [activeStep, setActiveStep] = React.useState(infoStepper.activeStep);

  return (
    <div className="h-[525px] ml-[25px] mr-[25px] flex flex-col py-4 px-8 gap-16">
      <Stepper
        activeStep={infoStepper.activeStep}
        activeLineClassName="bg-[#404c76]"

      >
        <Step activeClassName="bg-[#404c76] ring-[#404c76]/50" completedClassName="bg-[#404c76]">
          <UserIcon className="h-5 w-5"/>
          <div className="absolute -bottom-[2.5rem] w-max text-center">
            <Typography
              variant="h6"
              className = {infoStepper.activeStep === 0 ? "text-[#404c76]" : "text-[#B0BEC5]"}
            >
              Dados Pessoais
            </Typography>
          </div>
        </Step>
        <Step activeClassName="bg-[#404c76] ring-[#404c76]/50" completedClassName="bg-[#404c76]">
          <MapIcon className="h-5 w-5" />
          <div className="absolute -bottom-[2.5rem] w-max text-center">
            <Typography
              variant="h6"
              className = {infoStepper.activeStep === 1 ? "text-[#404c76]" : "text-[#B0BEC5]"}
            >
              Endereço
            </Typography>
          </div>
        </Step>
        <Step activeClassName="bg-[#404c76] ring-[#404c76]/50" completedClassName="bg-[#404c76]">
          <ShieldCheckIcon className="h-5 w-5" />
          <div className="absolute -bottom-[2.5rem] w-max text-center">
            <Typography
              variant="h6"
              className = {infoStepper.activeStep === 2 ? "text-[#404c76]" : "text-[#B0BEC5]"}
            >
              Dados de Acesso
            </Typography>
          </div>
        </Step>
      </Stepper>
 
      {getStepContent(infoStepper.activeStep)}
    </div>
  );
}

function makeStyles(arg0: () => { root: { "& .MuiStepIcon-active": { color: string; }; "& .MuiStepIcon-completed": { color: string; }; "& .Mui-disabled .MuiStepIcon-root": { color: string; }; }; }) {
  throw new Error("Function not implemented.");
}
