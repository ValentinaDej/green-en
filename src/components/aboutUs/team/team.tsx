import TeamCard from "./teamCard";
import { teamData } from "@/constants";
import classes from "./team.module.css";

const Team = () => {
  return (
    <div className={classes.teamGrid}>
      {teamData.map((member) => (
        <TeamCard
          key={member.name}
          name={member.name}
          position={member.position}
          photo={member.photo}
        />
      ))}
    </div>
  );
};

export default Team;
