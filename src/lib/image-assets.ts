import type { StaticImageData } from "next/image";

import heroTechnician from "@images/hero-technician.jpg";
import serviceComputer from "@images/service-computer.jpg";
import serviceHack from "@images/service-hack.jpg";
import serviceWifi from "@images/service-wifi.jpg";

export const heroTechnicianImage: StaticImageData = heroTechnician;
export const serviceComputerImage: StaticImageData = serviceComputer;
export const serviceHackImage: StaticImageData = serviceHack;
export const serviceWifiImage: StaticImageData = serviceWifi;

export const HERO_IMAGE_SIZES =
  "(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1600px";
