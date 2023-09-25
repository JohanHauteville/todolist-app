import "./styles.scss";
import { useSelector, useDispatch } from "react-redux";
import * as connectActions from "../../features/connect";
import { useNavigate } from "react-router-dom";

function Home() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const connectMode = useSelector((state) => state.connect.type);
  const navigate = useNavigate();
  dispatch(connectActions.hide());

  const handleConnexion = (e) => {
    e.preventDefault();
    navigate("/user/");
    // dispatch(connectActions.toggle());
    dispatch(connectActions.show());
  };

  return (
    <main
      className={theme === "light" ? "main-page" : "main-page main-page--dark"}
    >
      <section className="main-page__connect">
        <div className="main-page__connect-image"></div>
        <div className="main-page__connect-form">
          <form className="main-page__form">
            <h2>
              <span
                className={
                  connectMode === "SignIn"
                    ? "main-page__connect-form-title--actived"
                    : "main-page__connect-form-title"
                }
                onClick={() => dispatch(connectActions.toggle())}
              >
                Se connecter
              </span>{" "}
              ou{" "}
              <span
                className={
                  connectMode === "SignUp"
                    ? "main-page__connect-form-title--actived"
                    : "main-page__connect-form-title"
                }
                onClick={() => dispatch(connectActions.toggle())}
              >
                S'enregistrer
              </span>
            </h2>

            {connectMode === "SignUp" && (
              <>
                <label htmlFor="firstName" className="main-page__form-label">
                  PRÉNOM
                </label>
                <input
                  className="main-page__form-input"
                  type="text"
                  name="firstName"
                  placeholder="Entrer votre prénom"
                />

                <label className="main-page__form-label">NOM</label>
                <input
                  className="main-page__form-input"
                  type="text"
                  name="lastName"
                  placeholder="Entrer votre nom"
                />

                <label className="main-page__form-label">PASSWORD</label>
                <input
                  className="main-page__form-input"
                  type="password"
                  name="password"
                  placeholder="Entrer votre mot de passe"
                />

                <label className="main-page__form-label">EMAIL</label>
                <input
                  className="main-page__form-input"
                  type="mail"
                  name="email"
                  placeholder="Entrer votre email"
                />

                <label className="main-page__form-label">
                  Terms of service
                </label>
                <input
                  className="main-page__form-input"
                  type="checkbox"
                  name="firstName"
                />
                <input
                  className="main-page__form-input-submit"
                  type="submit"
                  value="S'enregistrer"
                  onClick={handleConnexion}
                />
              </>
            )}
            {connectMode === "SignIn" && (
              <>
                <label className="main-page__form-label">EMAIL</label>
                <input
                  className="main-page__form-input"
                  type="mail"
                  name="email"
                  placeholder="Entrer votre email"
                />
                <label className="main-page__form-label">PASSWORD</label>
                <input
                  className="main-page__form-input"
                  type="password"
                  name="password"
                  placeholder="Entrer votre mot de passe"
                />
                <input
                  className="main-page__form-input-submit"
                  type="submit"
                  value="Connexion"
                  onClick={handleConnexion}
                />
              </>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

export default Home;
