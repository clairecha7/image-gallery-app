import React from "react";

// const Picture = (props) => {
//   const { photographer, image } = props;
//   return (
//     <div>
//       <h1>This is the {photographer}</h1>
//       <img src={image} alt={photographer} />
//     </div>
//   );
// };

const Picture = ({ photographer, image }) => {
  return (
    <div>
      <h1>This is the {photographer}</h1>
      <img src={image} alt={photographer} />
    </div>
  );
};

export default Picture;
