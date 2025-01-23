import React from "react";

const StrukturOrganisasi = () => {
  const members = [
    { id: 1, name: "Ps. Hendrawan", position: "Gembala", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Ps. C.H Tarigan", position: "Wakil Gembala", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Ps. Roigen Sumbung", position: "Sekretaris", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Ibu Fransiska", position: "Bendahara", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Ps. Mansen Sipayung", position: "Youth Pastor", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Ps. Herodes Lenamah", position: "Koord. Divisi KKA", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Ibu Sri Sudiastuti", position: "Koord. Divisi Doa", image: "https://via.placeholder.com/150" },
    { id: 7, name: " Ibu Deasy J Polii", position: "Koord. Divisi Worship & Multimedia ", image: "https://via.placeholder.com/150" },
    { id: 8, name: "Ibu Rotua Pestauli", position: "Koord. Divisi Sekolah Minggu", image: "https://via.placeholder.com/150" },
    { id: 9, name: "Bpk. Suhiyanto", position: "Koord. Divisi Diakonia", image: "https://via.placeholder.com/150" },
    { id: 10, name: "Bpk. Anton Suyatno", position: "Koord. Divisi Usher Greeter", image: "https://via.placeholder.com/150" },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
       
        <h2 className="text-5xl md:text-6xl font-bold mb-10"> Our Leader</h2>

        <div className="space-y-6">
          {/* Baris Pertama: 2 Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {members.slice(0, 2).map((member) => (
              <div
                key={member.id}
                className="bg-white shadow-lg rounded-lg p-4 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-700">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.position}</p>
              </div>
            ))}
          </div>
          {/* Baris Kedua hingga Keempat: 3 Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {members.slice(2).map((member) => (
              <div
                key={member.id}
                className="bg-white shadow-lg rounded-lg p-4 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-700">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrukturOrganisasi;
