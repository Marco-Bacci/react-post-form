import { useState } from "react";
import axios from "axios";
import BusinessCard from "../components/BusinessCard";

function App() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    isPublic: false,
  });
  // bonus
  const [alert, setAlert] = useState({ show: false, status: "", text: "" });

  const handleForm = (e) => {
    // formData[e.target.name] = e.target.value
    // setFormData({...formData})

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
      .then((resp) => {
        console.log("Dati inviati");
        setFormData({
          author: "",
          title: "",
          body: "",
          isPublic: false,
        });
        setAlert({
          show: true,
          status: "success",
          text: "richiesta inviata con successo",
        });
      })
      .catch((err) => {
        console.log("Errore nell'invio dei dati:" + err);
        setAlert({
          show: true,
          status: "error",
          text: "Errore nell'invio della richiesta",
        });
      });
  };

  return (
    <div className="container my-5">
      {alert.show && <div className="alert">{alert.text}</div>}
      <div className="row my-3 border border-dark rounded p-3">
        <div className="col-8">
          <form onSubmit={handleSubmit}>
            <div className="row border border-dark rounded">
              <div className="col-12 my-2">
                <label className="form-label">Autore del post</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  className="form-control"
                  value={formData.author}
                  onChange={handleForm}
                  placeholder="Inserisci l'autore"
                />
              </div>

              <div className="col-12 my-2">
                <label className="form-label">Titolo del post</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-control"
                  value={formData.title}
                  onChange={handleForm}
                  placeholder="Inserisci il titolo"
                />
              </div>

              <div className="col-12 my-2">
                <label className="form-label">Testo del post</label>
                <input
                  type="text"
                  id="body"
                  name="body"
                  className="form-control"
                  value={formData.body}
                  onChange={handleForm}
                  placeholder="Inserisci il contenuto"
                />
              </div>

              {/* CHECKBOX*/}
              <div className="col-12 my-2">
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="isPublic"
                    name="isPublic"
                    checked={formData.isPublic}
                    onChange={handleForm}
                    className="form-check-input"
                  />
                  <label className="form-check-label">
                    Pubblico (deseleziona per bozza)
                  </label>
                </div>
              </div>
              {/* BUTTON*/}
              <div className="col-12 my-3">
                <button type="submit" className="btn btn-primary">
                  Invia
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* CARD*/}
        <BusinessCard data={formData} />
      </div>
    </div>
  );
}

export default App;
