import Navbar from "@/components/global/navbar/Navbar";
import React from "react";

function About() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <h1 className="text-center text-5xl font-pop font-bold">
        <span className="text-primary">About</span> us
      </h1>
      <div className="w-full h-5/6 mt-4 flex justify-between items-start px-8">
        <div className="w-1/2 h-full mt-4">
          <p className="font-mon font-normal text-xl text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            numquam reiciendis non ratione! Provident, inventore similique autem
            quasi quo soluta id excepturi neque labore sequi at laborum aut esse
            maxime. Maiores dolorum ipsam quibusdam adipisci reprehenderit?
            Nulla, ipsa amet. Doloribus eligendi illum iure animi esse
            dignissimos, laboriosam rerum soluta sint rem unde quo saepe id
            praesentium quibusdam consectetur quis iusto quidem cupiditate
            eveniet quasi eos. Consectetur commodi quaerat minus aliquam
            sapiente veritatis necessitatibus quasi ullam! Impedit provident
            debitis esse ullam commodi unde praesentium culpa eius, repudiandae
            maxime vel blanditiis quo doloremque aliquid tenetur quos aspernatur
            possimus nulla deserunt adipisci rerum assumenda voluptas quia
            explicabo! Expedita, sint? Totam atque, culpa debitis obcaecati
            assumenda delectus ipsum, nesciunt libero accusamus voluptates
            cupiditate! Quas recusandae rem vel, quidem enim fuga perferendis
            eius eos, alias impedit dolores itaque incidunt sint tempora sequi
            nostrum sapiente est repellendus iste, at dolorem animi! Iusto odit
            itaque reiciendis totam.
          </p>
        </div>

        <div className="w-1/2 h-[90%] mt-4 p-6 relative">
            <img src="https://picsum.photos/500" className="w-80 absolute inset-0 left-4" alt="pic" />
            <img src="https://picsum.photos/900" className="w-72 absolute inset-96 left-[26rem]" alt="pic" />
            <img src="https://picsum.photos/700" className="w-80 absolute inset-52 z-10" alt="pic" />
            <img src="https://picsum.photos/800" className="w-80 absolute left-[26rem] top-0" alt="pic" />
            <img src="https://picsum.photos/800" className="w-72 absolute left-4 -bottom-32" alt="pic" />
        </div>
      </div>
    </div>
  );
}

export default About;
