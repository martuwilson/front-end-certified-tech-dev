import { EjemploUseReducer } from "@/components/useContext/ejemploUseReducer";
import ExampleUseLayout from "@/hooks/ejemplouseLayout";
import {Stadistics} from "@/hooks/ejemploUseMemo";
import { ParentComponent } from "@/hooks/ParentComponent";
import { ComponentBasic } from "@/proptypes/ComponentBasic";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <EjemploUseReducer /> */}
      {/* <ExampleUseLayout />
      <Stadistics /> */}
      {/* <ParentComponent /> */}
      <ComponentBasic texto="Hola mundo" />
    </main>
  );
}
