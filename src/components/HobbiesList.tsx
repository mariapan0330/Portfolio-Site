import React from "react";
import HandleHobbyEnterT from "src/types/hobby-enter";
import SetShowTetris from "src/types/setshowtetris";

type HobbiesListProps = {
  handleHobbyEnter: HandleHobbyEnterT;
  setShowTetris: SetShowTetris;
}

const HobbiesList: React.FC<HobbiesListProps> = ({
  handleHobbyEnter,
  setShowTetris,
}) => {
  const hobbiesList: string[] = [
    "sewing",
    "crocheting",
    "whittling",
    "painting",
    "pyrography",
    // 'Tetris',
  ];

  const tetris = () => {
    console.log("tetris");
    setShowTetris(true);
  };

  return (
    <>
      {hobbiesList.map((hobby: string, i: number) => (
        <React.Fragment key={`hobby-${i}`}>
          <span
            className="emphasis"
            onMouseEnter={(e) => handleHobbyEnter(e, hobby)}
          >
            {hobby}
          </span>
          <span style={{ color: "rgb(54, 69, 84)" }}>, &nbsp;</span>
        </React.Fragment>
      ))}
      <span
        className="emphasis"
        onMouseEnter={(e) => {
          tetris();
        }}
      >
        Tetris
      </span>
      <span style={{ color: "rgb(54, 69, 84)" }}>, &nbsp;</span>
      and making little&nbsp;
      <span
        className="emphasis"
        onMouseEnter={(e) => handleHobbyEnter(e, "popsicle")}
      >
        popsicle stick houses
      </span>
      &nbsp;for my parakeet,&nbsp;
      <span
        className="emphasis"
        onMouseEnter={(e) => handleHobbyEnter(e, "bird")}
      >
        Samwise
      </span>
      .
    </>
  );
};

export default HobbiesList;
