import "./Pembayaran.css";
import qris from "./qris.png";
import dana from "./dana.webp";
import gopay from "./gopay.png";
import bca from "./bca.webp";
import bri from "./bri.png";

function Pembayaran() {
  return (
    <div id="pembungkusUtama">
      <div id="wrapper4">
        <div id="pbks">
          <form action="">
            <p>Nominal Pembayaran</p>
            <input className="besar" type="tel" placeholder="Rp." />
            <span className="spanPembayaran">Nominal pembayaran RP. 10.000</span>
            <div>
              <p className="jenisPembayaran">Virtual Account (verifikasi otomatis, minimal nominal Rp. 10.000)</p>
              <div id="imgRadio">
                <img className="logo" src={qris} alt="" />
                <input className="radio" name="payment" type="radio" />
              </div>
              <div id="imgRadio">
                <img className="logo" src={dana} alt="" />
                <input className="radio" name="payment" type="radio" />
              </div>
              <div id="imgRadio">
                <img className="logo" src={gopay} alt="" />
                <input className="radio" type="radio" name="payment" />
              </div>
            </div>
            <div>
              <p className="jenisPembayaran">Transfer Bank (verifikasi manual, minimal nominal Rp. 10.000)</p>
              <div id="imgRadio">
                <img className="logo" src={bca} alt="" />
                <input className="radio" type="radio" name="payment"/>
              </div>
              <div id="imgRadio">
                <img className="logo" src={bri} alt="" />
                <input className="radio" type="radio" name="payment"/>
              </div>
                <a href="/accept" className="btnDns">
                  Lanjutkan Donasi
                </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Pembayaran;
