import { Data } from "../../types/types.ts";
import classes from "./Card.module.css";
type CardProps = {
  data: Data;
};

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div>
      <div className={classes.wrap} key={data.id}>
        <h1>{data.titleTeam}</h1>
        <ul>
          {data.workers.map((worker) => (
            <li key={worker}>{worker}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
