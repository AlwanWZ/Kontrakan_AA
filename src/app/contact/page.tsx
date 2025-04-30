export default function Contact() {
    return (
      <main className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Kontak & Lokasi</h2>
  
          <div className="mb-4">
            <p><strong>Alamat:</strong> Dekat, Tri Tunggal Jaya, Kec. Banjar Margo, Kab. Tulang Bawang, Lampung</p>
            <p><strong>Kode Lokasi Google:</strong> Q78Q+C2 Tri Tunggal Jaya</p>
            <p><strong>Telepon/WA:</strong> <a href="https://wa.me/62895320695308" target="_blank" className="text-blue-600 underline">0895-3206-95308</a></p>
          </div>
  
          <iframe
            src="https://www.google.com/maps?q=Q78Q%2BC2+Tri+Tunggal+Jaya,+Kab.+Tulang+Bawang,+Lampung&output=embed"
            width="100%"
            height="300"
            className="rounded-xl border"
            loading="lazy"
          ></iframe>
        </div>
      </main>
    );
  }
  