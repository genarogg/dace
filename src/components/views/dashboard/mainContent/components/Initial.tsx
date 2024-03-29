import Btn from "./global/Btn";

interface InitialProps {
  setContext: React.Dispatch<React.SetStateAction<string>>;
}

const Initial: React.FC<InitialProps> = ({ setContext }) => {
  const myData = () => {
    /* setContext(""); */
    console.log("Mis datos");
  };

  const changePass = () => {
    /* setContext(""); */
    console.log("changePass");
  };

  const logOut = () => {
    console.log("logOut");
  };

  const uploadNotes = () => {
    /* setContext(""); */
    console.log("uploadNotes");
  };

  const checkSchedule = () => {
    /* setContext(""); */
    console.log("checkSchedule");
  };

  const listingsSection = () => {
    /* setContext(""); */
    console.log("listingsSection");
  };

  return (
    <div className="container-main">
      <Btn
        img={"/dashboard/1-datos.png"}
        text="Mis datos"
        action={() => {
          myData();
        }}
      />

      <Btn
        img={"/dashboard/2-combio-contrasena.png"}
        text="Cambiar contraseña"
        action={() => {
          changePass();
        }}
      />

      <Btn
        img={"/dashboard/3-salir-2.png"}
        text="Cerrar sesión"
        action={() => {
          logOut();
        }}
      />

      <Btn
        img={"/dashboard/4-cargar-notas.png"}
        text="Cargar Notas"
        action={() => {
          uploadNotes();
        }}
      />

      <Btn
        img={"/dashboard/5-consultar-horarios.png"}
        text="Consultar Horario"
        action={() => {
          checkSchedule();
        }}
      />
      <Btn
        img={"/dashboard/6-listados-por-seccion.png"}
        text="Listados por sección"
        action={() => {
          listingsSection();
        }}
      />
    </div>
  );
};

export default Initial;
