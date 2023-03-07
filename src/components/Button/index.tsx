import "./styles.scss";

type ButtonProps = {
  text: string;
  router?: string;
};

export function Button(props: ButtonProps) {
  return (
    <button type="button" className="mainButton">
       <div className="imgPropose4"></div>
      <span>{props.text}</span>
      <div className="imgPropose4"></div>
    </button>
  );
}
