import { EjemploUseReducer } from "@/components/useContext/ejemploUseReducer";
import ExampleUseLayout from "@/hooks/ejemplouseLayout";
import {Stadistics} from "@/hooks/ejemploUseMemo";
import { ParentComponent } from "@/hooks/ParentComponent";
import { ComponentAvanzado } from "@/proptypes/ComponentAvanzado";
import { ComponentBasic } from "@/proptypes/ComponentBasic";
import Image from "next/image";

const list = [
  { id: 1, name: "React" },
  { id: 2, name: "Vue" },
  { id: 3, name: "Angular" },
  { id: 4, name: "Svelte" },
  { id: 5, name: "Ember" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <EjemploUseReducer /> */}
      {/* <ExampleUseLayout />
      <Stadistics /> */}
      {/* <ParentComponent /> */}
     {/*  <ComponentBasic texto="Hola mundo" /> */}
    <ComponentAvanzado list={list} title={'Tecnologias'}/>
    </main>
  );
}
