import "./AcceptPembayaran.css";
import bca from "./bca.webp";
import Form from "react-bootstrap/Form";

function AcceptPembayaran() {
  return (
    <div id="utama">
      <div id="pmbks">
        <div id="pmbksKedua">
          <div id="pmbksKetiga">
            <Form>
              <p>Isi nominal Donasi</p>
              <input type="text" value="Rp. 10.000" className="valueNominal" />
              <div id="valid">
                <img src={bca} alt="" />
                <p>BCA Virtual Account</p>
                <a href="/pembayaran">Ganti</a>
              </div>
              <input type="text" className="valueUsername" placeholder="Nama lengkap" />
              <input type="text" className="inputEmail" placeholder="Alamat Email" />
              <div id="keiinginanUser">
                <p>Sembunyikan nama saya (donasi sebagai anonim)</p>
                <Form.Check type="switch" id="custom-switch" className="check" />
              </div>
              <p className="berdoa">Berdoa di Donasi ini (opsional)</p>
              <textarea className="textbox" placeholder="Tulis doa untuk penggalang dana atau dirimu sendiri  di sini. Biar doa kamu bisa  di lihat dan diamini oleh orang baik lainnya"/>
              <div className="btnFinish">
                <a href="#" >
                  Selesaikan Donasi
                </a>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcceptPembayaran;
