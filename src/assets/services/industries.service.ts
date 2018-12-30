import { Injectable } from '@angular/core';
import { Industry } from 'src/assets/interfaces/industry';

@Injectable({
  providedIn: 'root'
})
export class IndustriesService {
  industries: Industry[] = [
    {
      id: 1,
      imgUrl: "../../assets/Images/industries/telco-icon.png",
      icon:'fa-globe',
      head: "Telecom",
      description: `Our highly trained & talented team
       can help you manage inbound and outbound programs in multiple locations around the globe.`
    },
    {
      id: 2,
      imgUrl: "../../assets/Images/industries/healthcare-icon.png",
      icon:'fa-medkit',
      head: "Healthcare",
      description: `We are HIPAA compliant. We provide Medical Billing, Coding, Claims Processing, Revenue Cycle Management & Chronic
      Care Management.`
    },
    {
      id: 3,
      imgUrl: "../../assets/Images/industries/tec-icon.png",
      icon:'fa-cogs',
      head: "Technology",
      description: `A multilingual team of IT experts. 
      We provide multi-channel customer care and post-sale product support solutions.`
    },
    {
      id: 4,
      imgUrl: "../../assets/Images/industries/auto-icon.png",
      icon:'fa-car',
      head: "Automotive",
      description: `As your Business Development Center, we help you increase your sales and give you higher reach to more opportunities.`
    },
    {
      id: 5,
      imgUrl: "../../assets/Images/industries/retail-icon.png",
      icon:'fa-shopping-basket',
      head: "Retail & E-commerce",
      description: `We help retailers planning their
      business workflow with flexibility in executing processes that guarantee successful & competitive results.`
    },
    {
      id: 6,
      imgUrl: "../../assets/Images/industries/travel-icon.png",
      icon:'fa-plane',
      head: "Travel & Leisure",
      description: `OWe fully manage booking support
      for your online customers in addition to loyalty programs and sales management.`
    }];

  constructor() { }

}
