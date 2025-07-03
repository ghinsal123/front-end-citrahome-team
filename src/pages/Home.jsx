import React from "react";
import TextField from "../components/TextField";

export default function Home() {
  return (
    <div className="w-full min-h-screen p-6 space-y-10 bg-white">
      <section>
        <h2 className="text-xl text-gray-800 font-bold mb-4">Preview TextField</h2>

        {/* kalau mau kotak contoh punya latar tersendiri, bisa tambahkan bg-slate-100 */}
        <div className="space-y-8">
          <TextField placeholder="Contoh Input" />
        </div>
      </section>
    </div>
  );
}
