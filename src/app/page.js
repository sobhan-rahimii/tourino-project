
import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/templates/Banner";
import FlightSelectionForm from "@/components/partials/FlightSelectionForm";
import ModalContainer from "@/components/partials/container/ModalContainer";
import { serverFetch } from "@/core/services/http";
import TourList from "@/components/templates/TourList";
import PhoneTorino from "@/components/templates/phoneTourino";
import WhyTourino from "@/components/templates/whyTourino";
import SearchForm from "@/components/templates/searchForm";

export default async function Home({searchParams}) {
  const params = await searchParams;
    const data = await serverFetch("/tour",params,{cache: "no-store"})
    
  return (
    <>
    <div className="w-full overflow-hidden  " >

      <Banner />
      <SearchForm/>
      <TourList tourData={data} />
      <PhoneTorino/>
      <WhyTourino/>
    </div>
    </>
  );
}
