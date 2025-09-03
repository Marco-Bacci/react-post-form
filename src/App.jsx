import { useState } from "react";

function App() {
  return (
    <div className="container my-5">
      <div className="row my-3 border border-dark rounded p-3">
        <div className="col-8">
          <form>
            <div className="row border border-dark rounded">
              <div className="col-12 my-2">
                <label className="form-label">Autore del post</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  className="form-control"
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
        <div className="col-4 my-2">
          <div className="card">
            <div className="card-header">
              <h2>autore</h2>
            </div>
            <div className="card-body">
              <h2>titolo</h2>
              <p>descrizione</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
